import React from 'react'

import { Header } from '../../components'
import { EventCard } from './EventCard'
import { ActionButton } from '../../components'

import { Carousel } from '../../components'

export const Events = () => 
{
  const eventList= [{_id:"1",name:"Kubuntu's Party", date:"01-11-2023", time:"4:00 PM", communityName:"Harmony Haven"},
  {_id:"2",name:"Kubuntu's Party", date:"01-11-2023", time:"4:00 PM", communityName:"Harmony Haven"},
  {_id:"3",name:"Kubuntu's Party", date:"01-11-2023", time:"4:00 PM", communityName:"Harmony Haven"}]



  return (
    <><Header heading={"Events"} padding={"pb-40"}/>
    <div className='  '>
      {/* Put the carousel here in header */}
      <header className='mt -mt-36'>
      <Carousel />
      </header>
      

      <h1 className='text-xl font-bold ml-7 mb-8 mt-12'>More Events</h1>
      {eventList.map(event=>(
        <EventCard event={event} key={event._id} />
      ))}
    <ActionButton type="calendar" />
    </div>
    </>
  )
}
