import ListSearch from '@/components/ListSearch';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import React from 'react';

const Rightbar = () => {
    return (
        <section className="p-8 flex flex-col items-center">
            <div className="relative w-full max-w-sm">
                <Image src={'/icons/search.svg'} alt='search' width={19} height={19} className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input type="search" placeholder="Search" className="pl-8 pr-4" />
            </div>
            <ListSearch />
        </section>
    );
};

export default Rightbar;
