import React from 'react'
import './css/Style.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
      
<header class="flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm py-4">
  <nav class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
    <NavLink to={"/"} className="flex-none text-xl font-semibold dark:text-white focus:outline-none focus:opacity-80" aria-label="Brand">REENA SHALU</NavLink> 
    <div class="flex flex-row items-center gap-5 mt-5 pb-2 overflow-x-auto sm:justify-end sm:mt-0 sm:ps-5 sm:pb-0 sm:overflow-x-visible [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
      <NavLink to={"/"} className="dark:text-white hover:underline">Home</NavLink> 
      <NavLink to={"/About"} className="dark:text-white hover:underline">About</NavLink>  
      <NavLink to={"/Service"} className="dark:text-white hover:underline">Service</NavLink>
      <NavLink to={"/Projects"} className="dark:text-white hover:underline">Projects</NavLink> 
      <NavLink to={"/Contact"} className="dark:text-white hover:underline">Contact</NavLink>
    </div>
  </nav>
</header>

  )
}

export default Navbar