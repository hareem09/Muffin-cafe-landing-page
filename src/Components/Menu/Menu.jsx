import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
function Menu() {
  return (
    <>
    <main className='w-full min-h-screen bg-cyan-200'>
      <nav className='w-full h-20 border-2 border-cyan-200 border-dashed flex justify-around bg-cyan-900'>
      <div className="links">
            <ul className='flex gap-14 p-5 text-lg font-bold text-white'>
                <li><NavLink to={'/menu/burger'} className={({isActive})=>{
                  return isActive ? "text-pink-300" : "text-white"
                }}>Burger & Sandwiches</NavLink></li>
                <li><NavLink to={'fries'} className={({isActive})=>{
                  return isActive ? "text-pink-300" : "text-white"
                }}>Fries</NavLink></li>
                <li><NavLink to={'wings'} className={({isActive})=>{
                  return isActive ? "text-pink-300" : "text-white"
                }}>Wings</NavLink></li>
                <li><NavLink to={'pasta'} className={({isActive})=>{
                  return isActive ? "text-pink-300" : "text-white"
                }}>Pasta & Spaghetti</NavLink></li>
                <li><NavLink to={'pizza'} className={({isActive})=>{
                  return isActive ? "text-pink-300" : "text-white"
                }}>Pizza</NavLink></li>
            </ul>
         </div>
      </nav>
      <div className="menu-con flex gap-3">
      <Outlet/>
      </div>
    </main>
    </>
  )
}

export default Menu