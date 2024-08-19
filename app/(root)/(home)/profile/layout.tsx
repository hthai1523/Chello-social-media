import NewPost from '@/components/Home/NewPost';
import ProfileActions from '@/components/Profile';
import ProfileMenu from '@/components/Profile/ProfileMenu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import ProfileView from '@/components/ui/profileView';
import { ArrowLeft, PencilLine, Share2 } from 'lucide-react';
import React, { ReactElement } from 'react';

export default function ProfileLayout({ children }: { children: ReactElement }) {
    return (
        <div className="-my-6 -mx-4">
            <div className="bg-[#F1F1FF] w-full h-72 relative">
                <div className="flex items-start">
                    <Button>
                        <ArrowLeft color="#B0B0B0" />
                    </Button>
                    <div className="flex flex-col py-2">
                        <h2 className="font-bold text-primary-2 text-xl">Jessica Alba</h2>
                        <p className="text-base text-[#686868]">33 posts</p>
                    </div>
                </div>
                <div className="w-full absolute bottom-0 translate-y-1/2 flex max-sm:flex-col items-center justify-between px-6 ">
                    <ProfileView src="/images/Ellipse 10.png" size={60} name="Jessica Alba" tag="jessicaalba" />
                    <div className="max-sm:space-y-4 md:space-x-4">
                        <Button className="text-primary-2 bg-[#f1f1f1] border border-[#e4e4e4] rounded-full">
                            <PencilLine className="size-4 mr-4" /> Edit Profile
                        </Button>
                        <Button className="text-primary-2 bg-[#f1f1f1] border border-[#e4e4e4] rounded-full">
                            <Share2 className="size-4 mr-4" /> Edit Profile
                        </Button>
                    </div>
                </div>
            </div>
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
