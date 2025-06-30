import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Login, Profile } from './pages'

function App() {
  return (
    <div className="bg-[url('./assets/sky-img.jpg')] bg-cover">
      <Routes>
        <Route path = '/' element={<Home/>} />
        <Route path = '/login' element={<Login/>} />
        <Route path = '/profile' element={<Profile/>} />
      </Routes>
    </div>
  )
}

export default App

