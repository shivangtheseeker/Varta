import React, { useContext, useEffect, useRef, useState } from 'react'
import assets from "../assets/assets.js"; 
import { AuthContext } from '../../context/AuthContext';
import { ChatContext } from '../../context/ChatContext';

function ChatContainer({
  information, setInformation 
}) {
  const { messages, sendMessage, getMessages, selectedUser, setSelectedUser} = useContext(ChatContext)
  const {authUser, onlineUsers} = useContext(AuthContext)
  const [input, setInput] = useState("")
  const handleSendMessage = async(e) => {
    e.preventDefault()
    if(input.trim()==="") return null;
    await sendMessage({text: input.trim()})
    setInput("")
  }
  const handleSendImage = async (e) => {
    const file = e.target.files[0]
    if(!file || !file.type.startsWith("image/")){
      toast.error("select an image file")
      return
    }
    const reader = new FileReader()
    reader.onloadend = async ()=>{
     await sendMessage({image: reader.result})
     e.target.value = ""
    }
    reader.readAsDataURL(file)

  }
  
  useEffect(()=>{
    if(selectedUser){
      getMessages(selectedUser._id)
    }
  },[selectedUser])

  const scrollEnd = useRef(null);
  useEffect(()=>{
    if(scrollEnd.current && messages){
      scrollEnd.current.scrollIntoView({behavior : "smooth"})
    }
  }, [messages])


  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className={`glassscreen gap-[28px] ${selectedUser? '':'hidden'} ${information?'max-md:hidden':''}`}>
      <header className='header' >
        <div className='flex justify-center items-start gap-[12px] lg:[16px] '>
          <div onClick={()=>{setSelectedUser(false), setInformation(false) }} className='w-[24px] aspect-square cursor-pointer my-auto'>
            <span class="material-symbols-rounded">arrow_back</span>
          </div>
          <img src={selectedUser?.profilePic || assets.avatar} alt="profile pic" className='w-[44px] aspect-square object-cover lg:w-[52px] rounded-full' />
          <div className='h-auto flex flex-col gap-[4px] my-auto'>
            <h1 className='font-semibold text-h7 leading-h7 font-headings truncate max-w-[349px] min-w-[200px] overflow-hidden whitespace-nowrap lg:text-h6 lg:leading-h6 text-sky-blue-900'>{selectedUser?.fullname}</h1>
            <span className= {`text-small leading-small font-body lg:text-body lg:leading-body ${onlineUsers.includes(selectedUser?._id) ? 'text-green-800' : "text-grey-500"}`} >{onlineUsers.includes(selectedUser?._id) ? 'Online' : 'Offline'}</span>
          </div>
        </div>
        <div onClick={()=>{setInformation(true)}} className='w-[44px] flex justify-center items-center aspect-square rounded-full cursor-pointer active:bg-sky-blue-500'>
          <span class="material-symbols-rounded">info</span>
        </div>
      </header>
      <section className="flex-1 w-full flex flex-col gap-[16px] overflow-y-auto px-[12px] lg:px-[16px]">
        {
          messages.map((msg, index)=>(
            <div key={index} className='flex items-start gap-[12px]'>
              <img src={msg.senderId === authUser._id ? authUser?.profilePic || assets.avatar : selectedUser?.profilePic || assets.avatar} alt="profile pic" className='w-[40px] aspect-square rounded-full object-cover' />
              {
                msg.image
                    ? <img src={msg.image} alt="img" className='w-[200px] aspect-square rounded-[4px] object-cover' />
                    : <div className={`flex items-center justify-center px-[16px] py-[12px] rounded-[4px] ${msg.senderId === authUser._id ? 'bg-sky-blue-500 text-sky-blue-50' : 'bg-sky-blue-50'}`} >
                      <p className={`max-w-[320px] md:max-w-[400px] break-words ${isExpanded ? '' : 'line-clamp-6'} `}>
                        {msg.text}
                      </p>
                      </div>
              }
            </div>

          ))
        }
        <div ref={scrollEnd} ></div>
      </section>
      <section className='max-xl:mb-[76px] w-full flex gap-[12px] md:gap-[16px] items-center '>
        <div className='flex-1 bg-sky-blue-50 rounded-[4px] px-[12px] py-[8px] lg:px-[16px] lg:py-[12px] flex justify-between items-center'>
          <input onChange={(e)=>{setInput(e.target.value)}} value={input} onKeyDown={(e) => e.key === "Enter" ? handleSendMessage(e) : null} type="text" placeholder='Write your mind...' className='flex-1 text-small lg:text-body font-body font-regular leading-small ' />
          <input onChange={handleSendImage} type="file" id='image' accept='image/png, image/jpeg' hidden />
          <label htmlFor="image" className=' flex justify-center items-center cursor-pointer w-[24px] aspect-square'>
            <span class="material-symbols-rounded">image</span>
          </label>
        </div>
        <div onClick={handleSendMessage} className='w-[40px] lg:w-[48px] aspect-square rounded-full bg-sky-blue-500 flex justify-center items-center cursor-pointer'>
          <span class="material-symbols-rounded">send</span>
        </div>
      </section>

    </div>
  )
}

export default ChatContainer
