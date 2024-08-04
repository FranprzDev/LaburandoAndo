import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Busca from "../../img/Busca.jpg";
import Contacto from "../../img/Contacto.jpg";
import { Link } from "react-router-dom";
const EncontrarAnunciar = () => {
  return (
    <Container fluid className="my-5">
      <h2 className="fw-bold pb-5">¿Cómo funciona LaburandoAndo?</h2>
      <Row className="text-center">
        <Col md={6}>
          <div>
            <img className="imgHome" src={Busca} alt="Buscar profesional" />
          </div>
          <p>1. Busca</p>
          <p className="fs-4">
            Explora el catálogo de servicios profesionales independientes
          </p>
        </Col>
        <Col md={6}>
          <div>
            <img
              className="imgHome"
              src={Contacto}
              alt="Contactar profesional"
            />
          </div>
          <p>2. Busca</p>
          <p className="fs-4">
            Contacta al profesional ideal según tus necesidades
          </p>
        </Col>
      </Row>
      <div className="text-center my-3">
        <Link to={"/"} className="btn text-light btn-Explorar fs-5 border-0">
          Ver todos los profesionales
        </Link>
      </div>
    </Container>
  );
};

export default EncontrarAnunciar;
