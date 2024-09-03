import { Container } from "react-bootstrap";
import { IoAddSharp } from "react-icons/io5";

const PreguntasFrecuentes = () => {
  return (
    <div className="sectionFAQ py-5">
      <Container className="my-lg-5">
        <h3 className="fw-bold mb-4">FAQ - Preguntas Frecuentes</h3>
        <div className="accordion sectionFAQ" id="accordion">
          <article className="mb-2 border rounded-2">
            <button
              className="d-flex justify-content-between gap-2 px-1 px-md-2 px-lg-4 py-3 w-100 border-0 rounded-top-2 text-decoration-none text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              <span>
                ¿Cómo puedo registrarme como profesional independiente?
              </span>
              <span className="d-none iconAdd fw-bold d-md-flex align-items-center">
                <IoAddSharp />
              </span>
            </button>
            <div
              id="collapseOne"
              className="accordion-collapse collapse border-top"
              data-bs-parent="#accordion"
            >
              <div className="accordion-body">
                <span>
                Para registrarte como profesional independiente en LaburandoAndo, simplemente haz clic en el botón "Regístrate ahora" en la página principal. Luego, completa el formulario con tu información personal. Una vez registrado, podrás empezar a publicar tus anuncios de trabajo.
                </span>
              </div>
            </div>
          </article>
          <article className="mb-2 border rounded-2">
            <button
              className="d-flex justify-content-between gap-2 px-2 px-md-4 py-3 w-100 border-0 rounded-top-2  text-decoration-none text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <span>
              ¿Cómo puedo contactar a un profesional?
              </span>
              <span className="d-none iconAdd fw-bold d-md-flex align-items-center">
                <IoAddSharp />
              </span>
            </button>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse border-top"
              data-bs-parent="#accordion"
            >
              <div className="accordion-body">
                <span>
                Para contactar a un profesional, primero explora el catálogo de servicios en la plataforma. Cuando encuentres al profesional que se ajuste a tus necesidades, haz clic en el detalle de su anuncio para ver más información. Desde allí, podrás enviarle un mensaje directamente para coordinar el servicio.
                </span>
              </div>
            </div>
          </article>
          <article className="mb-2 border rounded-2">
            <button
              className="d-flex justify-content-between gap-2 px-2 px-md-4  py-3 w-100 border-0 rounded-top-2 text-decoration-none text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <span>
              ¿Es seguro contratar servicios a través de la aplicación?
              </span>
              <span className="d-none iconAdd fw-bold d-md-flex align-items-center">
                <IoAddSharp />
              </span>
            </button>
            <div
              id="collapseThree"
              className="accordion-collapse collapse border-top"
              data-bs-parent="#accordion"
            >
              <div className="accordion-body">
                <span>              
                Sí, LaburandoAndo se compromete a garantizar la seguridad de sus usuarios. Todos los profesionales registrados pasan por un proceso de verificación. Además, puedes revisar las reseñas de otros usuarios antes de contratar un servicio, lo que te permite tomar decisiones informadas.
                </span>
              </div>
            </div>
          </article>
          <article className="mb-2 border rounded-2">
            <button
              className="d-flex justify-content-between gap-2 px-2 px-md-4 py-3 w-100 border-0 rounded-top-2  text-decoration-none text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFor"
              aria-expanded="false"
              aria-controls="collapseFor"
            >
              <span>
              ¿Cómo puedo dejar una reseña sobre un profesional?
              </span>
              <span className="d-none iconAdd fw-bold d-md-flex align-items-center">
                <IoAddSharp />
              </span>
            </button>
            <div
              id="collapseFor"
              className="accordion-collapse collapse border-top"
              data-bs-parent="#accordion"
            >
              <div className="accordion-body">
                <span>
                Primero debes asegurarte de estar registrado y haber iniciado sesión en la aplicación. Luego, simplemente visita el anuncio del profesional y encontrarás la opción para calificar y dejar un comentario sobre tu experiencia. Tu opinión ayudará a otros usuarios a elegir al mejor profesional para sus necesidades.
                </span>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </div>
  );
};

export default PreguntasFrecuentes;
