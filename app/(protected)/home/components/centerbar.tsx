'use client';

import { Button } from '@/components/ui/button';
import { TwitterCard } from '@/components/ui/twitter-card';
import Image from 'next/image';
import React from 'react'
import { BsThreeDots } from 'react-icons/bs';
import { CiBookmark, CiHeart } from 'react-icons/ci';
import { FaArrowRightFromBracket, FaRegBookmark, FaRegComment, FaRegHeart, FaRetweet, FaUser } from 'react-icons/fa6';
import { ImParagraphCenter, ImParagraphLeft } from 'react-icons/im';
import { LiaCommentSolid } from 'react-icons/lia';
import { MdComment } from 'react-icons/md';
import { TfiComment } from 'react-icons/tfi';
import { VscGraph, VscGraphLeft } from 'react-icons/vsc';
import { useRepostModal } from '@/hooks/use-repost-modal';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link';
import { db } from '@/lib/db';
import { Post, User } from '@/types';

interface CenterbarProps {
    posts: {
        id: string;
        title: string;
        image?: string;
        userId: string;
        createdAt: string;
        likedIds?: string[];
        user: User;
    }[]
}


const Centerbar: React.FC<CenterbarProps> = ({ posts }) => {

    const repostModal = useRepostModal();

    console.log(posts);


    return (
        <div className='w-full flex flex-col justify-start'>
            <div className='flex items-start'>
                <Button
                    className=' w-1/2 py-6 rounded-none bg-white text-gray-700 shadow hover:opacity-100 hover:bg-stone-200'
                >For You
                </Button>
                <Button
                    className=' w-1/2 py-6 rounded-none bg-white text-gray-700 shadow hover:opacity-100 hover:bg-stone-200 border-l'
                >Following
                </Button>
            </div>
            <div className='flex items-center justify-between px-2 py-2 border-y sm:px-4 sm:py-4'>
                <div className='flex'>
                    <Link href={'/home'} className='flex w-10 sm:w-auto'>
                        <Avatar>
                            <AvatarImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7yWsejybngIUzEn_Kl8ZmvUeV3auYr-Cw2Adp3q3yeYhikwKTm0nVLfZTfQ&s' />
                            <AvatarFallback>
                                <FaUser size={'25'} />
                            </AvatarFallback>
                        </Avatar>
                    </Link>
                    <div className='w-auto sm:w-full mx-2'>
                        <input
                            type="text"
                            placeholder='What is happening?!'
                            className='border-none outline-none w-full h-10 font-normal font-serif text-sm text-black placeholder-gray-600 sm:text-xl'
                        />
                    </div>
                </div>
                <div>
                    <Button
                        variant={'default'}
                        className='py-2 bg-sky-500 rounded-full hover:bg-sky-600 sm:py-2'
                        onClick={repostModal.onOpen}
                    >
                        Post
                    </Button>
                </div>
            </div>
            {posts?.map((item) => (
                // <div  className='flex w-full px-2 py-2 gap-x-2 border-b border-0 sm:px-4'>
                <TwitterCard key={item?.id} data={item} />
                // {/* </div> */}
            ))}
        </div>
    )
}

export default Centerbar;
