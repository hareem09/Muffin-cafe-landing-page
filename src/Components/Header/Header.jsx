import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <>
      <nav className='w-full h-20 border-4 border-cyan-200 border-dashed flex justify-around bg-cyan-900'>
        <div className="logo flex p-4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEY02A_WxqiU2LbtG2rLe5gOxUqFWv5gnIMA&s" alt="" />
        <NavLink to={''} className={'text-xl text-white font-bold'}>Muffin cafe and grill</NavLink>
        </div>
        <div className="links">
            <ul  className='flex gap-14 p-5 text-lg font-bold text-white'>
                <li><NavLink to={'/'} className={({isActive})=>{
                 return isActive ? "text-pink-300" : "text-white"
                }}>Home</NavLink></li>
                <li><NavLink to={'/About'} className={({isActive})=>{
                 return isActive ? "text-pink-300" : "text-white"
                }}>About us</NavLink></li>
                <li><NavLink to={'/menu'} className={({isActive})=>{
                  return isActive ? "text-pink-300" : "text-white"
                }}>Menu</NavLink></li>
                
                
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Header