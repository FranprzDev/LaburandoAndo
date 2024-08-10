import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import logo from "../img/Logo.jpg";
import "../styles/detallePublicacion.css";
import { FaStar } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { FaWhatsapp } from "react-icons/fa";
import { Container } from "react-bootstrap";
import Opiniones from "../components/Opiniones";
import { useParams } from "react-router-dom";

const DetalleDelProfesional = () => {
  const {id} = useParams()
  console.log(id)
  return (
    <Container>
      <section className="d-flex flex-column align-items-center align-items-lg-start flex-lg-row mb-4 gap-2 gap-lg-5 contenedor-detalle pt-2 py-lg-4">
        <Card className="me-3 mt-3 card-detalle">
          <div>
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <Image src={logo} roundedCircle className="img-circulo-card " />
              <Card.Title className="mb-0">Juan Perez</Card.Title>
              <Card.Text>Yerba Buena, Tucumán</Card.Text>
              <Card.Subtitle className="mb-2 text-muted">
                <div className=" d-flex">
                  <FaStar className="me-2 text-warning fs-5" />
                  <p>4.0</p>
                </div>
                <p>10 Valoraciones</p>
              </Card.Subtitle>
              <Button
                variant="success"
                className="w-100 d-flex align-items-center justify-content-center"
              >
                <FaWhatsapp className="me-2 fs-5" />
                <span> Contactar</span>
              </Button>
            </Card.Body>
          </div>
        </Card>
        <div className="mt-lg-5 w-100">
            <div className="  mt-3 text-center text-md-start w-100">
              <span className=" px-5 py-2 rounded-2 category opacity-50 text-white">
                Profesor particular
              </span>
            </div>
          <h2 className="my-3">Clases Particulares de inglés en línea</h2>
          <p className="fw-medium fs-5 mt-md-3 mb-0 mb-md-1">Descripción del anuncio</p>
          <p className="pb-lg-3">
            Hola me llamo Juan Perez y tengo 25 años.
            Brindo clases a alumnos que deseen capacitarse en inglés
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe animi voluptatem nisi reprehenderit accusantium consequuntur hic harum voluptate culpa odit ab necessitatibus quia, consectetur at, maiores a deserunt fuga eius.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde repellat illo ea quaerat corrupti, aliquid suscipit provident totam a delectus molestias ducimus. Minima asperiores officia exercitationem dolorem sapiente eligendi enim.
          </p>
          <Opiniones />
        </div>
      </section>
    </Container>
  );
};

export default DetalleDelProfesional;
