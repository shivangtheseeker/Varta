import React from 'react'
import assets, { userDummyData } from '../assets/assets'

function Sidebar(
  {information, selectedUser , setSelectedUser}
) {
  return (
    <div className={`glassscreen gap-[16px] sm:gap-[20px] ${selectedUser && "max-md:hidden" } ${information && "hidden"}`} >
      <search className='searchbar'>
        <input 
        type="text" 
        placeholder='Search your mate...' 
        className='flex-1 body-regular text-sky-blue-900 placeholder-grey-300 ' />
        <div className=' w-[24px] aspect-[1/1] cursor-pointer'>
          <span class="material-symbols-rounded">search</span>
        </div>
      </search>
      <section className='w-full flex flex-col gap-[4px]'>
           {
            userDummyData.map((user, index)=>(
              <div onClick={()=>{setSelectedUser(user)}} key={index} className='w-full flex items-start gap-[12px] rounded-[4px] px-[12px] py-[8px] sm:px-[16px] hover:bg-sky-blue-100 '>
                <img src={user.profilePic} alt="profile pic" className='w-[44px] aspect-square object-cover rounded-full' />
                <div className='flex flex-col justify-center gap-[4px] h-auto'>
                  <h1 className='h7-semibold truncate max-w-[300px] min-w-[160px] overflow-hidden whitespace-nowrap text-sky-blue-900'>{user.fullName}</h1>
                  <span className={`text-small leading-small font-body lg:text-body lg:leading-body ${index < 3 ? 'text-green-800' : "text-grey-500"} `}>{ index < 3 ? 'Online' : 'Offline'}</span>
                </div>
              </div>
            ))
           }
      </section>
    </div>
  )
}

export default Sidebar
