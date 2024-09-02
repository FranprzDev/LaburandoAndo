import { Button, Col, Container, Row } from "react-bootstrap";
import Profesional from "../../../img/home/Profesional.webp";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const RegistroProfesional = () => {
  const user = useSelector((state) => state.auth.user);

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
            <h2 className="fw-bold">¿Eres un profesional independiente?</h2>
            <h3>¡Regístrate, ofrece tus servicios y llega a más personas!</h3>
            <Link
              className={`${user ? "d-none" : "btn btnRegister"}`}
              to={"/auth/register"}
            >
              Registrarme
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistroProfesional;
