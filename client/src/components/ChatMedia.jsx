import React from 'react'
import assets from '../assets/assets'

function ChatMedia({
  information, setInformation
}) {
  return (
    <div className={`glassscreen gap-[24px] relative ${information ? 'static' : 'hidden'}` }>
      <div className='flex flex-col justify-center items-center gap-[16px]'>
        <img src={assets.profile_martin} alt="profile pic" className='w-[120px] aspect-square rounded-full object-cover' />
        <div className='flex flex-col justify-center items-center gap-[12px]'>
          <h1 className='text-h6 leading-h6 font-headings font-semibold text-sky-blue-900' >Sonpara Decoda</h1>
          <p className='text-small font-body leading-small font-regular text-center line-clamp-4 text-sky-blue-900' >is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised</p>
        </div>
      </div>
      <div className=' h-full flex flex-col gap-[12px] overflow-hidden'>
        <h1 className='w-full pb-[4px] border-b-1 text-h8 font-headings font-semibold text-sky-blue-900'>Media</h1>
        <div className='h-fit w-full grid grid-cols-3 gap-[12px] overflow-y-auto scroll-smooth' >
          <img src={assets.profile_alison} alt="img" className='aspect-square rounded-[4px] object-cover' />
          <img src={assets.profile_alison} alt="img" className='aspect-square rounded-[4px] object-cover' />
          <img src={assets.profile_alison} alt="img" className='aspect-square rounded-[4px] object-cover' />
          <img src={assets.profile_enrique} alt="img" className='aspect-square rounded-[4px] object-cover' />
          <img src={assets.profile_alison} alt="img" className='aspect-square rounded-[4px] object-cover' />
          <img src={assets.profile_alison} alt="img" className='aspect-square rounded-[4px] object-cover' />
          <img src={assets.profile_alison} alt="img" className='aspect-square rounded-[4px] object-cover' />
          <img src={assets.profile_alison} alt="img" className='aspect-square rounded-[4px] object-cover' />
          <img src={assets.profile_alison} alt="img" className='aspect-square rounded-[4px] object-cover' />
          
        </div>
      </div>
      <div onClick={()=>{setInformation(false)}} className='w-[24px] aspect-square absolute top-[16px] right-[16px] cursor-pointer '>
        <span class="material-symbols-rounded">close</span>
      </div>
    </div>
  )
}

export default ChatMedia
