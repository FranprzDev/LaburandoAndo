import React from "react";
import { Container } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const SoporteProfesional = () => {
  return (
    <section className="mt-3 container-fluid">
      

      {/* formualario de contacto con el profesional */}
      <article className="container">
        <div className="py-4">
          <h1 className="text-center">
            "¿Tienes Alguna Consulta?
            <br />
            ¡Estamos Aquí Para Ayudarte!"
          </h1>
        </div>

        <Form>
          <FloatingLabel
            controlId="floatingInput"
            label="Correo Electrónico"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              required
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingTextarea"
            label="Comentarios"
            className="mb-3"
          >
            <Form.Control as="textarea" placeholder="Leave a comment here" />
          </FloatingLabel>

          <div className="py-2 text-end">
            <Button
              type="submit"
              className="px-3 px-md-5 py-2 btnPost rounded-2 text-white border-0"
            >
              Enviar Consulta
            </Button>
          </div>
        </Form>
      </article>
    </section>
  );
};

export default SoporteProfesional;
