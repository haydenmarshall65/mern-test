import { useState } from 'react'
import Navbar from './components/NavBar'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <div className="h-[100vh] w-[100vw]">
        <Navbar />
        <Outlet />
      </div>
    </>
  )
}

export default App
