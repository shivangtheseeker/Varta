import React, { useState } from 'react'
import assets, { messagesDummyData } from '../assets/assets'

function ChatContainer({
  setInformation , selectedUser, setSelectedUser
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className={`glassscreen gap-[28px] ${selectedUser? '':'hidden'}`}>
      <header className='header' >
        <div className='flex justify-center items-start gap-[12px] lg:[16px] '>
          <div onClick={()=>{setSelectedUser(false), setInformation(false) }} className='w-[24px] aspect-square cursor-pointer my-auto'>
            <span class="material-symbols-rounded">arrow_back</span>
          </div>
          <img src={assets.profile_martin} alt="profile pic" className='w-[44px] aspect-square object-cover lg:w-[52px] rounded-full' />
          <div className='h-auto flex flex-col gap-[4px] my-auto'>
            <h1 className='font-semibold text-h7 leading-h7 font-headings truncate max-w-[349px] min-w-[200px] overflow-hidden whitespace-nowrap lg:text-h6 lg:leading-h6 text-sky-blue-900'>Sonpara Decoda</h1>
            <span className='text-small leading-small font-body lg:text-body lg:leading-body text-green-600' >Online</span>
          </div>
        </div>
        <div onClick={()=>{setInformation(true)}} className='w-[44px] flex justify-center items-center aspect-square rounded-full cursor-pointer active:bg-sky-blue-500'>
          <span class="material-symbols-rounded">info</span>
        </div>
      </header>
      <section className="flex-1 w-full flex flex-col gap-[16px] overflow-y-auto px-[12px] lg:px-[16px]">
        {
          messagesDummyData.map((msg, index)=>(
            <div key={index} className='flex items-start gap-[12px]'>
              <img src={msg.senderId === '680f5116f10f3cd28382ed02' ? assets.profile_martin : assets.profile_alison} alt="profile pic" className='w-[40px] aspect-square rounded-full object-cover' />
              {
                msg.image
                    ? <img src={msg.image} alt="img" className='w-[200px] aspect-square rounded-[4px] object-cover' />
                    : <div className={`flex items-center justify-center px-[16px] py-[12px] rounded-[4px] ${msg.senderId === '680f5116f10f3cd28382ed02'? 'bg-sky-blue-50' : 'bg-sky-blue-500 text-sky-blue-50'}`} >
                      <p className={`max-w-[320px] md:max-w-[400px] break-words ${isExpanded ? '' : 'line-clamp-6'} `}>
                        {msg.text}
                      </p>
                      </div>
              }
            </div>

          ))
        }
      </section>
      <section className='max-xl:mb-[76px] w-full flex gap-[12px] md:gap-[16px] items-center '>
        <div className='flex-1 bg-sky-blue-50 rounded-[4px] px-[12px] py-[8px] lg:px-[16px] lg:py-[12px] flex justify-between items-center'>
          <input type="text" placeholder='Write your mind...' className='flex-1 text-small lg:text-body font-body font-regular leading-small ' />
          <input type="file" id='image' accept='image/png, image/jpeg' hidden />
          <label htmlFor="image" className=' flex justify-center items-center cursor-pointer w-[24px] aspect-square'>
            <span class="material-symbols-rounded">image</span>
          </label>
        </div>
        <div className='w-[40px] lg:w-[48px] aspect-square rounded-full bg-sky-blue-500 flex justify-center items-center cursor-pointer'>
          <span class="material-symbols-rounded">send</span>
        </div>
      </section>

    </div>
  )
}

export default ChatContainer
