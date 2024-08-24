import { useState } from "react";
import { FaStar, FaUser } from "react-icons/fa";
import { Container, DropdownButton, Dropdown } from "react-bootstrap";
import FormOpiniones from "./FormOpiniones";

const Opiniones = () => {
  const [filtroCalificacion, setFiltroCalificacion] = useState(null);

  const opiniones = [
    {
      usuario: "Juan567",
      calificacion: 4,
      opinion:
        "¡Uno de los mejores profesionales, me ayudo a superar todos mis examenes!",
    },
    {
      usuario: "María_Reyes",
      calificacion: 5,
      opinion: "El mejor profesional.",
    },
    {
      usuario: "Nahiara111",
      calificacion: 4,
      opinion: "La pasé de maravilla, y aprendi sobre todo. 100% recomendado.",
    },
    {
      usuario: "Messi_Goat",
      calificacion: 5,
      opinion:
        "Me ayudo a aprobar mi materia cuando estaba en las inferiores del barza.",
    },
    {
      usuario: "Pedrito",
      calificacion: 3,
      opinion:
        "Buen Profe, pero podría mejorar en algunos aspectos como tomar mate en clases.",
    },
    {
      usuario: "Lauraaa",
      calificacion: 2,
      opinion: "No me gustó mucho no tener un enchufe para cargar el celu.",
    },
    {
      usuario: "Ana_Anana",
      calificacion: 1,
      opinion: "Me bocharon.",
    },
    {
      usuario: "Gustavo97",
      calificacion: 5,
      opinion:
        "Sinceramente es un profe totalmente agradable y sabe lo que hace.",
    },
    {
      usuario: "Emilia☺",
      calificacion: 4,
      opinion: "Muy buen profe, lo recomiendo para universitarios!.",
    },
    {
      usuario: "Hernán_malo",
      calificacion: 3,
      opinion: "La pasé bien, a pesar de no dejarte usar el celu.",
    },
    {
      usuario: "Spinetta",
      calificacion: 5,
      opinion: "Solo tengo para decir que este profe es fabuloso.",
    },
  ];

  const handleFiltrarPorCalificacion = (calificacion) => {
    setFiltroCalificacion(calificacion);
  };

  const opinionesFiltradas = filtroCalificacion
    ? opiniones.filter((opinion) => opinion.calificacion === filtroCalificacion)
    : opiniones;  

  return (
    <Container className="containerOpinions mt-5 px-0">
     
      <div className="row gap-3 gap-lg-0 gy-md-2">
        <article className="order-1 mt-3 mt-md-4">
        <h3 className="mb-md-4 opiniones-titulo">
        ⤷ Opiniones sobre el profesional 💭
      </h3>
      <div className="boton-container">
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
        <article className="col-lg-7 col-xl-8 d-flex flex-column gap-2 order-1 ">
      
          {/* {opinionesFiltradas.map((opinion, index) => (
            <div
              key={index}
              className="cardOpinion w-100 d-flex flex-column gap-3 border rounded-2 p-3"
            >
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center gap-2">
                  <span>
                    <FaUser className="fs-4" />
                  </span>
                  <p className="fw-bold mb-0">{opinion.usuario}</p>
                </div>
                <div className="calificacion mb-2">
                  {[...Array(opinion.calificacion)].map((_, index) => (
                    <FaStar key={index} color="gold" className="fs-5"/>
                  ))}
                </div>
              </div>

              <p className="mb-0">{opinion.opinion}</p>
            </div>
          ))} */}
        </article>
        <article className="order-lg-1 col-lg-5 col-xl-4">
        <h3>Deja tu reseña</h3>
         <FormOpiniones></FormOpiniones>
        </article>
      </div>
    </Container>
  );
};

export default Opiniones;
