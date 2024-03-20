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
        username:string;
    };
}

interface PostsCardProps {
    data: {
        id: string;
        title: string;
        image?: string;
        userId: string;
        createdAt: string;
        likedIds?: string[];
        user: User;
    }
}

const PostPage: React.FC<PostPageProps> = async ({ params }) => {

    // const username = params?.username;
    // // const userId = await getUserByUsername(username);
    // console.log({username});
    // console.log({postId:params?.postId});
    
    const posts = await db.post.findFirst({
        where: {
            id: params?.postId
        },
        include: {
            user: true
        }
    });
    console.log({posts});


    // const formettedProducts: PostsCardProps = posts.map((item) => ({
    //     postId: item.id,
    //     title: item.title,
    //     postImage: item.image,
    //     likedIds: item.likedIds,
    //     createdAt: dateFormat(item.createdAt, 'mmm d, yy'),
    //     user: item.user
    // }))

    return (
        <div className='w-[350px] sm:w-[400px] lg:w-[600px] border-b '>
            hello psots
            <PostClientPage data={posts} />
        </div>
    )
}

export default PostPage;
