import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import RegistroPasoUno from '../components/RegistroPasoUno'
import DetalleDelProfesional from '../pages/DetalleDelProfesional'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path='/detalleDelProfesional' element={<DetalleDelProfesional/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/registropasouno' element={<RegistroPasoUno></RegistroPasoUno>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default AppRouter
