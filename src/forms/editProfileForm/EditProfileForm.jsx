import React, {useState} from 'react'

import {Avatars} from "../../assets/avatars/Avatars";

export const EditProfileForm = ({setShowModal,profileInfo,setProfileInfo}) => 
{
  const [input,setInput] = useState({profilePic:profileInfo?.profilePic,bio:profileInfo?.bio,instaUrl:profileInfo?.instaUrl,
    twitterUrl:profileInfo?.twitterUrl});

    const {avatar1,avatar4,avatar5,avatar6,avatar7,avatar8}=Avatars;

    const changeHandler=(textField,text)=>
    {
      setInput(prev=>({...prev,[textField]:text}))
    }

    const clickHandler=(selectedAvatar)=>
    {
      setInput(prev=>({...prev,profilePic:selectedAvatar}))
    }

    const editUserHandler=()=>
    {
      setProfileInfo(prev=>({...prev,profilePic:input.profilePic,bio:input.bio,instaUrl:input.instaUrl,twitterUrl:input.twitterUrl}));
      setShowModal(false);
    }

  return (
    <div className='flex justify-center items-center fixed z-30 w-screen h-screen bg-secondary/30'>
      <div className='flex flex-col gap-y-4  bg-white overflow-y-auto w-4/5 h-4/5 rounded-[20px] py-6 px-5'>
        <header className='flex justify-between items-center'>
          <h1 className='text-2xl'>Edit Profile</h1>
          <svg onClick={()=>setShowModal(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </header>
        <section className='flex justify-center items-center'>
        <img src={input.profilePic} alt="profile" width={86} height={86} className="w-24  h-24 rounded-full box-content"/>
        </section>
        <main className="grid grid-cols-3 gap-y-4 justify-center justify-items-center items-center">
                    <img alt="" src={avatar1} width={80} height={80} className="rounded-full shadow-md object-contain transition duration-300 hover:shadow-black hover:shadow-lg" onClick={()=>clickHandler(avatar1)}/>
                    <img alt="" src={avatar4} width={80} height={80} className="rounded-full shadow-md object-contain transition duration-300 hover:shadow-black hover:shadow-lg" onClick={()=>clickHandler(avatar4)}/>
                    <img alt="" src={avatar5} width={80} height={80} className="rounded-full shadow-md object-contain transition duration-300 hover:shadow-black hover:shadow-lg" onClick={()=>clickHandler(avatar5)}/>
                    <img alt="" src={avatar6} width={80} height={80} className="rounded-full shadow-md object-contain transition duration-300 hover:shadow-black hover:shadow-lg" onClick={()=>clickHandler(avatar6)}/>
                    <img alt="" src={avatar7} width={80} height={80} className="rounded-full shadow-md object-contain transition duration-300 hover:shadow-black hover:shadow-lg" onClick={()=>clickHandler(avatar7)}/>
                    <img alt="" src={avatar8} width={80} height={80} className="rounded-full shadow-md object-contain transition duration-300 hover:shadow-black hover:shadow-lg" onClick={()=>clickHandler(avatar8)}/>
                </main>

                <input value={input?.bio} placeholder='Enter Bio' className='border box-border border-black rounded-lg px-4 py-3 ' onChange={(e)=>changeHandler("bio",e.target.value)}/>  
                <section className='flex relative'>
                <input value={input?.instaUrl} placeholder='Enter Instagram Url' className='border box-border border-black rounded-lg px-4 py-3 flex-1 ' onChange={(e)=>changeHandler("instaUrl",e.target.value)}/>  
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" className="absolute right-3 top-3 cursor-pointer">
                    <g clip-path="url(#clip0_176_92)">
                    <path d="M14 0C10.2007 0 9.723 0.0175 8.23025 0.084C6.7375 0.154 5.72075 0.3885 4.83 0.735C3.89566 1.08643 3.04936 1.6377 2.35025 2.35025C1.63813 3.04972 1.08694 3.89592 0.735 4.83C0.3885 5.719 0.15225 6.7375 0.084 8.225C0.0175 9.72125 0 10.1973 0 14.0018C0 17.8028 0.0175 18.2788 0.084 19.7715C0.154 21.2625 0.3885 22.2792 0.735 23.17C1.09375 24.0905 1.5715 24.871 2.35025 25.6497C3.12725 26.4285 3.90775 26.908 4.82825 27.265C5.72075 27.6115 6.73575 27.8477 8.22675 27.916C9.72125 27.9825 10.1972 28 14 28C17.8028 28 18.277 27.9825 19.7715 27.916C21.2608 27.846 22.281 27.6115 23.1718 27.265C24.1055 26.9134 24.9512 26.3621 25.6497 25.6497C26.4285 24.871 26.9062 24.0905 27.265 23.17C27.6097 22.2792 27.846 21.2625 27.916 19.7715C27.9825 18.2788 28 17.8028 28 14C28 10.1972 27.9825 9.72125 27.916 8.22675C27.846 6.7375 27.6097 5.719 27.265 4.83C26.9131 3.89589 26.3619 3.04968 25.6497 2.35025C24.9509 1.63743 24.1045 1.08613 23.17 0.735C22.2775 0.3885 21.259 0.15225 19.7697 0.084C18.2752 0.0175 17.801 0 13.9965 0H14.0018H14ZM12.7452 2.5235H14.0018C17.7398 2.5235 18.1825 2.53575 19.6577 2.604C21.0227 2.66525 21.7647 2.8945 22.2582 3.08525C22.911 3.339 23.3782 3.6435 23.8682 4.1335C24.3582 4.6235 24.661 5.089 24.9148 5.7435C25.1073 6.23525 25.3348 6.97725 25.396 8.34225C25.4643 9.8175 25.4783 10.2603 25.4783 13.9965C25.4783 17.7328 25.4643 18.1772 25.396 19.6525C25.3348 21.0175 25.1055 21.7578 24.9148 22.2513C24.6903 22.8591 24.332 23.4088 23.8665 23.8595C23.3765 24.3495 22.911 24.6523 22.2565 24.906C21.7665 25.0985 21.0245 25.326 19.6577 25.389C18.1825 25.4555 17.7398 25.4713 14.0018 25.4713C10.2638 25.4713 9.81925 25.4555 8.344 25.389C6.979 25.326 6.23875 25.0985 5.74525 24.906C5.13712 24.6819 4.58697 24.3243 4.13525 23.8595C3.66931 23.4081 3.31052 22.8579 3.08525 22.2495C2.8945 21.7577 2.66525 21.0158 2.604 19.6508C2.5375 18.1755 2.5235 17.7327 2.5235 13.993C2.5235 10.255 2.5375 9.814 2.604 8.33875C2.667 6.97375 2.8945 6.23175 3.087 5.73825C3.34075 5.0855 3.64525 4.61825 4.13525 4.12825C4.62525 3.63825 5.09075 3.3355 5.74525 3.08175C6.23875 2.88925 6.979 2.66175 8.344 2.59875C9.6355 2.53925 10.136 2.52175 12.7452 2.52V2.5235ZM21.4742 4.8475C21.2536 4.8475 21.0352 4.89095 20.8313 4.97538C20.6275 5.05981 20.4423 5.18356 20.2863 5.33956C20.1303 5.49556 20.0066 5.68076 19.9221 5.88459C19.8377 6.08842 19.7942 6.30688 19.7942 6.5275C19.7942 6.74812 19.8377 6.96658 19.9221 7.17041C20.0066 7.37423 20.1303 7.55944 20.2863 7.71544C20.4423 7.87144 20.6275 7.99519 20.8313 8.07962C21.0352 8.16405 21.2536 8.2075 21.4742 8.2075C21.9198 8.2075 22.3471 8.0305 22.6622 7.71544C22.9773 7.40038 23.1542 6.97306 23.1542 6.5275C23.1542 6.08194 22.9773 5.65462 22.6622 5.33956C22.3471 5.0245 21.9198 4.8475 21.4742 4.8475ZM14.0018 6.811C13.0481 6.79612 12.1011 6.9711 11.2157 7.32575C10.3304 7.68039 9.5244 8.20762 8.84476 8.87674C8.16513 9.54586 7.62539 10.3435 7.25697 11.2232C6.88856 12.1029 6.69883 13.0471 6.69883 14.0009C6.69883 14.9546 6.88856 15.8988 7.25697 16.7785C7.62539 17.6583 8.16513 18.4559 8.84476 19.125C9.5244 19.7941 10.3304 20.3214 11.2157 20.676C12.1011 21.0306 13.0481 21.2056 14.0018 21.1908C15.8892 21.1613 17.6894 20.3908 19.0137 19.0457C20.338 17.7005 21.0803 15.8886 21.0803 14.0009C21.0803 12.1132 20.338 10.3012 19.0137 8.95606C17.6894 7.6109 15.8892 6.84045 14.0018 6.811ZM14.0018 9.33275C15.2396 9.33275 16.4267 9.82448 17.302 10.6998C18.1773 11.575 18.669 12.7622 18.669 14C18.669 15.2378 18.1773 16.425 17.302 17.3002C16.4267 18.1755 15.2396 18.6672 14.0018 18.6672C12.7639 18.6672 11.5768 18.1755 10.7015 17.3002C9.82623 16.425 9.3345 15.2378 9.3345 14C9.3345 12.7622 9.82623 11.575 10.7015 10.6998C11.5768 9.82448 12.7639 9.33275 14.0018 9.33275Z" fill="black"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_176_92">
                      <rect width="28" height="28" fill="white"/>
                    </clipPath>
                  </defs>
                  </svg>
                </section>
                <section className='flex relative'>
                <input value={input?.twitterUrl} placeholder='Enter Twitter Url' className='border box-border border-black rounded-lg px-4 py-3 flex-1 ' onChange={(e)=>changeHandler("twitterUrl",e.target.value)} />  
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" className="absolute right-3 top-3 cursor-pointer">
                  <path d="M12.7792 9.526L19.7408 1.375H18.0908L12.0477 8.45212L7.21865 1.375H1.6499L8.95115 12.078L1.6499 20.625H3.2999L9.68265 13.1505L14.7825 20.625H20.3513L12.7792 9.526ZM10.52 12.1715L9.78028 11.1059L3.8939 2.62625H6.42803L11.1773 9.46963L11.917 10.5353L18.0922 19.4315H15.558L10.52 12.1715Z" fill="black"/>
                </svg>
                </section>

        <button className='bg-primary text-white rounded-lg w-1/3 self-center py-1 shadow-lg' onClick={()=>editUserHandler()}>Save</button>
      </div>
    </div>
  )
}