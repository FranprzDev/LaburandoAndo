import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-body-tertiary'>
      <Container fluid="md" className='text-center text-md-start'>
        <Row>
            <Col className='mt-3 mt-md-0' md={6} lg={3}>
            <Link to={'/'} className='navbar-brand'><h5 className='display-6'>LaburandoAndo</h5></Link>
            </Col>
            <Col className='mt-3 mt-md-0' md={6} lg={3}>
            <h5>Sobre Nosotros</h5>
            <ul className='list-group'>
                <Link to={'/nosotros'} className='list-group-item border-0 pt-0 ps-0 bg-body-tertiary'>¿Quiénes Somos?</Link>
                <Link to={'/'} className='list-group-item border-0 pt-0 ps-0 bg-body-tertiary'>Nuestros Valores</Link>
            </ul>
            <article className='mt-lg-5'>
                <h5>Síguenos en nuestras redes</h5>
                <Link><FaFacebook className='fs-1 text-primary'/></Link>
                <Link><FaInstagramSquare className='fs-1 ms-2 instagramLogo'/></Link>
            </article>
            </Col>
            <Col className='mt-3 mt-md-3 mt-lg-0' md={6} lg={3}>
            <h5>Términos y Condiciones</h5>
            <ul className='list-group'>
                <Link to={'/'} className='list-group-item border-0 pt-0 ps-0 bg-body-tertiary'>Políticas de privacidad</Link>
                <Link to={'/'} className='list-group-item border-0 pt-0 ps-0 bg-body-tertiary'>Condiciones de uso para profesionales</Link>
                <Link to={'/'} className='list-group-item border-0 pt-0 ps-0 bg-body-tertiary'>Condiciones de uso para clientes</Link>
            </ul>
            </Col>
            <Col className='mt-3 mt-md-3 mt-lg-0' md={6} lg={3}>
            <h5>Asistencia</h5>
            <ul className='list-group'>
                <Link to={'/'} className='list-group-item border-0 pt-0 ps-0 bg-body-tertiary'>¿Necesitas Ayuda?</Link>
                <Link to={'/'} className='list-group-item border-0 pt-0 ps-0 bg-body-tertiary'>Contacto</Link>
            </ul>
            </Col>
        </Row>
        <h5 className='text-center my-3'>LaburandoAndo. &copy; Todos los Derechos Reservados. 2024</h5>
      </Container>
    </footer>
  )
}

export default Footer;
