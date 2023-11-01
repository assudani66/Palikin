import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';


import { Header } from '../../components';

export const CommunityChat = ({setShowNavBar}) => 
{
 
  const communityName = "Harmony Haven"

  const navigate = useNavigate();

  const clickHandler=()=>
  {
    setShowNavBar(true);
    navigate("/communities")
    
  }

  useEffect(()=>{
    setShowNavBar(false);
  },[])

  return (
    <><header className="flex flex-col relative overflow-x-hidden ">
    <Header heading="Home" padding={"pb-14"}/>
    <section className=" absolute bottom-3 ml-2 flex justify-around items-center w-full font-normal ">
    <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>clickHandler()}>
    <path d="M25 12.2812H3.05176L12.6587 21.8882L11.5601 22.9868L0.0732422 11.5L11.5601 0.0131836L12.6587 1.11182L3.05176 10.7188H25V12.2812Z" fill="black"/>
    </svg>
    <h1 className="text-2xl">{communityName}</h1>
    <span>{" "}</span>

    </section>
  </header>

    <div className='w-screen h-screen flex flex-col justify-center items-center relative'>
      
      <h1>Communit Chat</h1>
      <footer className='w-full px-6 px flex justify-items-stretch  fixed bottom-3'>
        <input placeholder='Message' className='border box-border border-black rounded-lg px-4 py-3  flex-1' /> 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="absolute right-11 top-3 cursor-pointer">
          <path d="M4.99994 12L4.39594 6.563C4.22294 5.007 5.82494 3.864 7.23994 4.535L19.1839 10.193C20.7089 10.915 20.7089 13.085 19.1839 13.807L7.23994 19.465C5.82494 20.135 4.22294 18.993 4.39594 17.437L4.99994 12ZM4.99994 12H11.9999" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
      </footer>
    </div>
    </>
  )
}
