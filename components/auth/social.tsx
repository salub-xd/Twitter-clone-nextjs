'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { signIn } from 'next-auth/react';
import { ClipLoader } from 'react-spinners';

export const Social = () => {

  const [isPending, setIsPending] = useState(false);

  const onClick = (provider: "google" | "github") => {
    try {
      setIsPending(true)
      signIn(provider, {
        callbackUrl: DEFAULT_LOGIN_REDIRECT,
      });
    } catch (error) {
      return null;
    } finally {
      setIsPending(false)
    }

  }

  return (
    <div className='w-full flex items-center gap-x-2'>
      <Button size={'lg'} variant={'outline'} className='w-full' disabled={isPending} onClick={() => onClick('google')}>
        {isPending && <ClipLoader color="black" size={20} className="mr-2" />}
        <FcGoogle className='h-5 w-5' />
      </Button>
      <Button size={'lg'} variant={'outline'} className='w-full' onClick={() => onClick('github')}>
        <FaGithub className='h-5 w-5' />
      </Button>
    </div>
  )
}