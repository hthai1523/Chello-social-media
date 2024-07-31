'use client';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { listNotifications } from '@/constant';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Settings } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

const Notifications = () => {
    const [isChecked, setIsChecked] = useState<string>('All');
    return (
        <div className="space-y-6 mb-6">
            <h1 className="w-full text-primary-2 font-bold text-xl inline-flex items-center justify-between">
                Notifications{' '}
                <Link href={'/notifications/settings'}>
                    <Settings size={24} className="cursor-pointer" />
                </Link>
            </h1>
            <div
                className="w-[80%] grid gap-4 gap-y-4 gap-x-3 max-sm:grid-cols-1"
                style={{ gridTemplateColumns: '0.5fr repeat(3, 1fr)' }}
            >
                {listNotifications.map((item, index) => (
                    <Button
                        className={cn(
                            'bg-[#F1F1F1] rounded-3xl px-3 py-2 w-fit text-base transition-colors duration-300 ease-linear',
                            {
                                'row-span-3 w-full': item === 'All',
                                'bg-[#c7c7f9]': isChecked === item,
                            },
                        )}
                        key={index}
                        onClick={() => setIsChecked(item)}
                    >
                        {item}
                    </Button>
                ))}
            </div>
            <Separator />
            {[1, 2, 3, 4, 5].map((_, i) => (
                <>
                    <div key={i} className="w-full">
                        <div className="flex items-center gap-4">
                            <Avatar>
                                <AvatarImage src="/images/Ellipse 10.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col w-full">
                                <h2 className="text-primary-2 text-sm font-bold">Miracle Rosser</h2>
                                <p className="text-[#3f3f3f] text-sm inline-flex items-center justify-between">
                                    Paid yout a tip of $5.00 <p className="text-sm text-[#d3d3d3]">1 min ago</p>
                                </p>
                            </div>
                        </div>
                    </div>
                    {i === 4 || <Separator />}
                </>
            ))}
        </div>
    );
};

export default Notifications;
