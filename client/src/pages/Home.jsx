import React, { useContext, useState } from 'react'
import { ChatContainer, ChatMedia, Navbar, Sidebar } from '../components'
import { ChatContext } from '../../context/ChatContext';

const Home = () => {
  const {selectedUser} = useContext(ChatContext)
  const [information, setInformation] = useState(false);

  return (
    <div className='container'>
      <div className={`overflow-hidden grid gap-[20px] relative h-full ${
        selectedUser
         ? 'grid-cols-1 w-full h-full max-w-[1536px] md:grid-cols-[5fr_3fr] xl:grid-cols-[1fr_7fr_4fr]'
         : 'xl:grid-cols-[1fr_11fr]'
        }`}>
        <Navbar/>
        <ChatContainer information={information} setInformation={setInformation} />
        <Sidebar information={information}/>
        <ChatMedia information={information} setInformation={setInformation}/>
        
      </div>
    </div>
  )
}

export default Home
