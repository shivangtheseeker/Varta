import React, { useState } from 'react'
import assets from '../assets/assets'

const login = () => {
  const [currentState, setCurrentState] = useState("SignUp")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const onSubmitHandler = (event)=> {
    event.preventDefault();
  }
  return (
    <section className='w-full h-screen  grid grid-cols-1 md:grid-cols-2 gap-[20px]'>
      <div className='w-full h-full flex justify-center items-center'>
          <div className='glassscreen p-[24px] h-auto xl:w-[60%] flex gap-[28px]'>
            <h1 className='text-h4 font-headings leading-h4 font-bold text-sky-blue-900'>{currentState==="SignUp" ? ("Join The Freedom") : ("Rejoin the Freedom")}</h1>
            <form onSubmit={onSubmitHandler} action="submit" className=' w-full flex flex-col gap-[16px]' >
              <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='Enter your Email' required className=' w-full bg-sky-blue-50 px-[12px] py-[8px] text-body font-body font-regular leading-body text-grey-400 rounded-[4px] ' />
              {currentState==="SignUp" && (<input onChange={(e)=>setName(e.target.value)} type="text" value={name} placeholder='Enter your Name' required className=' w-full bg-sky-blue-50 px-[12px] py-[8px] text-body font-body font-regular leading-body text-grey-400 rounded-[4px] ' />) }
              <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder='Enter your Password' required className=' w-full bg-sky-blue-50 px-[12px] py-[8px] text-body font-body font-regular leading-body text-grey-400 rounded-[4px] ' />
              <button type='submit'className=' w-full bg-sky-blue-600 px-[12px] py-[8px] text-body font-body font-regular leading-body text-white cursor-pointer rounded-[4px] '   > {
                currentState === "SignUp" ? "Create Account" : "Log In"
              }</button>
            </form>
            
            <div className=''>
              {
                currentState === "SignUp" ? <p className='text-gray-600 body-regular'> Do you already have an account ? <span onClick={()=>setCurrentState("LogIn")} className='text-blue-900 body-semibold cursor-pointer'>LogIn</span> </p> : 
                <div className='flex flex-col justify-center items-center gap-[6px] '>
                  <p className='text-blue-900 body-regular cursor-pointer'>Forget the Password ?</p>
                  <p className='text-gray-600 body-regular' > Dont You have account ? <span onClick={()=>setCurrentState("SignUp")} className='text-blue-900 body-semibold cursor-pointer'>Sign Up</span> </p>
                </div>
              }
            </div>

          </div>
      </div>
      <div className='glassscreen hidden md:flex rounded-[0] border-0 w-full justify-center items-center'>
        <img src={assets.vartaLogo} alt="logo" className='w-[184px] h-[336px] lg:w-[238px] lg:h-[460px]' />
      </div>
    </section>
  )
}

export default login
