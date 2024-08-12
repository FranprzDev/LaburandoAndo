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
import "../styles/home.css";

const Home = () => {
  return (
    <section className="mainSection d-flex flex-column ">
      <Container fluid className="py-3 py-md-5 sectionBanner">
        <Row className="mb-3 justify-content-md-center gy-3">
          <Col md={12} lg={5} className="text-center d-flex flex-column pt-3 pt-lg-5">
            <h1>
              Encuentra servicios de profesionales independientes
            </h1>
            <p className="mt-lg-4 mb-2">
              Encuentra fácilmente el profesional que necesitas
            </p>
            <div>
              <Link
                to={"/"}
                className="btn btnExplore mt-lg-4"
              >
                Explorar
              </Link>
            </div>
          </Col>
          <Col md={12} lg={6} className="containerImgBanner d-none d-md-inline">
            <Row className="text-center justify-content-center g-3 mt-md-3 mt-lg-0 flex-wrap">
              <Col md={6} lg={5} className="text-end">
                <div>
                  <img
                    src={Educacion}
                    alt="Profesora enseñando frente a pizarrón"
                    title="Profesora enseñando frente a pizarrón"
                    className="imgBanner"
                  />
                </div>
              </Col>
              <Col md={6} lg={5} className="text-start">
                <div>
                  <img
                    src={Electricista}
                    alt="Electricista realizando su trabajo"
                    title="Electricista realizando su trabajo"
                    className="imgBanner"
                  />
                </div>
              </Col>
              <Col md={6} lg={5} className="text-end">
                <div>
                  <img
                    src={Fotografo}
                    alt="Fotógrafo en acción"
                    title="Fotógrafo en acción"
                    className="imgBanner"
                  />
                </div>
              </Col>
              <Col md={6} lg={5} className="text-start">
                <div>
                  <img
                    src={Trainer}
                    alt="Personal Trainer"
                    title="Personal Trainer dando clases"
                    className="imgBanner"
                  />
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
