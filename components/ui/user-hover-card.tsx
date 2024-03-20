import React from 'react'

import { User } from '@/types';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link';
import { FaUser } from 'react-icons/fa6';
import { Button } from './button';

interface UserCardProps {
    user:User
}

export const UserHoverCard: React.FC<UserCardProps> = ({ user }) => {
    return (
        <div className='mx-2 flex flex-col bg-white gap-y-4'>
            <div className='flex justify-between w-full'>
                <Link href={user.username} className='flex'>
                    <Avatar>
                        <AvatarImage src={user.image} />
                        <AvatarFallback>
                            <FaUser size={'30'} />
                        </AvatarFallback>
                    </Avatar>
                </Link>
                <div className=''>
                    <Button size={'sm'} className='px-2'>Follow</Button>
                </div>
            </div>
            <div className='flex flex-col gap-y-2'>
                <div className='flex flex-col'>
                    <Link href={user.username} className='text-black font-medium transition-colors hover:underline sm:text-lg'>{user.name}</Link>
                    <Link href={user.username} className='text-sm text-black font-normal transition-colors'>@{user.username}</Link>
                </div>
                <div className='flex '>
                    <p className='text-sm text-black font-normal transition-colors'>
                        {user?.bio}
                    </p>
                </div>
            </div>
            <div className='flex justify-between'>
                <Link href={'/home'} className='text-xs hover:underline'>
                    <span className=' text-black font-semibold '>{user?.followingIds}</span>
                    <span className=' text-gray-700'>  Following</span>
                </Link>
                <Link href={'/home'} className='text-xs hover:underline'>
                    <span className=' text-black font-semibold '>1.2k</span>
                    <span className=' text-gray-700'>  Followers</span>
                </Link>
            </div>
        </div>
    )
}

