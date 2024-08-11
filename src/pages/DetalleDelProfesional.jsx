import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import logo from "../img/Logo.jpg";
import "../styles/detallePublicacion.css";
import { FaStar } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { FaWhatsapp } from "react-icons/fa";
import { Container } from "react-bootstrap";
import Opiniones from "../components/Opiniones";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPost } from "../slice/postsSlice";

const DetalleDelProfesional = () => {
  const profesional = useSelector((state) => state.posts.post);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost(id));
    console.log(profesional);
  }, [id]);
  
  console.log(id);

  return (
    <Container>
      <section className="d-flex flex-column align-items-center align-items-lg-start flex-lg-row mb-4 gap-2 gap-lg-5 contenedor-detalle pt-2 py-lg-4">
        <Card className="me-3 mt-3 card-detalle">
          <div>
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <Image src={logo} roundedCircle className="img-circulo-card " />
              <Card.Title className="mb-0">
                {profesional?.worker.fullname}
              </Card.Title>
              <Card.Text>{profesional?.worker.address}</Card.Text>
              <Card.Subtitle className="mb-2 text-muted">
                <div className=" d-flex justify-content-center">
                  <FaStar className="me-2 text-warning fs-5" />
                  <p>4.0</p>
                </div>
                <p>10 Valoraciones</p>
              </Card.Subtitle>
              <Button
                as={Link}
                to={`https://wa.me/${profesional?.worker.phone}?text=Hola%20${profesional?.worker.fullname}%20solicito%20tu%20servicio%20de%20${profesional?.category[0].name}`}
                target="_blank"
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
              {profesional?.category[0].name}
            </span>
          </div>
          <h2 className="my-3">{profesional?.title}</h2>
          <p className="fw-medium fs-5 mt-md-3 mb-0 mb-md-1">
            Descripción del anuncio
          </p>
          <p className="pb-lg-3">{profesional?.description}</p>
          <Opiniones />
        </div>
      </section>
    </Container>
  );
};

export default DetalleDelProfesional;
