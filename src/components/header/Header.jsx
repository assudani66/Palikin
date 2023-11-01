import React, {useState} from 'react'

import { NotificationModal } from '../notifications/NotificationModal';

export const Header = ({heading,padding}) => 
{
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <>
    {showNotifications && <NotificationModal  padding={padding} setShowNotifications={setShowNotifications}/>}
    <div className={`flex justify-between items-center pt-12 ${padding?? "pb-12"} px-8 bg-background rounded-b-[30px] `}>
      <h1 className='text-2xl font-bold '>{heading}</h1>
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>setShowNotifications(true)}>
        <g clip-path="url(#clip0_19_497)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2501 20.5833C16.2503 21.1299 16.0438 21.6564 15.6721 22.0572C15.3004 22.458 14.791 22.7035 14.2459 22.7445L14.0834 22.75H11.9167C11.3701 22.7501 10.8436 22.5437 10.4428 22.172C10.042 21.8003 9.79649 21.2909 9.7555 20.7458L9.75008 20.5833H16.2501ZM13.0001 2.16663C14.9663 2.16659 16.8557 2.93026 18.2697 4.29654C19.6836 5.66282 20.5117 7.52489 20.5791 9.48996L20.5834 9.74996V13.8276L22.5572 17.7753C22.6434 17.9475 22.6865 18.1381 22.6829 18.3307C22.6793 18.5232 22.629 18.712 22.5365 18.8809C22.444 19.0498 22.3119 19.1938 22.1515 19.3004C21.9912 19.4071 21.8074 19.4734 21.6158 19.4935L21.4912 19.5H4.50891C4.31626 19.5 4.12646 19.4534 3.95579 19.364C3.78511 19.2746 3.63865 19.1452 3.52895 18.9868C3.41925 18.8285 3.34958 18.6459 3.32592 18.4547C3.30225 18.2635 3.3253 18.0694 3.39308 17.889L3.44291 17.7753L5.41675 13.8276V9.74996C5.41675 7.73873 6.2157 5.80988 7.63785 4.38773C9.06 2.96558 10.9889 2.16663 13.0001 2.16663ZM13.0001 4.33329C11.6042 4.33337 10.2623 4.8723 9.25415 5.83767C8.24599 6.80305 7.64941 8.12036 7.58883 9.51488L7.58341 9.74996V13.8276C7.58342 14.0963 7.53346 14.3626 7.43608 14.613L7.35483 14.7972L6.08733 17.3333H19.9139L18.6464 14.7961C18.5262 14.5559 18.4516 14.2955 18.4265 14.028L18.4167 13.8276V9.74996C18.4167 8.31337 17.8461 6.93562 16.8302 5.9198C15.8144 4.90398 14.4367 4.33329 13.0001 4.33329Z" fill="#450505"/>
        <rect x="14.3929" y="0.464303" width="7.42857" height="7.42857" rx="3.71429" fill="#CC0000" stroke="#FAF0E6" stroke-width="0.928571"/>
        </g>
        <defs>
        <clipPath id="clip0_19_497">
        <rect width="26" height="26" fill="white"/>
        </clipPath>
        </defs>
      </svg>

    </div>
    </>
  )
}
