'use client';

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button';
import { UserButton } from '@/components/user-button';
import { BellIcon, Bookmark, Settings, User as UserIcon } from 'lucide-react';
import Link from 'next/link';
import { useParams, usePathname, useRouter } from 'next/navigation';
import React from 'react'
import { GoHomeFill } from 'react-icons/go';
import { BsTwitterX } from 'react-icons/bs';
import { useRepostModal } from '@/hooks/use-repost-modal';
import { FaPlus } from "react-icons/fa";
import { User } from '@/types';

interface LeftbarProps {
    user: User;
}

export const Leftbar: React.FC<LeftbarProps> = ({ user }) => {

    const repostModal = useRepostModal();

    // const user = useCurrentUser();
    const params = useParams();
    const pathname = usePathname();

    const router = useRouter();
    const onClick = ()=>{
        router.push(`${user.username}`)
    }

    const routes = [
        {
            label: 'Home',
            icon: GoHomeFill,
            href: `/home`,
            active: pathname === `/home`
        },
        {
            label: 'Notifications',
            icon: BellIcon,
            href: `/notifications`,
            active: pathname === `/notifications`
        },
        {
            label: 'Bookmarks',
            icon: Bookmark,
            href: `/bookmarks`,
            active: pathname === `/bookmarks`
        },
        {
            label: 'Profile',
            icon: UserIcon,
            href: user.username ? `/${user?.username}` : `/login`,
            active: pathname === `/profile`
        },
        {
            label: 'Settings',
            icon: Settings,
            href: `/settings`,
            active: pathname === `/settings`
        },
    ];

    // console.log(pathname);



    return (
        <div className='fixed top-1 flex flex-col my-1 mx-2 '>
            <div className='w-auto'>
                <div className='flex justify-center items-center lg:justify-start'>
                    <BsTwitterX className='w-12 h-12 rounded-full py-2 px-2 hover:bg-stone-200' />
                </div>
                {routes.map((route) => (
                    <Link key={route.href} href={route.href} className='w-full flex justify-center items-center group lg:justify-start' >
                        <div className='flex justify-center items-center rounded-full py-2 pr-6 pl-2 gap-x-4 transition-colors group-hover:bg-stone-200'>
                            <div className='ml-2'>
                                <route.icon size={25} />
                            </div>
                            <div className={cn('text-lg transition-colors sm:text-xl hidden lg:block', route.active ? 'font-bold' : 'font-normal')}>
                                <span className=''>{route.label}</span>
                            </div>
                        </div>
                    </Link>
                ))}
                <div className='flex flex-col justify-center items-center mt-2 gap-y-6 lg:justify-start'>
                    <div className='my-2'>
                        <Button
                            className=" bg-sky-500 rounded-full hover:bg-sky-600 font-semibold lg:px-20 lg:py-6"
                            onClick={repostModal.onOpen}
                        >
                            <span className='hidden lg:block'>Post</span>
                            <FaPlus className='block lg:hidden' />
                        </Button>
                    </div>
                    {user.username ? <UserButton data={user} />
                        : <Link href={'/login'}><Button>Login</Button></Link>}
                </div>
            </div>

        </div>
    )
}

