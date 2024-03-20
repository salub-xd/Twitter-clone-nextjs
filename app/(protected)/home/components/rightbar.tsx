import { Button } from '@/components/ui/button';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { FaUser } from 'react-icons/fa6';
import { SearchBar } from '@/components/search-bar';


const Rightbar = () => {
    return (
        <div className='fixed top-1 flex flex-col my-2 mx-2 gap-y-4'>
            <div className='mx-2'>
                <SearchBar />
            </div>
            <div className='flex flex-col gap-y-2 border py-2 px-2'>
                <div className='mx-2 items-center'>
                    <h1 className='text-xl font-sans font-bold'>Who to follow</h1>
                </div>
                <div className='flex flex-col space-y-2' >
                    <div className='flex items-center justify-between py-2 space-x-2 rounded-full transition-colors  bg-white hover:bg-gray-100'>
                        <HoverCard>
                            <HoverCardTrigger asChild>
                                <div className='flex items-center'>
                                    <div className='ml-2'>
                                        <Avatar>
                                            <AvatarImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7yWsejybngIUzEn_Kl8ZmvUeV3auYr-Cw2Adp3q3yeYhikwKTm0nVLfZTfQ&s' />
                                            <AvatarFallback>
                                                <FaUser size={'30'} />
                                            </AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <div className='ml-2 w-28 flex flex-col items-start'>
                                        <h1 className=' text-black font-medium transition-colors hover:underline sm:text-sm'>Ravish kumar</h1>
                                        <p className='text-xs  text-black font-normal transition-colors '>@ravish_kumar</p>
                                    </div>
                                </div>
                            </HoverCardTrigger>
                            <HoverCardContent>
                                <div className='mx-2 flex flex-col bg-white gap-y-4'>
                                    <div className='flex justify-between w-full'>
                                        <Link href={'/home'} className='flex'>
                                            <Avatar>
                                                <AvatarImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7yWsejybngIUzEn_Kl8ZmvUeV3auYr-Cw2Adp3q3yeYhikwKTm0nVLfZTfQ&s' />
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
                                            <Link href={'/home'} className='text-black font-medium transition-colors hover:underline sm:text-lg'>Ravish Kumar</Link>
                                            <Link href={'/home'} className='text-sm text-black font-normal transition-colors'>@ravish_kumar</Link>
                                        </div>
                                        <div className='flex '>
                                            <p className='text-xs text-black font-normal transition-colors'>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque esse  l culpa consequatur. Voluptatibus, ipsa. Deleniti, reprehenderit eum aut laudantium sunt  asperiores!
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between'>
                                        <Link href={'/home'} className='text-xs hover:underline'>
                                            <span className=' text-black font-semibold '>2,305 </span>
                                            <span className=' text-gray-700'>  Following</span>
                                        </Link>
                                        <Link href={'/home'} className='text-xs hover:underline'>
                                            <span className=' text-black font-semibold '>1.2k</span>
                                            <span className=' text-gray-700'>  Followers</span>
                                        </Link>
                                    </div>
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                        <Button size={'sm'} className='text-xs rounded-full bg-black'>
                            Follow
                        </Button>
                    </div>
                    <div className='flex items-center justify-between py-2 space-x-2 rounded-full transition-colors  bg-white hover:bg-gray-100'>
                        <div className='flex items-center'>
                            <div className='ml-2'>
                                <Image
                                    src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAACUCAMAAADvY+hPAAAAclBMVEX///8rLzK7u7wUGR0AAAAoLC////329vbn5+cfJCgtLzEmKi4PFhoTExn7+/vj4+ObmpoAAAra2tqSk5Q2ODrt7e0jJCZUVVbJysvQ0NFzdXetra2kpaZBREYaHyJoaGkACxJfYGJKTU6Li4qAgYENDxLwIyo3AAAFQklEQVR4nO2c25KqOhCGhSRCEkYQORkgCuj7v+IW56SOziBpOtbafFXeefFXqtOndLNYzMzMzLwOy6VtBf8wnh+7G9U6wfooW7VxY9+zLel30qJSNaWB5pI5THIdUFqrqkhtC3tIWO0SoqVzjdQk2VWhbXF38VXCOXPuwThPlG9b4A/Cbk1uT/hKNll3r3XWXlkffxF8RhzrcmVb6DehIvwvyY4QmVYvc9RF8rfid3RS2BZ7ZlXR3wz5GkmjF7APb0PvO4sH0Mh6jPE6/Yzi3j46y6JXXfDUKfeQzq55VPRZxSdoZVOyux8h2XH2rj3JcT3cY1wi69iW5HT37P37RO9sZXrVn/H6IYElkw7F0y7jC8nsRHFFxGjNDlE2JG/H+YxP9lsLmtXQxOg+3MJBb0f6uU9YjX/QUWYk+eTvImzJfm6qmefYFWKhDZzGGcaLBW6jaRMYSj55jghX8yo38xo9PF+hak7H5KC3UNykowDRjFvQRmZB8J0A19vtzM25z0hRNSdmQfAdmaBqluPT0AsyTMlL0yD4jsbU7I0tqq7JMJ1dOmtGAco2ULtgMHcQ1W/A+GeG658biDjIG1TNHQHQHHSIipcLdw2geY3ZalwufJBcFLMgXC48w05Bj6yRG/4Hc4MmB1zJC9e8hg2wO+dha+rteIvdGl09/V51i8Z/CnITs7SfJfiPKp5hSch3Fp4JDW8h+g08Y3QLeWtD8mJrEgupjTb/iW60dYgjZnp0iT+60Zih956/cAUb1YVmwuLjcUdHad7bsowzu7cRkgPcPt0tXqOdZ49aN5aHTsLm2YcV3Vgf/grb58yDoKdz92j0YO8hGMGttR+yEQNbNCITG9tiP1i59bCIGNTuC0zXfZDuKBfiDwvh1Np0zH2KPMt+08w4z19j7vKL5cIrG64flS6M6Ka0Pr94Q78ikboqW/N+APfWKNaZcl9vZPsdz6/yNX3LJPtASk7oPq9eeA+hf772ikjldV0nSVLXba6i4nX1nvncovHjbU/8Wn5ixgbpICs4/+tFlrC2UR7syr/StbDcBXlkqdy+YatqwpnmefdbnCu6/BRyOKmV/WgYK/axrSR5Vh++HduFDXhFV0v+8S/NdtYGic+EB0ou4rUk9NgeyiIOfd9PT78wLspDe6SXK0JMU4trKml1JwflZB9kySmaNHlbJzLYk9uMT4igrix57m3DH/Rk+pjdIx+NecissXIZK23UY9T4yzWx2hv2zPcK+S4WLcC7VYvq9twEYBhCaMTniVX1Y4F0lGaRaaxVhNXG0JS/YccNzk2MjlCS++Y5yixj9LBSHaOZEQTzKAmgZKcP5eXUkl1gyX0fYWLvEQuIoZ4rhBSTBpfU+GX+Hlk+Yca0UhBjSD8QRE3n8SqTDatfYNPFlhhkqu4eMpnKpBuYict76Ina/yXErNcj6CRe2p/MMnpYMkXjdAMz1/oIPsFLy9gd46FMsIu8Ooxf2B3GHnymKs6g84xbWAZ90OPnSwYDPabrAeb5j2AB7IuAwfr5cNagEdwz3iQdgswhD7qYJje6gTmQDY/NdJnGJZBxxQdZORiguYEL4FuDryk8AxNw3dIKYitzCEew7M6bpqS6g1ZQniNFMo2Tt3Ogqtl4ymT/GgqVc5QQCzTDWEMZNJo5A37+ZPBn08zhUKtuWJ7O6RvSMA/iIN8mGAr1QD4Wgeg2zo4DQrPR3P7TmrcgmkF2BQdrdkE0l4h3sHfQEJrRMqSetwpEczR9yX2hGeYjM7PmWfOsedb8v9BMCR4UZs4gdjGxOzA4MzMzgP8AxB9iryBJfcQAAAAASUVORK5CYII='}
                                    width={40}
                                    height={40}
                                    alt='UserImage'
                                />
                            </div>
                            <div className='ml-2 w-28 flex flex-col items-start'>
                                <h1 className=' text-black font-medium transition-colors sm:text-sm'>Ravish kumar</h1>
                                <p className='text-xs  text-black font-normal transition-colors'>@ravish_kumar</p>
                            </div>
                        </div>
                        <Button size={'sm'} className='text-xs rounded-full bg-black'>
                            Follow
                        </Button>
                    </div>
                    <div className='flex items-center justify-between py-2 space-x-2 rounded-full transition-colors  bg-white hover:bg-gray-100'>
                        <div className='flex items-center'>
                            <div className='ml-2'>
                                <Image
                                    src={'data:image/png;base64,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'}
                                    width={40}
                                    height={40}
                                    alt='UserImage'
                                />
                            </div>
                            <div className='ml-2 w-28 flex flex-col items-start'>
                                <h1 className=' text-black font-medium transition-colors sm:text-sm'>Ravish kumar</h1>
                                <p className='text-xs  text-black font-normal transition-colors'>@ravish_kumar</p>
                            </div>
                        </div>
                        <Button size={'sm'} className='text-xs rounded-full bg-black'>
                            Follow
                        </Button>
                    </div>
                </div>
            </div>
            <div className=' w-full flex flex-col items-center my-4 gap-y-1 hover:bg-gray-100'>
                <div className='flex gap-x-2 '>
                    <Link href={'/'} className='text-xs text-black font-sans transition-colors hover:underline'>Terms of Service</Link>
                    <Link href={'/'} className='text-xs text-black font-sans transition-colors hover:underline'>Privacy Policy</Link>
                    <Link href={'/'} className='text-xs text-black font-sans transition-colors hover:underline'>Cookie Policy</Link>
                </div>
                <div className='flex gap-x-2 '>
                    <Link href={'/'} className='text-xs text-black font-sans transition-colors hover:underline'>Accessibility</Link>
                    <Link href={'/'} className='text-xs text-black font-sans transition-colors hover:underline'>
                        &#169; 2024 X Corp
                    </Link>
                    <Link href={'/'} className='text-xs text-black font-sans transition-colors hover:underline'>More...</Link>
                </div>
            </div>
        </div >
    )
}

export default Rightbar
