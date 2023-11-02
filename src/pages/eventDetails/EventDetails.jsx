import React, {useState} from 'react'
import {useNavigate, useLocation} from "react-router-dom";

import { Header } from '../../components'
import { ActionButton } from '../../components';

import noiseTexture from "../../assets/noise.png";

export const EventDetails = () => 
{
  const navigate = useNavigate();
  const location = useLocation();
  const {eventName, groups, date, time} = location.state;

    const [like,setLike] = useState(false);

  return (
    <div className="flex flex-col overflow-x-hidden ">
      <header className="flex flex-col relative h ">
        <Header heading="Events" />
        <section className=" absolute bottom-3 ml-2 flex justify-around items-center w-full font-normal" >
        <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>navigate("/events")}>
        <path d="M25 12.2812H3.05176L12.6587 21.8882L11.5601 22.9868L0.0732422 11.5L11.5601 0.0131836L12.6587 1.11182L3.05176 10.7188H25V12.2812Z" fill="black"/>
        </svg>
        <h1 className="text-2xl">{groups}</h1>
        <span>{" "}</span>

        </section>
      </header>

      <main className="max-w-full h-60 bg-primary rounded-[40px] ml-6 mr-9 mt-7 box-border flex flex-col 
      gap-6 pl-9 content-center pt-12 relative"
      style={{
        backgroundImage: `url(${noiseTexture})`,
        backgroundBlendMode: 'soft-light',
      }}
      >
      <span className="text-6xl text-white">🎉</span>
      <p className="text-4xl text-white whitespace-normal max-w-[200px]">{eventName}</p>

      <aside className='absolute right-9 top-4 flex justify-center items-center gap-x-2'>
      <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.19371 8.30737C10.0237 8.30742 10.8217 8.62789 11.4212 9.20196C12.0208 9.77603 12.3755 10.5594 12.4115 11.3886L12.4148 11.5284V12.8168C12.4146 12.981 12.3517 13.139 12.239 13.2584C12.1263 13.3778 11.9722 13.4496 11.8083 13.4592C11.6444 13.4689 11.483 13.4155 11.3571 13.3101C11.2312 13.2048 11.1502 13.0553 11.1308 12.8922L11.1263 12.8168V11.5284C11.1264 11.0355 10.938 10.5611 10.5998 10.2025C10.2617 9.84381 9.7992 9.62793 9.30709 9.59901L9.19371 9.59579H4.04002C3.54707 9.59576 3.07273 9.78411 2.71407 10.1223C2.35541 10.4605 2.13953 10.9229 2.11061 11.415L2.10739 11.5284V12.8168C2.10721 12.981 2.04434 13.139 1.93162 13.2584C1.8189 13.3778 1.66485 13.4496 1.50093 13.4592C1.33702 13.4689 1.17562 13.4155 1.0497 13.3101C0.923792 13.2048 0.842872 13.0553 0.823479 12.8922L0.81897 12.8168V11.5284C0.819018 10.6984 1.13949 9.9004 1.71356 9.30089C2.28763 8.70137 3.07097 8.34662 3.90023 8.31059L4.04002 8.30737H9.19371ZM6.61686 0.576843C7.47114 0.576843 8.29043 0.916203 8.89449 1.52027C9.49856 2.12433 9.83792 2.94362 9.83792 3.7979C9.83792 4.65217 9.49856 5.47146 8.89449 6.07552C8.29043 6.67959 7.47114 7.01895 6.61686 7.01895C5.76259 7.01895 4.9433 6.67959 4.33924 6.07552C3.73517 5.47146 3.39581 4.65217 3.39581 3.7979C3.39581 2.94362 3.73517 2.12433 4.33924 1.52027C4.9433 0.916203 5.76259 0.576843 6.61686 0.576843ZM6.61686 1.86526C6.36307 1.86526 6.11176 1.91525 5.87728 2.01238C5.6428 2.1095 5.42975 2.25186 5.25029 2.43132C5.07083 2.61078 4.92847 2.82383 4.83135 3.05831C4.73422 3.29279 4.68423 3.5441 4.68423 3.7979C4.68423 4.05169 4.73422 4.303 4.83135 4.53748C4.92847 4.77196 5.07083 4.98501 5.25029 5.16447C5.42975 5.34393 5.6428 5.48629 5.87728 5.58342C6.11176 5.68054 6.36307 5.73053 6.61686 5.73053C7.12943 5.73053 7.621 5.52691 7.98344 5.16447C8.34588 4.80203 8.5495 4.31046 8.5495 3.7979C8.5495 3.28533 8.34588 2.79376 7.98344 2.43132C7.621 2.06888 7.12943 1.86526 6.61686 1.86526Z" fill="white"/>
      </svg>
      <span className='text-white text-lg'>21</span>

      </aside>

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

      <section className='mt-4 ml-9 w-fit'>
        <h1 className='text-2xl font-medium leading-10  '>{date}</h1>
        <span className='text-sm font-medium '>{time}</span>
      </section>

      <aside className='mt-4 ml-9 '>
        <h1 className='text-base font-bold leading-8'>About Event</h1>
        <p className='leading-7 max-w-[70%] '>Join us at Kubuntu's Party - an exciting celebration of all things Kubuntu! Learn, share, and have
           fun with fellow enthusiasts, developers, and users. Don't miss this inclusive and engaging event!</p>
      </aside>
      <ActionButton type="register" />
    </div>
  )
}