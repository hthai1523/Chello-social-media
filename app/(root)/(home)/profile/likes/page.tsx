import CardPost from '@/components/Home/CardPost';
import LikesSection from '@/components/Profile/LikesSection';
import ProfileView from '@/components/ui/profileView';
import { Separator } from '@/components/ui/separator';
import React from 'react';

const page = () => {
    return (
        <div className="space-y-[22px]">
            <Separator />
            <CardPost isLike />

            <Separator />
            <CardPost isLike />

            <Separator />
            <CardPost isLike />
        </div>
    );
};

export default page;
