import LikesSection from '@/components/Profile/LikesSection';
import ProfileView from '@/components/ui/profileView';
import { Separator } from '@/components/ui/separator';
import React from 'react';

const page = () => {
    return (
        <div className="space-y-[22px]">
            <Separator />
          <LikesSection />
         
            <Separator />
          <LikesSection />
         
            <Separator />
          <LikesSection />
         
        </div>
    );
};

export default page;
