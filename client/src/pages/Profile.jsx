import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import assets from '../assets/assets';

function Profile() {
  const [selectedImg, setSelectedImg] = useState(null)
  const navigate = useNavigate();
  const [name, setName] = useState(null)
  const [bio, setBio] = useState("Hey, I'm using varta")
  const handleSubmit = async(e)=>{
    e.preventDefault();
    navigate('/')
  }
  return (
    <section className='w-full h-screen grid justify-items-center items-center px-[16px] '>
      <div className='glassscreen h-auto p-[20px] md:p-[24px] w-full md:w-5/6 max-w-2xl'>
        <form onSubmit={handleSubmit} className='w-full flex flex-col gap-[32px] md:gap-[40px] justify-center items-center'>
          <label htmlFor="avatar" className='w-fit flex flex-col gap-[16px] justify-center items-center cursor-pointer h7-semibold text-sky-900'>
            <img src={selectedImg? URL.createObjectURL(selectedImg) : assets.avatar} alt="profilePic" className='w-[100px] lg:w-[140px] aspect-square object-cover rounded-full' />
            <input onChange={(e)=>setSelectedImg(e.target.files[0])} type="file" id="avatar" accept='.jpg, .png, .jpeg' hidden />
            Upload Profile Picture
          </label>
          <fieldset className='w-full flex flex-col gap-[16px]'>
            <div className='flex flex-row justify-between gap-[16px] '>
              <label htmlFor="name" className='h7-semibold text-grey-500 flex items-center'>Name</label>
              <input onChange={(e)=>setName(e.target.value)} value={name} type="text" required placeholder='write your name' id='name' className='flex-1 p-[12px] rounded-[4px] body-regular text-grey-500 bg-sky-50 ' />
            </div>
            <div className='flex flex-row justify-between gap-[37px] '>
              <label htmlFor="bio" className='h7-semibold text-grey-500 flex items-center'>Bio</label>
              <input onChange={(e)=>setBio(e.target.value)} value={bio} type="text" required rows={4} placeholder='write your bio' id='bio' className='flex-1 p-[12px] rounded-[4px] body-regular text-grey-500 bg-sky-50 ' />
            </div>
          </fieldset>
          <button type="submit" className='w-full body-bold text-sky-100 bg-sky-blue-600 rounded-[4px] py-[16px] '>Save</button>

        </form>


      </div>

    </section>
  )
}

export default Profile
