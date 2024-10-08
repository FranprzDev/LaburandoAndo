import "../styles/min/detallePublicacion.min.css";
import { Container, Button } from "react-bootstrap";
import Opiniones from "../components/Opiniones";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPost } from "../../../slices/actions/postsActions";
import CardProfesional from "../components/CardProfesional";
import { FaWhatsapp } from "react-icons/fa";
import useAlert from "../../../hooks/useAlertHook";
import { promedioValoracionDetalle } from "../../../helpers/min/promedioValoracion.min.js";
import { convertirFecha } from "../../../helpers/min/convertirFecha.min.js";

const DetallePublicacion = () => {
  const profesional = useSelector((state) => state.posts.post);
  const userLogeado = useSelector((state) => state.auth.user);
  const { id } = useParams();
  const dispatch = useDispatch();
  const reviews = profesional?.reviews
    ? profesional.reviews.map((review) => review.stars)
    : [];
  const promedio = promedioValoracionDetalle(reviews);

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  useEffect(() => {
    dispatch(getPost(id));
  }, [profesional]);

  const { autoCloseAlert } = useAlert();

  const fecha = convertirFecha(profesional?.createdAt);

  const handleWhatsApp = () => {
    if (userLogeado) {
      const message = `Hola ${profesional?.worker.fullname}, solicito tu servicio de ${profesional?.title} ${window.location.href}`;
      const phone = profesional?.worker.phone;
      const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappUrl, "_blank");
    } else {
      autoCloseAlert(
        "Debes iniciar sesión para contactar por WhatsApp",
        "warning"
      );
    }
  };

  return (
    <>
      <div className="container mt-3">
        <nav aria-label="breadcrumb container">
          <ol className="breadcrumb">
            <Link className="breadcrumb-item" to={"/profesionales"}>
              Profesionales
            </Link>
            <li className="breadcrumb-item text-primary">
              {profesional?.worker?.fullname}
            </li>
          </ol>
        </nav>
      </div>
      <div className="w-100 d-md-none border-0 rounded-0 fixed-bottom px-2 containerBtnWpp">
        <div className="d-flex flex-column justify-content-center align-items-center py-0">
          <Button
            onClick={handleWhatsApp}
            variant="success"
            className="btnWpp w-100 d-flex align-items-center justify-content-center"
          >
            <FaWhatsapp className="me-2 fs-5" />
            <span> Contactar</span>
          </Button>
        </div>
      </div>
      <Container className="mainSection pb-lg-5">
        <section className="d-flex flex-column align-items-center align-items-md-start flex-md-row gap-1 gap-lg-5 containerDetail pt-2 ">
          <CardProfesional
            profesional={profesional}
            handleWhatsApp={handleWhatsApp}
            promedio={promedio}
          ></CardProfesional>
          <div className="text-center d-block d-md-none">
            <p className="mb-0">
              <span className="fw-bold">Publicado:</span> {fecha}
            </p>
          </div>
          <div className="mt-3 mt-lg-3 mt-xl-5 w-100">
            <div className=" w-100">
              {profesional?.category.map((category) => (
                <span
                  key={category?.name}
                  className=" px-5 py-2 rounded-2 category opacity-50 text-white"
                >
                  {category?.name}
                </span>
              ))}
            </div>
            <h2 className="mt-3 fw-bold">{profesional?.title}</h2>
            <p className="fw-bold mt-md-3 mb-0 mb-md-1">
              Descripción del anuncio
            </p>
            <p className="mb-1">{profesional?.description}</p>
            <p className="mb-0">
              <span className="fw-bold">Costo</span>{" "}
              <small>&#40;Consultar&#41;</small>
            </p>
            <p className="mb-0">${profesional?.pricePerHour} </p>
            <small>
              &#40;A tener en cuenta: El costo puede variar dependiendo del tipo
              de servicio, por hora o por trabajo&#41;.
            </small>
          </div>
        </section>
        <div className="mt-3 d-none d-md-block">
          <p className="mb-0">
            <span className="fw-bold">Publicado:</span> {fecha}
          </p>
        </div>
        <Opiniones reviews={profesional?.reviews} />
      </Container>
    </>
  );
};

export default DetallePublicacion;
