import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Busca from "../../../img/home/Busca.jpg";
import Contacto from "../../..//img/home/Contacto.jpg";
import { Link } from "react-router-dom";
const EncontrarAnunciar = () => {
  return (
    <div className="sectionHowItWorks">
      <Container className="py-4 py-md-5 my-5">
        <h2 className="mb-2 mb-md-4 pb-lg-5 text-center text-lg-start">
          ¿Cómo funciona LaburandoAndo?
        </h2>
        <Row className="text-center mb-3 mb-md-4 mb-lg-5">
          <Col md={6} className="d-flex flex-column gap-2">
            <div>
              <img
                className="imgHome rounded-2"
                src={Busca}
                alt="Buscar profesional"
              />
            </div>
            <p className="mb-0 fw-medium">1. Busca</p>
            <p>Explora el catálogo de servicios profesionales independientes</p>
          </Col>
          <Col md={6} className="d-flex flex-column gap-2">
            <div>
              <img
                className="imgHome rounded-2"
                src={Contacto}
                alt="Contactar profesional"
              />
            </div>
            <p className="mb-0 fw-medium">2. Contacta</p>
            <p className="mb-0">
              Contacta al profesional ideal según tus necesidades
            </p>
          </Col>
        </Row>
        <div className="text-center">
          <Link to={"/profesionales"} className="btn text-light btnExplore border-0">
            Ver todos los profesionales
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default EncontrarAnunciar;
