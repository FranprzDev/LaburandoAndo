import { Container, DropdownButton, Dropdown } from "react-bootstrap";
import FormOpiniones from "./FormOpiniones";
import { useSelector } from "react-redux";
import ListaOpiniones from "./ListaOpiniones";
import { useState } from "react";

const Opiniones = () => {
  const profesional = useSelector((state) => state.posts.post);
  const userLogeado = useSelector((state) => state.auth.user);

  const [stars, setStars] = useState(null);

  const handleFiltrarPorCalificacion = (stars) => {
    setStars(stars);
  };

  const opinionesFiltradas = stars
    ? profesional?.reviews.filter(
        (review) => review.stars === stars
      )
    : profesional?.reviews;

  return (
    <Container className="containerOpinions mt-5 px-0">
      <div className="row gap-3 gap-lg-0 gy-md-2">
        <article className="order-1 mt-3 mt-md-4">
          <h3 className="mb-md-4 opiniones-titulo">
            ⤷ Opiniones sobre el profesional 💭
          </h3>
          <div
            className={`${
              profesional?.reviews && profesional?.reviews.length > 0
                ? "d-block"
                : "d-none"
            } boton-container`}
          >
            <DropdownButton
              id="dropdown-basic-button"
              title="Filtrar opiniones"
              className="boton-filtrar"
              variant=""
            >
              <Dropdown.Item onClick={() => handleFiltrarPorCalificacion(null)}>
                Mostrar Todas
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleFiltrarPorCalificacion(5)}>
                5 Estrellas
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleFiltrarPorCalificacion(4)}>
                4 Estrellas
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleFiltrarPorCalificacion(3)}>
                3 Estrellas
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleFiltrarPorCalificacion(2)}>
                2 Estrellas
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleFiltrarPorCalificacion(1)}>
                1 Estrellas
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </article>
        <article className="col-lg-7 col-xl-8  order-1">
          <ListaOpiniones
            userLogeado={userLogeado}
            opinionesFiltradas={opinionesFiltradas}
          ></ListaOpiniones>
        </article>
        <article className="d-block order-lg-1 col-lg-5 col-xl-4">
          <h3>Deja tu reseña</h3>
          <FormOpiniones></FormOpiniones>
        </article>
      </div>
    </Container>
  );
};

export default Opiniones;
