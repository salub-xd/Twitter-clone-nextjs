"use server";

import { z } from "zod";
import { PostSchema } from "@/schemas";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { getUserById } from "@/data/user";

export const post = async (values: z.infer<typeof PostSchema>) => {

    const validatedFields = PostSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: 'Invalid fields' };
    }

    const { title, image } = validatedFields.data;

    const user = await currentUser();

    if (!user) {
        return { error: "Unauthorized!" }
    }

    const dbUser = await getUserById(user.id);

    if (!dbUser) {
        return { error: "Unauthorized" }
    }

    const post = await db.post.create({
        data: {
            title,
            image,
            userId: user.id,
        }
    })

    return { success: "Post created!" }

} 