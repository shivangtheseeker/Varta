import React, { useContext, useEffect, useState } from 'react'
import asset from '../assets/assets'
import { ChatContext } from '../../context/ChatContext'
import { AuthContext } from '../../context/AuthContext'

function Sidebar(
  {information}
) {
  const { users, getUsers , selectedUser, setSelectedUser, unseenMessages, setUnseenMessages} = useContext(ChatContext)
  const {onlineUsers} = useContext(AuthContext)
  const [input, setInput] = useState("")
  const filteredUsers = input ? users.filter((user)=>user.fullname.toLowerCase().includes(input.toLowerCase())) : users
  useEffect(()=>{
    getUsers()
  },[onlineUsers])
  return (
    <div className={`glassscreen gap-[16px] sm:gap-[20px] ${selectedUser && "max-md:hidden" } ${information && "hidden"}`} >
      <div role='search' className='searchbar'>
        <input 
        onChange={(e)=>setInput(e.target.value)}
        type="text" 
        placeholder='Search your mate...' 
        className='flex-1 body-regular text-sky-blue-900 placeholder-grey-300 ' />
        <div className=' w-[24px] aspect-[1/1] cursor-pointer'>
          <span class="material-symbols-rounded">search</span>
        </div>
      </div>
      <section className='w-full flex flex-col gap-[4px]'>
           {
            filteredUsers.map((user, index)=>(
              <div onClick={()=>{setSelectedUser(user), setUnseenMessages(prev=>({...prev, [user._id]:0}))}} key={index} className=' w-full flex justify-between items-center rounded-[4px] px-[12px] py-[8px] sm:px-[16px] hover:bg-sky-blue-100 cursor-pointer ' >
              <div className=' flex gap-[12px]  '>
                <img src={user.profilePic ? user.profilePic : asset.avatar } alt="profile pic" className='w-[44px] aspect-square object-cover rounded-full' />
                <div className='flex flex-col justify-center gap-[4px] h-auto'>
                  <h1 className='h7-semibold truncate max-w-[300px] min-w-[160px] overflow-hidden whitespace-nowrap text-sky-blue-900'>{user.fullname}</h1>
                  <span className={`text-small leading-small font-body lg:text-body lg:leading-body ${onlineUsers.includes(user._id) ? 'text-green-800' : "text-grey-500"} `}>{ onlineUsers.includes(user._id) ? 'Online' : 'Offline'}</span>
                </div>
              </div>
              <div className={ `w-[20px] lg:w-[24px] aspect-square rounded-full bg-sky-900 flex items-center justify-center ${unseenMessages[user._id]>0?'':'hidden'} ` }>
                <p className='small-semibold text-sky-50 '>{unseenMessages[user._id]}</p>
              </div>
              </div>
            ))
           }
      </section>
    </div>
  )
}

export default Sidebar
