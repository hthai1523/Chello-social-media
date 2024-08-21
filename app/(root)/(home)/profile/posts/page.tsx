import CardPost from '@/components/Home/CardPost';
import { Separator } from '@/components/ui/separator';
import React from 'react';

const page = () => {
    return (
        <div className="space-y-[22px]">
            <Separator />
            <CardPost />

            <Separator />
            <CardPost />

            <Separator />
            <CardPost />
        </div>
    );
};

export default page;
