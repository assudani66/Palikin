import React from 'react'

import { useNavigate } from 'react-router-dom'

export const CommunityCard = ({community}) => {

    const navigate = useNavigate();

  return (
    <div className='flex justify-center max-w-[70%] items-center m-2 gap-2 ml-10' onClick={()=>navigate(`/community/chat/${community?.name}`)}>
        <span className='bg-[#308886] rounded-full w-16 h-16 flex-shrink-0'>

        </span>
        <main className='flex flex-col gap-1'>
            <h1 className='text-2xl'>{community?.name}</h1>
            <p className='text-xs whitespace-break-spaces'>{community?.description}</p>
        </main>
    </div>
  )
}
