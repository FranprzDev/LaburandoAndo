import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-body-tertiary border-top pt-5">
      <Container fluid className="text-center text-md-start">
        <Row className="gy-2 gy-md-3 gx-5 justify-content-md-center">
          <Col className="text-center mb-3 mb-md-0" md={12} lg={3} xl={3}>
            <Link to={"/"} className="navbar-brand">
              <h5 className="logo">LaburandoAndo</h5>
            </Link>
          </Col>
          <Col className="text-center text-lg-start" md={4} lg={3}>
            <div className="d-flex flex-column ">
              <h5>Sobre Nosotros</h5>
              <ul className="list-group">
                <Link
                  to={"/nosotros"}
                  className="text-dark mb-1"
                >
                  ¿Quiénes Somos?
                </Link>
                <Link
                  to={"/"}
                  className="text-dark mb-1"
                >
                  Nuestros Valores
                </Link>
              </ul>
              <article className="mt-lg-5 mt-md-3">
                <h5>Síguenos en nuestras redes</h5>
                <Link to={'/*'}>
                  <FaFacebook className="fs-1 text-primary" />
                </Link>
                <Link to={'/*'}>
                <FaSquareInstagram className="fs-1 iconInstagram"/>
                </Link>
              </article>
            </div>
          </Col>
          <Col
            className="text-center text-lg-start "
            md={4}
            lg={3}
          >
            <div>
              <h5>Términos y Condiciones</h5>
              <ul className="list-group">
                <Link to={"/politicas"} className="text-dark mb-1">
                  Políticas de privacidad
                </Link>
                <Link to={"/condiciones-profesional"} className="text-dark mb-1">
                  Condiciones de uso para profesionales
                </Link>
                <Link to={"/condiciones-cliente"} className="text-dark mb-1">
                  Condiciones de uso para clientes
                </Link>      
              </ul>
            </div>
          </Col>
          <Col
            className="mt-3 text-center text-lg-start "
            md={4}
            lg={3}
          >
            <div>
              <h5>Asistencia</h5>
              <ul className="list-group">
                <Link
                  to={"/"}
                  className="text-dark mb-1"
                >
                  ¿Necesitas Ayuda?
                </Link>
                <Link
                  to={"/contacto"}
                  className="text-dark"
                >
                  Contacto
                </Link>
              </ul>
            </div>
          </Col>
        </Row>
        <h5 className="text-center mt-4 mt-md-5">
          LaburandoAndo. &copy;Todos los Derechos Reservados. 2024.
        </h5>
      </Container>
    </footer>
  );
};

export default Footer;
