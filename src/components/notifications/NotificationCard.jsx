import React from 'react'

export const NotificationCard = ({notification}) => {
  return (
    <li className='flex items-center gap-4'>
        {notification.imgLink===""
        ?<span className='text-3xl'>{notification?.icon}</span>
        :<img src={notification.imgLink} width={40} height={40} className='rounded-full object-conver'/>
    }
        <p className='text-sm text-secondary'>{notification.content}</p>
    </li>
  )
}
