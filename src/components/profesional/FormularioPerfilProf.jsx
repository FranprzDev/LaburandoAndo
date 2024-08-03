import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormularioPerfilProf = () => {
  return (
    <Form className="formProfile mt-5">
      <Form.Group className="mb-3">
        <Form.Label htmlFor="name">Nombre y Apellido:</Form.Label>
        <Form.Control
          type="text"
          id="name"
          className="border-start-0 border-end-0 border-top-0 border-bottom rounded-0"
          title="tu nombre y apellido"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="email">Email:</Form.Label>
        <Form.Control
          type="email"
          id="email"
          className="border-start-0 border-end-0 border-top-0 border-bottom rounded-0"
          title="tu dirección de correo electrónico"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="ubication">Ubicación</Form.Label>
        <Form.Control
          type="text"
          id="ubication"
          className="border-start-0 border-end-0 border-top-0 border-bottom rounded-0"
          title="tu ubicación actual"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="wpp">Número de WhatsApp</Form.Label>
        <Form.Control
          type="text"
          id="wpp"
          className="border-start-0 border-end-0 border-top-0 border-bottom rounded-0"
          title="tu número de WhatsApp"
        />
      </Form.Group>
      <div>
        <Button variant="primary" type="submit" className="px-5">
          Editar Mis datos
        </Button>
      </div>
    </Form>
  );
};

export default FormularioPerfilProf;
