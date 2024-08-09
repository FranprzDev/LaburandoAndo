import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { IoPersonCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to={'/'} className='navbar-brand display-6'><h5 className='display-6'>LaburandoAndo</h5></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to={'/'} className='nav-link'>Home</Link>
            <Link className='nav-link' to={'/profesionales'}>Profesionales</Link>
            <Link className='btn btn-Profesional' to={'/register'}>Anúnciate como Profesional</Link>
            <Link className='nav-link' to={'/login'}><IoPersonCircleOutline className='mx-1'/>Ingresar</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu
