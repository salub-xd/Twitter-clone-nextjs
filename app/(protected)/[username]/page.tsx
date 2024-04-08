import React from 'react';
import { UserClient } from './_components/user-client';
import { db } from '@/lib/db';
import { getUserByUsername } from '@/data/username';
import { TwitterCard } from '@/components/ui/twitter-card';
import { User } from '@/types';
import dateFormat, { masks } from "dateformat";

interface UsernameProps {
    params: {
        username: string;
    };
}


interface TwitterCardProps {
    id: string;
    title: string;
    image?: string;
    userId: string;
    createdAt: string;
    likedIds?: string[];
    user: User;
}

const UsernamePage: React.FC<UsernameProps> = async ({ params }) => {

    // const user = await getUserByUsername(params.username);

    const user = await db.user.findUnique({
        where: {
            username: params.username
        },
    })

    const posts = await db.post.findMany({
        where: {
            userId: user?.id
        },
        include: {
            user: true
        }
    });

    const formettedUser = {
        id: user?.id,
        name: user?.name,
        username: user?.username,
        bio: user?.bio,
        image: user?.image,
        coverImage: user?.coverImage,
        createdAt: dateFormat(user?.createdAt, 'mmm d, yy'),
        followingIds: user?.followingIds

    }

    const formettedProducts: TwitterCardProps[] = posts.map((item) => ({
        id: item.id,
        title: item.title,
        image: item.image,
        likedIds: item.likedIds,
        createdAt: dateFormat(item.createdAt, 'mmm d, yy'),
        user: item.user
    }))

    // const posts = await db.post.findMany({
    //     where: {
    //         user: {
    //             username: params.username
    //         }
    //     },
    // })

    return (
        <div className="w-auto sm:w-[600px] border">
            <UserClient data={formettedUser} />
            {/* <div><h1>Posts</h1></div> */}
            {formettedProducts?.map((item) => (
                <TwitterCard key={item.id} data={item} />
            ))}
        </div>
    );
};

export default UsernamePage;