import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import RegistroPasoUno from '../components/RegistroPasoUno'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/registropasouno' element={<RegistroPasoUno></RegistroPasoUno>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default AppRouter
