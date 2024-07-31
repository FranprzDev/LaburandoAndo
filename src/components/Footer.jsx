import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className='bg-body-tertiary'>
      <Container fluid="md">
        <Row>
            <Col md={3}>
            <Link to={'/'} className='navbar-brand'><h5 className='display-6'>LaburandoAndo</h5></Link>
            </Col>
            <Col md={3}>
            <h5>Sobre Nosotros</h5>
            <ul className='list-group'>
                <Link to={'/'} className='list-group-item border-0 bg-body-tertiary'>¿Quienes Somos?</Link>
                <Link to={'/'} className='list-group-item border-0 bg-body-tertiary'>Nuestros Valores</Link>
            </ul>
            <article className='mt-2'>
                <h5>Siguenos en nuestras redes</h5>
                <Link><FaFacebook className='fs-1 text-primary'/></Link>
                <Link><FaInstagramSquare className='fs-1 ms-2 instagramLogo'/></Link>
            </article>
            </Col>
            <Col md={3}>
            
            </Col>
            <Col md={3}>
            
            </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
