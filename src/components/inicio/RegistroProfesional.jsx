import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Profesional from "../../img/Profesional.jpg";
import { Link } from "react-router-dom";
const RegistroProfesional = () => {
  return (
    <Container fluid className="text-center px-0 sectionRegister">
      <Row className="gap-lg-5">
        <Col md={6} className="d-none d-md-block">
          <div className="w-100">
            <img
              className="imgRegister img-fluid"
              src={Profesional}
              alt="Imagen de alguien usando una notebook"
            />
          </div>
        </Col>
        <Col
          md={6}
          lg={5}
          className="d-flex justify-content-center align-items-center mb-xl-5 py-5"
        >
          <div className="d-flex flex-column gap-md-2 gap-xxl-3 align-items-center">
            <h2 className="fw-bold">
              ¿Eres un profesional independiente? ¡Llega a más clientes con
              LaburandoAndo!
            </h2>
            <p>Regístrate y ofrece tus servicios</p>
            <Link className="btn btnRegister " to={"/auth/register"}>Regístrate Ahora</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistroProfesional;
