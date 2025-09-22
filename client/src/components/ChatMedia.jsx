import React, { useContext, useEffect, useState } from 'react'

import { ChatContext } from '../../context/ChatContext'

function ChatMedia({
  information, setInformation
}) {
  const {selectedUser, messages} = useContext(ChatContext)
  const [msgImage, setMsgImages] = useState([])
  useEffect(()=>{
    setMsgImages(
      messages.filter(msg => msg.image).map(msg=>msg.image)
    )
  },[messages])
  return (
    <div className={`glassscreen gap-[24px] relative ${information ? 'static' : 'hidden'}` }>
      <div className='flex flex-col justify-center items-center gap-[16px]'>
        <img src={selectedUser?.profilePic || "/avatar.jpg"} alt="profile pic" className='w-[120px] aspect-square rounded-full object-cover' />
        <div className='flex flex-col justify-center items-center gap-[8px]'>
          <h1 className='text-h6 leading-h6 font-headings font-bold text-sky-blue-900' >{selectedUser?.fullname}</h1>
          <p className='text-body font-body leading-body font-regular text-center line-clamp-4 text-sky-blue-900' >{selectedUser?.bio}</p>
        </div>
      </div>
      <div className=' h-full flex flex-col gap-[12px] overflow-hidden'>
        <h1 className='w-full pb-[4px] border-b-1 text-h8 font-headings font-semibold text-sky-blue-900'>Media</h1>
        <div className='h-fit w-full grid grid-cols-3 gap-[12px] overflow-y-auto scroll-smooth' >
          {
            msgImage.map((img)=>(
              <img src={img} alt="img" className='aspect-square rounded-[4px] object-cover' />
            ))
          }
        </div>
      </div>
      <div onClick={()=>{setInformation(false)}} className='w-[24px] aspect-square absolute top-[16px] right-[16px] cursor-pointer '>
        <span class="material-symbols-rounded">close</span>
      </div>
    </div>
  )
}

export default ChatMedia
