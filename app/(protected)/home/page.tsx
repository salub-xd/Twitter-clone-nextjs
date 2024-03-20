import React from 'react'
import Centerbar from './components/centerbar';
import { db } from '@/lib/db';
import dateFormat, { masks } from 'dateformat';
import { Post, User } from '@/types';

interface CenterbarProps {
    data: {
        id: string;
        title: string;
        image?: string;
        userId: string;
        createdAt: string;
        likedIds?: string[];
        user: User;
    }[]
}

const HomePage = async () => {

    const posts = await db.post.findMany({
        orderBy: {
            createdAt: 'desc'
        },
        include: {
            user: true
        }
    });


    const formettedProducts: CenterbarProps = posts.map((item) => ({
        id: item.id,
        title: item.title,
        image: item.image,
        likedIds: item.likedIds,
        // createdAt:format(item.createdAt, 'MMMM do, yyyy'),
        createdAt: dateFormat(item.createdAt, 'mmm d, yy'),
        user: item.user
    }))

    // console.log(posts);

    return (
        <>
            <div className='w-auto sm:w-[600px] border-x'>
                <Centerbar posts={formettedProducts} />
            </div>

        </>
    )
}

export default HomePage;
