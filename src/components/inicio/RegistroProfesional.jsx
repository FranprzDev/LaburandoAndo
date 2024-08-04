import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Profesional from '../../img/Profesional.jpg'
const RegistroProfesional = () => {
  return (
    <Container fluid className='text-center my-5'>
      <Row>
        <Col md={6}>
            <div>
                <img className='imgRegistro' src={Profesional} alt="" />
            </div>
        </Col>
        <Col md={6}>
            <h3 className='display-5 fw-bold'>¿Eres un profesional independiente? ¡Llega a más clientes con LaburandoAndo!</h3>
            <h4>Regístrate y ofrece tus servicios</h4>
            <Button className='btnRegistrar mt-3'>Regístrate Ahora</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default RegistroProfesional
