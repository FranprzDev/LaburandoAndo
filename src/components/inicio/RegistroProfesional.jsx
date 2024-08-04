import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Profesional from "../../img/Profesional.jpg";
import { Link } from "react-router-dom";
const RegistroProfesional = () => {
  return (
    <Container fluid className="text-center my-5">
      <Row>
        <Col md={6}>
          <div>
            <img
              className="imgRegistro"
              src={Profesional}
              alt="Imagen de alguien usando una notebook"
            />
          </div>
        </Col>
        <Col
          md={6}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <h3 className="fw-bold">
            ¿Eres un profesional independiente? ¡Llega a más clientes con
            LaburandoAndo!
          </h3>
          <p>Regístrate y ofrece tus servicios</p>
          <Link className="btn btnRegistrar mt-3">Regístrate Ahora</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistroProfesional;
