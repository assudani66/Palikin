import React from "react"

import { useNavigate } from "react-router-dom"


export const FriendCard = ({friend}) => 
{
    const navigate = useNavigate();
    

    return(
        <span className="flex items-center space-x-4 mb-[20px]" onClick={()=>navigate(`/friends/chat/${friend.firstName}`)}>
            <img src={friend.profilePicUrl} alt="profilepic" className="w-[51px] h-[51px] rounded-full"/>
            <h1 className="p-1 font-semibold text-[23px]">{friend.firstName} {friend.lastName}</h1>
        </span>
    )
}