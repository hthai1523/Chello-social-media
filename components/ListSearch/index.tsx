import Link from 'next/link'
import React from 'react'
import CardSearch from '../CardSearch'

const ListSearch = () => {
  return (
    <div className="w-full space-y-3 mt-6">
        <div className=" flex items-center justify-between w-full">
            <h3 className='font-medium text-[#686868] text-base'>Suggestions</h3>
            <Link href={"/"}>
                <span className='text-[#9a9a9a] font-normal text-sm'>See All</span>
            </Link>
        </div>
        {/* Suggestion List */}
       <div className='space-y-3 w-full'>
            <CardSearch />
            <CardSearch />
            <CardSearch />
       </div>
    </div>
  )
}

export default ListSearch