import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <>
    <main className='w-full h-56  flex  bg-cyan-300  border-4 border-dotted border-cyan-950'>
    <section className='w-1/3 p-20 '>
     <h1 className='font-bold text-xl'>Muffins Cafe and grill</h1>
    </section>
    <section className='w-1/3 p-20 text-center '>
    <ul className='text-xl'>
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/About'}>About us</NavLink></li>
    <li><NavLink to={'/menu'}>Menu</NavLink></li>        
    </ul>
    </section>
    <section className='w-1/3 p-20 text-center'>
    <h1 className='capitalize text-2xl '>taste which you never forget</h1>
    </section>
    </main>
    </>
  )
}

export default Footer