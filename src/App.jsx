import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Layout from './Layout'
import React from 'react'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Menu from './Components/Menu/Menu'
import Fries from './Components/Fries/Fries'
import Burger from './Components/Burger/Burger'
import Wings from './Components/Wings/Wings'
import Pizza from './Components/Pizza/Pizza'
import Pasta from './Components/Pasta/Pasta'
function App() {

  return (
    <>
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/About" element={<About />} />
      
      <Route path="menu" element={<Menu />}>
        <Route path="burger" element={<Burger />} />
        <Route path="wings" element={<Wings />} />
        <Route path="fries" element={<Fries />} />
        <Route path="pizza" element={<Pizza />} />
        <Route path="pasta" element={<Pasta />} />
      </Route>
      
    </Route>
  </Routes>
</BrowserRouter>


    </>
  )
}

export default App
