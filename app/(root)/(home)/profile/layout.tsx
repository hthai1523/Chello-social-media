import NewPost from '@/components/Home/NewPost';
import ProfileActions from '@/components/Profile';
import ProfileHeader from '@/components/Profile/ProfileHeader';
import ProfileMenu from '@/components/Profile/ProfileMenu';

import React, { ReactElement } from 'react';

export default function ProfileLayout({ children }: { children: ReactElement }) {
    return (
        <div className="-my-6 -mx-4">
            <ProfileHeader />
            {/* Posts */}
            <div className="my-6 mx-4">
                <div className="mt-14 mb-9">
                    <NewPost typePost="default" />
                </div>
                <ProfileMenu />
                {children}
            </div>
        </div>
    );
}
