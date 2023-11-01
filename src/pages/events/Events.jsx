import React from 'react'

import { Header } from '../../components'
import { EventCard } from './EventCard'
import { ActionButton } from '../../components'

export const Events = () => 
{
  const eventList= [{_id:"1",name:"Kubuntu's Party", date:"01-11-2023", time:"4:00 PM", communityName:"Harmony Haven"},
  {_id:"2",name:"Kubuntu's Party", date:"01-11-2023", time:"4:00 PM", communityName:"Harmony Haven"},
  {_id:"3",name:"Kubuntu's Party", date:"01-11-2023", time:"4:00 PM", communityName:"Harmony Haven"}]

  return (
    <div >
      {/* Put the carousel here in header */}
      <header>
      <Header heading={"Events"} padding={"pb-40"}/>
      </header>

      <h1 className='text-xl font-bold ml-7 mb-8 mt-12'>More Events</h1>
      {eventList.map(event=>(
        <EventCard event={event} key={event._id} />
      ))}
    <ActionButton type="calendar" />
    </div>
  )
}
