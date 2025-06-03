'use client'
import React from 'react'
import { Button } from '../ui/button'
import { ArrowLeft, PencilLine, Share2 } from 'lucide-react'
import ProfileView from '../ui/profileView'
import { useUser } from '@clerk/nextjs'

const ProfileHeader = () => {
    const {user} = useUser()
  return (
    <div className="bg-[#F1F1FF] w-full h-72 relative">
                <div className="flex items-start">
                    <Button>
                        <ArrowLeft color="#B0B0B0" />
                    </Button>
                    <div className="flex flex-col py-2">
                        <h2 className="font-bold text-primary-2 text-xl">{user?.fullName}</h2>
                        <p className="text-base text-[#686868]">33 posts</p>
                    </div>
                </div>
                <div className="w-full absolute bottom-0 translate-y-1/2 flex max-sm:flex-col items-center justify-between px-6 ">
                    <ProfileView src={user?.imageUrl} size={60} name={user?.fullName} tag={user?.lastName} />
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
  )
}

export default ProfileHeader