import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Busca from '../../img/Busca.jpg'
import Contacto from '../../img/Contacto.jpg'
const EncontrarAnunciar = () => {
  return (
    <Container fluid>
      <h2 className='display-5 fw-bold'>¿Cómo funciona LaburandoAndo?</h2>
      <Row className='text-center'>
        <Col md={6}>
          <div>
            <img className='imgHome' src={Busca} alt="Buscar profesional" />
          </div>
          <h5>1. Busca</h5>
          <p className='fs-4'>Explora el catálogo de servicios profesionales independientes</p>
        </Col>
        <Col md={6}>
        <div>
            <img className='imgHome' src={Contacto} alt="Contactar profesional" />
          </div>
          <h5>2. Busca</h5>
          <p className='fs-4'>Contacta al profesional ideal según tus necesidades</p>
        </Col>
      </Row>
    </Container>
  )
}

export default EncontrarAnunciar
