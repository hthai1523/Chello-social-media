import React from 'react'
import { Avatar, AvatarFallback } from './avatar'
import { AvatarImage } from '@radix-ui/react-avatar'
import { cn } from '@/lib/utils'

interface AvatarViewProps {
    src: string
    size?: number
    name?: string
    tag?: string
    haveStory?: boolean
}

const ProfileView = ({src, size, name, tag, haveStory} : AvatarViewProps) => {
  return (
    <div className='flex items-center justify-start gap-2'>
        <Avatar className={`size-[${size}px]`}>
            <AvatarImage src={src} className={cn('size-full  ', {
              'border rounded-full border-primary-1': haveStory,
            })}/>
            <AvatarFallback>{name?.slice(0,1)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
            {name && <h2 className='font-bold text-primary-2 text-xl'>{name}</h2>}
            {tag && <p className="text-base text-[#686868]">@{tag}</p>}
        </div>
    </div>
  )
}

export default ProfileView