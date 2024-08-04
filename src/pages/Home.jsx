import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Educacion from "../img/Educacion.jpg";
import Electricista from "../img/Electricista.jpg";
import Fotografo from "../img/Fotografo.jpg";
import Trainer from "../img/Trainer.jpg";
import EncontrarAnunciar from "../components/inicio/EncontrarAnunciar";
import RegistroProfesional from "../components/inicio/RegistroProfesional";
import PreguntasFrecuentes from "../components/inicio/PreguntasFrecuentes";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="mainSection">
      <Container fluid className="mt-md-5">
        <Row className="mb-3">
          <Col md={12} lg={6} className="text-center">
            <h1>
              Encuentra servicios de profesionales independientes en
              LaburandoAndo
            </h1>
            <p className="mt-4">
              Encuentra fácilmente el profesional que necesitas
            </p>
            <Link
              to={"/"}
              className="btn text-light border-0 btn-Explorar mt-4"
            >
              Explorar
            </Link>
          </Col>
          <Col
            md={12}
            lg={6}
            className="contenedorImgBanner d-none d-md-inline"
          >
            <Row className="text-center mt-md-3 mt-lg-0 bg-body-tertiary">
              <Col md={6} lg={6} className="mb-3">
                <div>
                  <img
                    src={Educacion}
                    alt="Educacion Web"
                    className="imgBanner"
                  />
                </div>
              </Col>
              <Col md={6} lg={6}>
                <div>
                  <img
                    src={Electricista}
                    alt="Electricista"
                    className="imgBanner"
                  />
                </div>
              </Col>
              <Col md={6} lg={6}>
                <div>
                  <img src={Fotografo} alt="Fotografo" className="imgBanner" />
                </div>
              </Col>
              <Col md={6} lg={6}>
                <div>
                  <img src={Trainer} alt="Trainer" className="imgBanner" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <EncontrarAnunciar />
      <RegistroProfesional />
      <PreguntasFrecuentes />
    </section>
  );
};

export default Home;
