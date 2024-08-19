'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

const menuItems = ['Followers', 'Likes', 'Posts', 'Photos', 'Video', 'Audio', 'Vault'];

export default function ProfileMenu() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [underlineWidth, setUnderlineWidth] = useState(0);
    const [underlineOffset, setUnderlineOffset] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    useEffect(() => {
        const activeButton = containerRef.current?.querySelector<HTMLAnchorElement>(`a:nth-child(${activeIndex + 1})`);
        if (activeButton) {
            setUnderlineWidth(activeButton.offsetWidth);
            setUnderlineOffset(activeButton.offsetLeft);
        }
    }, [activeIndex]);

    useEffect(() => {
        const currentIndex = menuItems.findIndex((item) => pathname === `/profile/${item.toLowerCase()}`);
        setActiveIndex(currentIndex !== -1 ? currentIndex : 0);
    }, [pathname]);

    return (
        <div className="relative mb-10">
            <div ref={containerRef} className="text-sm grid grid-cols-4 sm:grid-cols-7">
                {menuItems.map((item, index) => {
                    const isActive =
                        index === 0 ? pathname === '/profile' : pathname === `/profile/${item.toLowerCase()}`;
                    return (
                        <Link
                            href={`/profile${index === 0 ? '' : `/${item.toLowerCase()}`}`}
                            key={item}
                            onClick={() => setActiveIndex(index)}
                            className={cn(
                                'relative py-2 px-0 transition-colors duration-300 text-center text-gray-500',
                                {
                                    'text-black': isActive,
                                },
                            )}
                        >
                            {item}
                        </Link>
                    );
                })}
                <div
                    className="absolute bottom-0 left-0 h-[2px] bg-black transition-transform duration-300 ease-out"
                    style={{
                        width: underlineWidth,
                        transform: `translateX(${underlineOffset}px)`,
                    }}
                />
            </div>
        </div>
    );
}
