'use client';

import * as z from 'zod'
import React, { useEffect, useState, useTransition } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Card,
    CardHeader,
    CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form';
import { useRepostModal } from '@/hooks/use-repost-modal';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FaUser } from 'react-icons/fa6';
import ImageUpload from '@/components/ui/image-upload';
import { CardWrapper } from '@/components/auth/card-wrapper';
import { PostSchema } from '@/schemas';
import { post } from '@/actions/post';
import { FormError } from '@/components/form-error';
import { FormSuccess } from '@/components/form-success';
import { ClipLoader } from 'react-spinners';

const formSchema = z.object({
    title: z.string().min(1, {
        message: "title must be at least 1 characters.",
    }),
    // images: z.object({ url: z.string() }).array(),
    image: z.optional(z.string())
});

const RepostPage = () => {

    const [isLoading, setIsloading] = useState(false);
    const [isPending, startTransition] = useTransition();
    const [isError, setIsError] = useState<string | undefined>("");
    const [isSuccess, setIsSuccess] = useState<string | undefined>("");


    const form = useForm<z.infer<typeof PostSchema>>({
        resolver: zodResolver(PostSchema),
        defaultValues: {
            title: '',
            // images: []
            image: ''
        }
    });

    const onSubmit = async (values: z.infer<typeof PostSchema>) => {

        setIsError("");
        setIsSuccess("");
        startTransition(() => {
            post(values).then((data) => {
                setIsSuccess(data.success)
                setIsError(data.error)
            })
        });
    }

    return (
        <Card className="w-[350px] sm:w-[400px] lg:w-[600px] shadow-none ">
            <CardHeader>
                <p className="text-2xl font-semibold text-center">
                    ⚙️ Settings
                </p>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <div className='flex gap-x-4'>
                                            <Avatar>
                                                <AvatarImage src={'a' || ''} />
                                                <AvatarFallback>
                                                    <FaUser size={'30'} />
                                                </AvatarFallback>
                                            </Avatar>
                                            <Input disabled={isLoading} placeholder="What is happening?!" {...field} className='placeholder-black text-lg font-sans' />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="image"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        {/* <ImageUpload
                                        value={field.value.map((image) => image.url)}
                                        onChange={(url) => field.onChange([...field.value, { url }])}
                                        onRemove={(url) => field.onChange([...field.value.filter((current) => current.url !== url)])}
                                        disabled={isLoading}
                                    /> */}
                                        <ImageUpload
                                            value={field.value ? [field.value] : []}
                                            disabled={isLoading}
                                            onChange={(url) => field.onChange(url)}
                                            onRemove={() => field.onChange('')}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormError message={isError} />
                        <FormSuccess message={isSuccess} />
                        <div className='mx-4 space-x-2 w-full flex items-center justify-end'>
                            <Button disabled={isPending} type="submit">
                                {isPending && <ClipLoader color="white" size={20} className="mr-2" />}
                                Create an Post
                            </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

export default RepostPage;