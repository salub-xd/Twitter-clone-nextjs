"use server";

import { z } from "zod";
import { FollowSchema, PostSchema } from "@/schemas";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { getUserById } from "@/data/user";
import { useReducer } from "react";

export const follow = async (values: z.infer<typeof FollowSchema>) => {

    const validatedFields = FollowSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: 'Invalid fields' };
    }

    const { id } = validatedFields.data;

    const followingUser = await getUserById(id);

    if (!followingUser) {
        return { error: "User dosn't exits!" }
    }

    const user = await currentUser();

    if (!user) {
        return { error: "Unauthorized!" }
    }

    const dbUser = await getUserById(user.id);

    if (!dbUser) {
        return { error: "Unauthorized" }
    }

    if (followingUser.id === user.id) {
        return { error: "You can't follow yourself!" }
    }





    const isAlreadyFollowing = dbUser.followingIds.includes(followingUser.id) ?? false;
    if (isAlreadyFollowing) {

        const unfollowingUser = dbUser.followingIds.filter((id => id === followingUser.id));
        const unfollowerUser = dbUser.followingIds.filter((id => id === user.id));

        await db.user.update({
            where: {
                id: user.id
            },
            data: {
                followingIds: unfollowingUser
            }
        })

        await db.user.update({
            where: {
                id: followingUser.id
            },
            data: {
                followersIds: unfollowerUser
            }
        });

        return { success: 'Unfollowed!' }
        // }

    }


    console.log("This already exists");


    const followingIdUser = await db.user.update({
        where: {
            id: user.id
        },
        data: {
            followingIds: {
                set: [followingUser.id]
            },
        }
    })

    const followerUser = await db.user.update({
        where: {
            id: followingUser.id
        },
        data: {
            followersIds: {
                set: [user.id]
            },
        }
    })

    return { success: "Followed!" }

} 