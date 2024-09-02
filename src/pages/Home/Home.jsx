import { Container, Row, Col } from "react-bootstrap";
import Educacion from "../../img/home/Educacion.webp";
import Electricista from "../../img/home/Electricista.webp";
import Fotografo from "../../img/home/Fotografo.webp";
import Trainer from "../../img/home/Trainer.webp";
import EncontrarAnunciar from "./components/EncontrarAnunciar";
import RegistroProfesional from "./components/RegistroProfesional";
import PreguntasFrecuentes from "./components/PreguntasFrecuentes";
import { Link } from "react-router-dom";
import "./styles/home.min.css";

const Home = () => {
  return (
    <section className="mainSection d-flex flex-column ">
      <Container fluid className="py-3 py-md-5 sectionBanner">
        <Row className="mb-3 justify-content-md-center gy-3">
          <Col md={12} lg={5} className="text-center d-flex flex-column pt-3 pt-lg-5 mt-xl-5">
            <h1>
              Encuentra servicios de profesionales independientes
            </h1>
            <p className="mt-lg-4 mb-2">
              Encuentra fácilmente el profesional que necesitas
            </p>
            <div>
              <Link
                to={"/profesionales"}
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
