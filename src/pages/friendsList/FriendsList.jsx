import React, { useEffect } from 'react'
import {useState} from "react"
import { Header } from '../../components/header/Header'
import { FriendCard } from './FriendCard';
import {ActionButton} from "../../components/actionButton/ActionButton"

export const FriendsList = () => {

  const friendsData = [
    {
      firstName: 'Ted',
      lastName: 'Lasso',
      profilePicUrl: 'https://i.postimg.cc/G2Q8d9s7/ted.png',
    },
    {
      firstName: 'Rebecca',
      lastName: 'Welton',
      profilePicUrl: 'https://i.postimg.cc/L8Fc1M6S/rebecca.jpg',
    },
    {
      firstName: 'Roy',
      lastName: 'Kent',
      profilePicUrl: 'https://i.postimg.cc/m27HwQR9/roy-kent.jpg',
    },
    {
      firstName: 'Keeley',
      lastName: 'Jones',
      profilePicUrl: 'https://i.postimg.cc/TwxSHbBk/keeley.jpg',
    },
    {
      firstName: 'Jamie',
      lastName: 'Tartt',
      profilePicUrl: 'https://i.postimg.cc/1zk7VF9m/jamie.jpg',
    },
    {
      firstName: 'Kisuke',
      lastName: 'Urahara',
      profilePicUrl: 'https://i.postimg.cc/fTYff9yW/urahichi.gif'
    }
  ]; 

  const [searchTerm, setSearchTerm] = useState('')
  const [friends, setFriends] = useState(friendsData)

  useEffect(() => {
    const filteredFriends = friendsData.filter((friend) => friend.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || friend.lastName.toLowerCase().includes(searchTerm.toLowerCase()))
    setFriends(filteredFriends)
  },[searchTerm])

  return (
    <div>
      <header className='flex flex-col relative mb-[40px]'>
        <Header heading={"Friends"}/>
        <input type="text" className='absolute top-[78%] left-[15%] border border-black w-[300px] p-1.5 rounded-sm mb-[20px]' placeholder='Search Friends list' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        <svg className="absolute left-[78%] top-[83%]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.146 15.3707 4.888 14.112C3.63 12.8533 3.00067 11.316 3 9.5C3 7.68333 3.62933 6.146 4.888 4.888C6.14667 3.63 7.684 3.00067 9.5 3C11.3167 3 12.854 3.62933 14.112 4.888C15.37 6.14667 15.9993 7.684 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8127 13.5623 12.688 12.687C13.5633 11.8117 14.0007 10.7493 14 9.5C14 8.25 13.5623 7.18733 12.687 6.312C11.8117 5.43667 10.7493 4.99933 9.5 5C8.25 5 7.18733 5.43767 6.312 6.313C5.43667 7.18833 4.99933 8.25067 5 9.5C5 10.75 5.43767 11.8127 6.313 12.688C7.18833 13.5633 8.25067 14.0007 9.5 14Z" fill="black"/>
        </svg>
      </header>
      <div className='flex flex-col justify-center items-center'>
       <div className='flex flex-col items-start mr-[50px]'>
        {
          friends?.map((friend) => <FriendCard friend={friend}/>)
        }
        </div>
      </div>
      <ActionButton type={"create"}/>
    </div>
  )
}
