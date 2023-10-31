import React from 'react'

import { Header } from '../../components'

export const EventDetails = () => 
{

    const communityName = "Harmony Heaven";

  return (
    <div>
      <header className="flex flex-col relative">
        <Header heading="Events" />
        <section className=" absolute bottom-3 ml-2 flex justify-around items-center w-full font-normal">
        <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 12.2812H3.05176L12.6587 21.8882L11.5601 22.9868L0.0732422 11.5L11.5601 0.0131836L12.6587 1.11182L3.05176 10.7188H25V12.2812Z" fill="black"/>
        </svg>
        <h1 className="text-2xl">{communityName}</h1>
        <span>{" "}</span>

        </section>
      </header>
    </div>
  )
}
