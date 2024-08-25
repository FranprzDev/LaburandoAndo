import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import logo from "../../../img/Logo.jpg";
import "../styles/detallePublicacion.css";
import { FaStar } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { FaWhatsapp } from "react-icons/fa";
import { Container } from "react-bootstrap";
import Opiniones from "../components/Opiniones";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPost } from "../../../slices/actions/postsActions";

const DetallePublicacion = () => {
  const profesional = useSelector((state) => state.posts.post);
  const { id } = useParams();
  const dispatch = useDispatch();

  console.log(profesional);

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  return (
    <>
      <div className="w-100 py-3 d-md-none border-0 rounded-0 fixed-bottom px-2 containerBtnWpp">
        <div className="d-flex flex-column justify-content-center align-items-center py-0">
          <Button
            as={Link}
            to={`https://wa.me/${profesional?.worker.phone}?text=Hola%20${profesional?.worker.fullname}%20solicito%20tu%20servicio.`}
            target="_blank"
            variant="success"
            className="btnWpp w-100 d-flex align-items-center justify-content-center"
          >
            <FaWhatsapp className="me-2 fs-5" />
            <span> Contactar</span>
          </Button>
        </div>
      </div>
      <Container className="mainSection py-3 py-md-4 pt-lg-4 pb-lg-5">
        <section className="d-flex flex-column align-items-center align-items-md-start flex-md-row gap-2 gap-lg-5 containerDetail pt-2 ">
          <Card className="me-3 mt-3 cardDetail">
            <div>
              <Card.Body className="d-flex flex-column justify-content-center align-items-center pb-0 pb-md-2">
                <Image src={logo} roundedCircle className="imgProfessional " />
                <Card.Title className="mb-0 fw-bold">
                  {profesional?.worker.fullname}
                </Card.Title>
                <Card.Text className="text-center">
                  {profesional?.worker.address}
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted d-flex gap-3">
                  <div className=" d-flex justify-content-center">
                    <FaStar className="me-2 text-warning fs-5" />
                    <p>4.0</p>
                  </div>
                  <p>10 Valoraciones</p>
                </Card.Subtitle>
                <Button
                  as={Link}
                  to={`https://wa.me/${profesional?.worker.phone}?text=Hola%20${profesional?.worker.fullname}%20solicito%20tu%20servicio.`}
                  target="_blank"
                  variant="success"
                  className="d-none d-md-block btnWpp w-100 d-flex align-items-center justify-content-center"
                >
                  <FaWhatsapp className="me-2 fs-5" />
                  <span> Contactar</span>
                </Button>
              </Card.Body>
            </div>
          </Card>

          <div className="mt-3 mt-md-5 w-100">
            <div className=" w-100">
              {profesional?.category.map((category) => (
                <span className=" px-5 py-2 rounded-2 category opacity-50 text-white">
                  {category?.name}
                </span>
              ))}
            </div>
            <h2 className="mt-3 fw-bold">{profesional?.title}</h2>
            <p className="fw-bold mt-md-3 mb-0 mb-md-1">
              Descripción del anuncio
            </p>
            <p className="mb-1">{profesional?.description}</p>
            <p className="fw-bold mb-0">Precio por hora </p>
            <p>${profesional?.pricePerHour}</p>
          </div>
        </section>
        <Opiniones reviews={profesional?.reviews} />
      </Container>
    </>
  );
};

export default DetallePublicacion;
