import React from 'react'

import { Header } from '../../components/header/Header'
import { ActionButton } from '../../components/actionButton/ActionButton'

import { Carousel } from '../../components/carousel/Carousel'

import {CommunityCard} from "./CommunityCard";

export const Communities = () => {

  const communities = [{_id:"1",name:"Harmony Haven",
  description:"Harmony Haven is a tight-kin environmentally conscious community"},
  {_id:"2",name:"Willowbrook Heights",
  description:"Willowbrook Heights is an exclusive gated community nestled in the rolling hills"},
  {_id:"3",name:"Pinecrest Village",
  description:"Pinecrest Village is a cozy residential neighborhood with charming cottages"}
]

  return (
    <>
    <Header heading="Home" padding={"pb-20"}/>
    <div className='mt -mt-14 '>
      <Carousel />
    <h1 className='text text-2xl font-bold mt-12 ml-8'>Your Communities</h1>
    {communities?.map(community=>(
      <CommunityCard community={community}/>
    ))}
    </div>
    <ActionButton type="group"/>
    </>
  )
}
