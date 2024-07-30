import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import Image from 'next/image';

const CardSearch = () => {
    return (
        <div style={{backgroundImage: 'url("/images/cardImageSearch.png")'}} className="bg-no-repeat bg-cover text-white w-full rounded h-fit p-4">
            <Avatar className=''>
                <AvatarImage src="/images/Ellipse 10.png" />
                <AvatarFallback>Demo</AvatarFallback>
            </Avatar>
            <div className='flex items-center gap-2'>
                <h2 className='font-bold text-sm'>Jesica Alba </h2>
                <Image src={'/icons/tick.svg'} alt='tick' width={18} height={18} />
            </div>
            <p className='font-normal text-sm'>@Jesicaalba</p>
        </div>
    );
};

export default CardSearch;
