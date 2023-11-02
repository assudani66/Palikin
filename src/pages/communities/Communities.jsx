import React from 'react'
import {useState} from "react"

import { Header } from '../../components/header/Header'
import { ActionButton } from '../../components/actionButton/ActionButton'

import { Carousel } from '../../components/carousel/Carousel'
import { NavBar } from '../../components'

import {CommunityCard} from "./CommunityCard";
import { CommunityForm } from '../../forms'

export const Communities = () => {

  const [showForm, setShowForm] = useState(false);

  const actionClickHandler = () => {
    setShowForm(true)
  }

  const communities = [{_id:"1",name:"Harmony Haven",
  description:"Harmony Haven is a tight-kin environmentally conscious community"},
  {_id:"2",name:"Will Heights",
  description:"Will Heights is an exclusive gated community nestled in the rolling hills"},
  {_id:"3",name:"Pinecrest Village",
  description:"Pinecrest Village is a cozy residential neighborhood with charming cottages"}
]

  return (
    <>
    {showForm && <CommunityForm setShowForm={setShowForm}/>}
    <div className=' flex flex-col justify-between h-full'>
    <Header heading="Home" padding={"pb-20"}/>
      <Carousel />
    <h1 className='text text-2xl font-bold mt-8 ml-8'>Your Communities</h1>
    {communities?.map(community=>(
      <CommunityCard community={community}/>
    ))}
    <NavBar />
    </div>
    <ActionButton type="group" actionClickHandler={actionClickHandler} />
    </>
  )
}
