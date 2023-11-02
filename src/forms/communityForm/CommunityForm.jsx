import React from 'react'

export const CommunityForm = ({setShowForm}) => {
  return (
    <div className='flex justify-center items-center fixed z-30 w-screen h-screen bg-secondary/30'>
    <div className='flex flex-col gap-y-10  bg-white overflow-y-auto w-4/5 h-[70%] rounded-[20px] py-6 px-5'>
      <header className='flex justify-between items-center mb-[20px]'>
        <h1 className='text-2xl'>Add a community</h1>
        <svg onClick={()=>setShowForm(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </header>
              <input placeholder='Enter Community name' className='border box-border border-black rounded-lg px-4 py-3 '/>  
              <section className='flex relative'>
              <input placeholder='Enter Community description' className='border box-border border-black rounded-lg px-4 py-3 flex-1 ' />  
              </section>
              <section className='flex relative'>
              <input placeholder='Enter Community goals' className='border box-border border-black rounded-lg px-4 py-3 flex-1 ' />  
              </section>
              <section className='flex relative'>
              <input placeholder='Enter twitter URL' className='border box-border border-black rounded-lg px-4 py-3 flex-1 ' />  
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" className="absolute right-3 top-3 cursor-pointer">
                <path d="M12.7792 9.526L19.7408 1.375H18.0908L12.0477 8.45212L7.21865 1.375H1.6499L8.95115 12.078L1.6499 20.625H3.2999L9.68265 13.1505L14.7825 20.625H20.3513L12.7792 9.526ZM10.52 12.1715L9.78028 11.1059L3.8939 2.62625H6.42803L11.1773 9.46963L11.917 10.5353L18.0922 19.4315H15.558L10.52 12.1715Z" fill="black"/>
              </svg>
              </section>

      <button className='bg-primary text-white rounded-lg w-1/3 self-center py-1 shadow-lg' >Add</button>
    </div>
  </div>
  )
}
