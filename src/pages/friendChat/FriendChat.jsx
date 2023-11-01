import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../components/header/Header'
import { ImageModal } from '../communityChat/ImageModal'

export const FriendChat = ({setShowNavBar}) => {

  const communityName = "Harmony Haven"

  const navigate = useNavigate();
  const [media, setMedia] = useState(null)
  const [mediaUrl, setMediaUrl] = useState("")
  const [openModal, setOpenModal] = useState(false);
  const [message, setMessage] = useState('')
  const [chatMessages, setChatMessages] = useState([]);

  const clickHandler=()=>
  {
    setShowNavBar(true)
    navigate("/friends") 
  }

  const handleModal = () => {
    setOpenModal(true)
  }

  const handleMessage = () => {
    if(message.trim() !== ''){
      setChatMessages([...chatMessages, message])
      setMessage('')
    }
  }

  useEffect(()=>{
    setShowNavBar(false);
  },[])

  return (
    <div className='flex flex-col overflow-y-hidden'>
      <header className="flex flex-col fixed top-0 w-full overflow-x-hidden">
      <Header heading="Chat" padding={"pb-14"}/>
      <section className=" absolute bottom-3 ml-2 flex justify-around items-center w-full font-normal ">
      <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>clickHandler()}>
      <path d="M25 12.2812H3.05176L12.6587 21.8882L11.5601 22.9868L0.0732422 11.5L11.5601 0.0131836L12.6587 1.11182L3.05176 10.7188H25V12.2812Z" fill="black"/>
      </svg>
      <h1 className="text-2xl">{communityName}</h1>
      <span>{" "}</span>

      </section>
      </header>
      <div className='w-screen h-screen flex flex-col justify-end relative'>
      <div className='mb-[20px]'>
        <div className='flex items-start justify-start mb-[20px]'>
        <img src="https://i.postimg.cc/G2Q8d9s7/ted.png" alt="profile" className='w-10 h-10 rounded-full ml-2 mr-2'/>
          
          <div className="bg-[#308886]/70 text-white p-2 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl w-[300px] min-h-[70px]">
            <h1 className="text-left text-l text-orange-200 font-bold">Ted Lasso</h1>
            <h1 className='text-left text-black font-bold'>Hey! Can you send me that illustration image?</h1>  
          </div>
           
        </div>
      </div>
      {openModal && <ImageModal media={media} setMedia={setMedia} setMediaUrl={setMediaUrl} setOpenModal={setOpenModal}/>}
      <div className='mb-[40px]'>
        <div className='flex items-end justify-end mb-[20px]'>
          <div className="bg-[#FFCD6C]/50 text-white p-2 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl w-[300px]">
            <h1 className="text-right text-sm text-[#308886] font-bold">You</h1>
            <h1 className='text-right text-black font-bold'>Hello!</h1>  
          </div>
            <img src="https://i.postimg.cc/fTYff9yW/urahichi.gif" alt="profile" className='w-10 h-10 rounded-full ml-2'/>
      </div>
        {
          chatMessages.map((message, index) => {
            return (
              <div className='flex items-end justify-end mb-[20px]' key={index}>
              <div className='bg-[#FFCD6C]/50 text-white p-2 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl w-[300px]'>
                <h1 className="text-right text-sm text-[#308886] font-bold mb-[3px]">You</h1>
                <p className='text-right text-black font-bold'>{message}</p>
              </div>
              <img src="https://i.postimg.cc/fTYff9yW/urahichi.gif" alt="profile" className='w-10 h-10 rounded-full ml-2'/>
            </div>
            )
          }) 
        }
        {mediaUrl && 
        <div className='flex items-end justify-end'>
          <div className='bg-[#FFCD6C]/50 text-white p-2 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl w-[300px]'>
            <h1 className="text-right text-sm text-[#308886] font-bold mb-[3px]">You</h1>
            <img src={mediaUrl} alt="upload" className="rounded-tl-2xl rounded-bl-2xl rounded-br-2xl"/>
          </div>
          <img src="https://i.postimg.cc/fTYff9yW/urahichi.gif" alt="profile" className='w-10 h-10 rounded-full ml-2'/>
        </div>
        }
      </div>
      </div>
      <footer className='w-full px-6 px flex justify-items-stretch  sticky bottom-3'>
        <input placeholder='Message' className='border box-border border-black rounded-lg px-4 py-3  flex-1' value={message} onChange={(e) => setMessage(e.target.value)} /> 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="absolute right-11 top-3 cursor-pointer" onClick={handleMessage}>
          <path d="M4.99994 12L4.39594 6.563C4.22294 5.007 5.82494 3.864 7.23994 4.535L19.1839 10.193C20.7089 10.915 20.7089 13.085 19.1839 13.807L7.23994 19.465C5.82494 20.135 4.22294 18.993 4.39594 17.437L4.99994 12ZM4.99994 12H11.9999" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
         </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" onClick={() => setOpenModal(true)} className="absolute w-6 h-6 right-[79px] top-3">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      </footer>
    </div>
  )
}
