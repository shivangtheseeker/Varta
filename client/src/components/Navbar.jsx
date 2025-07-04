import React from 'react'
import assets from '../assets/assets'
import {useNavigate} from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className='navbar'>
      <img onClick={()=>(navigate('/profile'))} src={assets.profile_martin} alt="profile pic" className='max-w-[52px] xl:max-w-[68px] aspect-[1/1] object-cover rounded-full cursor-pointer ' />
      <div className='flex flex-row xl:flex-col gap-[16px]'>
         <div className='w-[44px] xl:w-[52px] aspect-[1/1] bg-sky-blue-200 flex items-center justify-center rounded-full cursor-pointer hover:bg-sky-blue-50 active:bg-sky-blue-50 '>
          <span class="material-symbols-rounded">home</span>
         </div>
         <div className='w-[44px] xl:w-[52px]  aspect-[1/1] bg-sky-blue-200 flex items-center justify-center rounded-full cursor-pointer hover:bg-sky-blue-50 active:bg-sky-blue-50 ' >
           <span class="material-symbols-rounded">notifications</span>
         </div>
         <div className='w-[44px] xl:w-[52px] aspect-[1/1] bg-sky-blue-200 flex items-center justify-center rounded-full cursor-pointer hover:bg-sky-blue-50 active:bg-sky-blue-50  '>
           <span class="material-symbols-rounded">forum</span>
         </div>
      </div>
      <div className='w-[44px] xl:w-[52px] aspect-[1/1] bg-sky-blue-500 border-sky-blue-300 border-solid border-[2px] flex items-center justify-center rounded-full cursor-pointer hover:bg-sky-blue-400 active:bg-sky-blue-400 '>
        <span class="material-symbols-rounded">arrow_circle_left</span>
      </div>
    </nav>
  )
}

export default Navbar
