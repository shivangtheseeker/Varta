import React, { useState } from 'react'
import assets from '../assets/assets'

const login = () => {
  const [pageLocation, setPageLocation] = useState("Join The Freedom")
  return (
    <section className='w-full h-screen  grid grid-cols-1 md:grid-cols-2 gap-[20px]'>
      <div className='w-full h-full flex justify-center items-center'>
          <div className='glassscreen p-[24px] h-auto flex gap-[28px]'>
            <h1 className='text-h4 font-headings leading-h4 font-bold text-sky-blue-900'>{pageLocation}</h1>
            <form action="submit" className=' w-full flex flex-col gap-[16px]' >
              <input type="email" placeholder='Enter your Email' className=' w-full bg-sky-blue-50 px-[12px] py-[8px] text-body font-body font-regular leading-body text-grey-400 rounded-[4px] ' />
              <input type="text" placeholder='Enter your Name' />
              <input type="password" placeholder='Enter your Password' />
            </form>
            <button>

            </button>

          </div>
      </div>
      <div className='glassscreen hidden md:flex rounded-[0] border-0 w-full justify-center items-center'>
        <img src={assets.vartaLogo} alt="logo" className='w-[184px] h-[336px] lg:w-[238px] lg:h-[460px]' />
      </div>
    </section>
  )
}

export default login
