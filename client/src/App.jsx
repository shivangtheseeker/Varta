import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home, Login, Profile } from './pages'
import {Toaster} from "react-hot-toast"
import { AuthContext } from '../context/AuthContext'

function App() {
  const {authUser} = useContext(AuthContext)
  return (
    <div 
    className="bg-[url('/Sky-img.jpg')] bg-cover"
    >
      <Toaster/>
      <Routes>
        <Route path = '/' element={ authUser ? <Home/> : <Navigate to="/login"/>} />
        <Route path = '/login' element={ !authUser ? <Login/> : <Navigate to ="/"/>} />
        <Route path = '/profile' element={ authUser ? <Profile/> : <Navigate to="/login"/>} />
      </Routes>
    </div>
  )
}

export default App

