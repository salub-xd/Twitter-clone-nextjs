'use server';

import { Button } from '@/components/ui/button';
import { getUserByUsername } from '@/data/username';
import { db } from '@/lib/db';
import { Post, User } from '@prisma/client';
import dateFormat from 'dateformat';
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa6';
import { PostClientPage } from './components/post-page';

interface PostPageProps {
    params: {
        postId: string;
        username: string;
    };
}

interface PostsCardProps {
    id: string;
    title: string;
    image?: string;
    userId: string;
    createdAt: string;
    likedIds?: string[];
    user: User;
}

const PostPage: React.FC<PostPageProps> = async ({ params }) => {

    // const username = params?.username;
    // // const userId = await getUserByUsername(username);
    // console.log({username});
    // console.log({postId:params?.postId});

    const post = await db.post.findFirst({
        where: {
            id: params?.postId
        },
        include: {
            user: true
        }
    });
    console.log({ post });


    // posts. .map((item) => ({
    const formettedProducts = {
        id: post?.id,
        title: post?.title,
        image: post?.image,
        likedIds: post?.likedIds,
        userId: post?.userId,
        createdAt: dateFormat(post?.createdAt, 'mmm d, yy'),
        user: post?.user
    }
    // ))

    return (
        <div className='w-[350px] sm:w-[400px] lg:w-[600px] border-b '>
            <PostClientPage data={formettedProducts} />
        </div>
    )
}

export default PostPage;
