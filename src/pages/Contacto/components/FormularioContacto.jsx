import React from 'react'
import { Button, Form } from 'react-bootstrap'
import '../contacto.css'
const FormularioContacto = () => {
  return (
    <div className='border border-2 border-dark-subtle rounded-5 mb-5'>
      <Form className='p-4'>
    <h3>Contáctanos y pronto recibirás una respuesta</h3>
      <Form.Group className="mb-3" controlId="formNombreApellido">
        <Form.Label>Nombre y Apellido</Form.Label>
        <Form.Control type="email" placeholder="Ej: Juan Perez" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ej: juanperez@gmail.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control as="textarea" rows={5} placeholder="Contraseña" />
      </Form.Group>
      <div className='text-end'>
      <Button className='btnContacto w-25 border-0'type="submit">
        Enviar
      </Button>
      </div>
    </Form>
    </div>
  )
}

export default FormularioContacto
