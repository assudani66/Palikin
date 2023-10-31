import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";

import { Header } from '../../components'



export const EventDetails = () => 
{
  const navigate = useNavigate();

    const communityName = "Harmony Heaven";
    const eventName = "Kubuntu's Party";

    const [like,setLike] = useState(false);

  return (
    <div className="flex flex-col">
      <header className="flex flex-col relative">
        <Header heading="Events" />
        <section className=" absolute bottom-3 ml-2 flex justify-around items-center w-full font-normal">
        <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>navigate("/events")}>
        <path d="M25 12.2812H3.05176L12.6587 21.8882L11.5601 22.9868L0.0732422 11.5L11.5601 0.0131836L12.6587 1.11182L3.05176 10.7188H25V12.2812Z" fill="black"/>
        </svg>
        <h1 className="text-2xl">{communityName}</h1>
        <span>{" "}</span>

        </section>
      </header>

      <main className="max-w-full h-60 bg-primary rounded-[40px] ml-6 mr-9 mt-7 box-border flex flex-col 
      gap-6 pl-9 content-center pt-12 relative">
      <span className="text-6xl text-white">🎉</span>
      <p className="text-4xl text-white whitespace-normal max-w-[200px]">{eventName}</p>

      {like 
      ?<button className="absolute -bottom-[10%] right-11 bg-white w-14 h-14 rounded-xl flex justify-center items-center shadow-lg" onClick={()=>setLike(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#308886" viewBox="0 0 24 24" stroke-width="1.5" stroke="#308886" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      </button>
      :<button className="absolute -bottom-[10%] right-11 bg-[#308886] w-14 h-14 rounded-xl flex justify-center items-center shadow-lg" onClick={()=>setLike(true)}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
      </button>
      }

      </main>
    </div>
  )
}