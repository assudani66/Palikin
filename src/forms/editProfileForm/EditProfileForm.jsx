import React from 'react'

export const EditProfileForm = ({setShowModal}) => 
{
  const input = {imageLink:"",username:"",instagram:"",twitter:""};


  return (
    <div className='flex justify-center items-center fixed z-30 w-screen h-screen bg-secondary/30'>
      <div className='flex flex-col gap-1  bg-white overflow-y-auto w-80 h-2/3 rounded-[20px] py-6 px-5'>
        <header className='flex justify-between items-center'>
          <h1 className='text-2xl'>Edit Profile</h1>
          <svg onClick={()=>setShowModal(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>

        </header>
        <main>

        </main>
        <button className='bg-primary text-white rounded-lg'>Save</button>
      </div>
    </div>
  )
}
