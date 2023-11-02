import React from 'react'

import { NotificationContainer } from './NotificationContainer'


export const NotificationModal = ({padding,setShowNotifications}) => 
{

  return (
    <div className='h-screen w-screen md:w-[60%] bg-gray-500 bg-opacity-50 fixed z-10'>
      <NotificationContainer padding={padding} setShowNotifications={setShowNotifications} />
    </div>
  )
}
