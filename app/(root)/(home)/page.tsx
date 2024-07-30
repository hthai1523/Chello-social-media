import NewPost from '@/components/NewPost'
import ListStory from '@/components/ListStory'
import React from 'react'
import { ChartNoAxesColumnIncreasing } from 'lucide-react'
import CardPost from '@/components/CardPost'
import { Separator } from '@/components/ui/separator'

const HomePage = () => {
  return (
    <section>
     <div className='space-y-6 mb-6'>
        <h1 className='text-primary-2 font-bold text-xl'>Home</h1>
        <ListStory />

        
        <NewPost />
        <div className="w-full flex items-center justify-between">
          <h3 className='text-[#787878] font-normal text-base'>All</h3>
          <ChartNoAxesColumnIncreasing size={20} color='#787878' className='cursor-pointer' style={{transform: 'rotate(-90deg)'}} />
        </div>
     </div>

     <div className='space-y-6'>
       <Separator />
  
       <CardPost />
     </div>
     
    </section>
  )
}

export default HomePage