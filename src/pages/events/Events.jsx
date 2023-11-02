import React from 'react'

import { Header } from '../../components'
import { EventCard } from './EventCard'
import { ActionButton } from '../../components'

import { Carousel } from '../../components'
import { NavBar } from '../../components'

export const Events = () => 
{
  const eventList= [{_id:"1",name:"Ted Talk", date:"05-12-2023", time:"6:00 PM", communityName:"Peace Out"},
  {_id:"2",name:"Vue Conference", date:"01-01-2024", time:"4:00 PM", communityName:"Harmony Haven"},
  {_id:"3",name:"Hunger Games", date:"01-12-2023", time:"5:00 PM", communityName:"Common Wealth"}]



  return (
    <>
    <div className='flex flex-col justify-between h-full  '>
    <Header heading={"Events"} padding={"pb-20"}/>
      <Carousel />
      <h1 className='text-xl font-bold ml-7 mt-7 mb-3'>More Events</h1>
      {eventList.map(event=>(
        <EventCard event={event} key={event._id} />
      ))}
      <NavBar />
    <ActionButton type="calendar" />
    </div>
    </>
  )
}
