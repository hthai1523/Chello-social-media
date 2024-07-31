'use client';

import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';

const listImage = ['/images/postImage.png', '/images/postImage.png', '/images/postImage.png'];
const CardPost = () => {
    const [isLiked, setIsLiked] = useState(false);
    const [options, setOptions] = useState([
        {
            id: 1,
            title: 'Music',
            votes: 1,
        },
        {
            id: 2,
            title: 'Dance',
            votes: 0,
        },
    ]);
    const totalVotes = options.reduce((sum, option) => sum + option.votes, 0);

    const getGridClass = () => {
        switch (listImage.length) {
            case 1:
                return 'grid-cols-1';
            case 2:
                return 'grid-cols-2';
            default:
                return 'grid-cols-3 grid-rows-2';
        }
    };
    const handleVote = (index:number) => {
        const newOptions = options.map((option) => 
          option.id === index ? { ...option, votes: option.votes + 1 } : option
        );
        setOptions(newOptions);
      };
    
    return (
        <div className="w-full relative space-y-4">
            <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-3 cursor-pointer">
                    <Avatar className="size-[60px] hover:opacity-70 transition-opacity duration-300 ">
                        <AvatarImage className=" border rounded-full border-primary-1" src="/images/Ellipse 10.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-1">
                        <h3 className="inline-flex gap-2 font-bold text-sm">
                            Jesica Alba
                            <Image src={'/icons/tick.svg'} width={20} height={20} alt="tick" />
                        </h3>
                        <span className="text-[#494949] font-normal text-sm">@Jesicaalba</span>
                    </div>
                </div>

                <div className="inline-flex items-center gap-2">
                    <span className="text-[#d3d3d3] text-sm">March 24</span>
                    <Image priority src={'/icons/more-circle-32-regular.svg'} width={20} height={20} alt="more" />
                </div>
            </div>
            {/* <div className={`relative overflow-hidden h-[412px] grid gap-2 ${getGridClass()}`}>
                {listImage.map((item, index) => (
                    <div
                        key={index}
                        className={cn('relative size-full ', {
                            'row-span-2 col-span-2': listImage.length > 2 && index == 0,
                        })}
                    >
                        <Image
                            className="cursor-pointer rounded"
                            layout="fill"
                            objectFit="cover"
                            src={item}
                            alt="postImage"
                        />
                    </div>
                ))}
            </div> */}

            <div className="bg-[#e4e4e4] w-1/2 py-8 px-7  flex flex-col space-y-7 rounded">
                {/* titile */}
                <h3 className="mx-auto">Guys what should I post more about? Let me know!</h3>
                <div className="space-y-3">
                    {options.map((item) => (
                        <div key={item.id} onClick={() => handleVote(item.id)} className="w-[80%] h-11 bg-white rounded relative overflow-hidden cursor-pointer border border-[#E4E4E4]">
                            <div className="size-full flex items-center justify-between px-4 select-none">
                                <p className="font-semibold text-sm z-30">{item.title}</p>
                                <p className="text-primary-1 font-bold text-sm z-30 ">{item.votes}</p>
                            </div>
                            <div style={{width: `${totalVotes ? (item.votes / totalVotes) * 100 : 0}%`}} className={` h-full absolute top-0 left-0 bg-custom-gradient transition-[width] duration-200 `}></div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex items-center gap-[50px]">
                    {isLiked ? (
                        <FaHeart color="red" size={20} className="cursor-pointer" onClick={() => setIsLiked(false)} />
                    ) : (
                        <FaRegHeart
                            color="#a8a8a8"
                            size={20}
                            className="cursor-pointer"
                            onClick={() => setIsLiked(true)}
                        />
                    )}

                    <Image className="cursor-pointer" src={'/icons/comment.svg'} width={20} height={20} alt="like" />
                </div>
                <p className="text-[#a8a8a8] text-sm">122 likes this</p>
            </div>
        </div>
    );
};

export default CardPost;
