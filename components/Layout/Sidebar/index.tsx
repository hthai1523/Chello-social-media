'use client';

import { sidebarLinks } from '@/constant';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { FaPlus } from "react-icons/fa6";

const Sidebar = () => {
    const pathname = usePathname();
    return (
        <nav className="flex flex-col p-8 w-full h-screen ">
            <div className="py-4">
                <Avatar className="">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            {sidebarLinks.map((link) => {
                const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`);
                return (
                    <Link
                        href={link.route}
                        key={link.label}
                        className={cn(
                            'flex gap-5 items-center py-4 w-full text-[#A9A9A9] transition-colors duration-300',
                            {
                                'text-black': isActive,
                            },
                        )}
                    >
                        <Image
                            className={isActive ? 'filter invert' : 'filter invert-0'}
                            src={link.imgUrl}
                            alt={link.label}
                            width={18}
                            height={18}
                        />
                        <p className="text-base font-medium flex-1 hidden md:block">{link.label}</p>
                    </Link>
                );
            })}

            <Button className='bg-primary-2 text-white w-fit gap-2 mt-6'>
                <FaPlus />
                New Post
            </Button>
        </nav>
    );
};

export default Sidebar;
