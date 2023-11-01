import React from 'react'

export const EventCard = ({event}) => {
  return (
    <li className='flex gap-4 h-fit ml-8 mb-5'>
        <span className='flex justify-center items-center text-3xl rounded-[22px] bg-primary w-16 h-16'
        style={{
            backgroundImage: 'radial-gradient(50% 50% at 50% 50%, #FFC8B2 0%, #F68559 100%)'
            }}>
        🎉
        </span>
        <div className='flex flex-col gap-1'>
            <h1 className='text-2xl font-medium leading-6'>{event?.name}</h1>
            <p className=' text-secondary font-semibold text-xs flex items-center pl-1'>{event?.date} 
            <span className='bg-secondary w-1 h-1 rounded-full mx-1'> </span> {event?.time}</p>
            <p className='text-[#888] text-[10px]'>{event?.communityName}</p>
        </div>
    </li>
  )
}
