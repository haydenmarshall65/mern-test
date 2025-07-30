import { useState } from 'react'
import Navbar from './components/NavBar'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-full p-6">
        <Navbar />
        <Outlet />
      </div>
    </>
  )
}

export default App
