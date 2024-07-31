import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Menu from '../components/Menu'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
