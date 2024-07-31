'use client'

import React, { useState } from 'react';
import Story from './Story';
import { ChevronRight, ChevronLeft, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const data = [
    { id: 1, src: '/images/story.png' },
    { id: 2, src: '/images/story.png' },
    { id: 3, src: '/images/story.png' },
    { id: 4, src: '/images/story.png' },
    { id: 5, src: '/images/story.png' },
    { id: 6, src: '/images/story.png' },
    { id: 7, src: '/images/story.png' },
];

const ListStory = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerView = 5; 
    const itemWidth = 76; 

    const handleNext = () => {
        if (currentIndex < data.length - itemsPerView) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="flex items-center gap-2 w-full overflow-hidden relative">
            <Button
                variant="default"
                className="bg-primary-1 hover:bg-primary-1/70 text-white flex flex-col items-center justify-center w-[76px] h-[91px] rounded-lg z-10"
            >
                <Plus />
                <span className="text-base font-semibold">Add</span>
                <span className="text-base font-semibold">Story</span>
            </Button>
            <div className=" w-full overflow-hidden">
                <Button
                    className="absolute left-[76px] bottom-1/2 translate-y-[50%] bg-primary-2 z-10"
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                >
                    <ChevronLeft size={18} color="white" />
                </Button>
                <div
                    className="flex items-center gap-2 transition-transform duration-300"
                    style={{ transform: `translateX(-${currentIndex * itemWidth}px)` }}
                >
                    {data.map((item) => (
                        <Story key={item.id} src={item.src} />
                    ))}
                </div>
                <Button
                    className="absolute right-0 bottom-1/2 translate-y-[50%] bg-primary-2 z-10"
                    onClick={handleNext}
                    disabled={currentIndex >= data.length - itemsPerView}
                >
                    <ChevronRight size={18} color="white" />
                </Button>
            </div>
        </div>
    );
};

export default ListStory;
