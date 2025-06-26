import React, { useState } from 'react'
import { ChatContainer, ChatMedia, Navbar, Sidebar } from '../components'

const Home = () => {
  const [selectedUser, setSelectedUser] = useState(false);
  const [information, setInformation] = useState(false);

  return (
    <div className='container'>
      <div className={`overflow-hidden grid grid-cols-1 gap-[20px] relative h-[100%] ${selectedUser ? 'gridLayout' : 'xl:grid-cols-[1fr_11fr]'}`}>
        <Navbar/>
        <ChatContainer/>
        <section>
          <Sidebar/>
          <ChatMedia/>
        </section>
      </div>
    </div>
  )
}

export default Home
