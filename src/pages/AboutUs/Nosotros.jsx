import "./nosotros.css";
import { fundadores } from "../../helpers/fundadores";
import CardNosotros from "./components/CardNosotros";

const Nosotros = () => {
  return (
    <section className="pb-5">
      <div className="container-fluid py-5 sectionBanner bannerUs">
        <div className="row justify-content-around gy-3 px-5 py-xxl-5 bannerContent">
          <h1 className="fw-bold">¿Quiénes somos?</h1>
          <div className="col-lg-6 align-items-center mt-4 text-start">
            <h2 className="negrita text-center  fw-bold">
              Somos un equipo dedicado a conectar profesionales independientes
              con sus futuros clientes, beneficiando al crecimiento mutuo.
            </h2>
          </div>

          <div className="d-none d-md-block col-lg-3 justify-content-center align-items-center  text-start">
            <h2 className="negrita text-center fw-bold">
              Impulsando el trabajo independiente y el desarrollo profesional.
            </h2>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <h3 className="mb-3 mb-md-4 text-center">Nuestros Principios</h3>
        <div className="row g-3">
          <div className="col-md-6">
            <div className="card py-3 shadow">
              <div className="card-body">
                <p className="card-title fw-bold mb-3">Misión</p>
                <p className="card-text">
                  Nuestra misión es conectar a profesionales independientes con
                  personas que buscan sus servicios, creando oportunidades para
                  que ambos prosperen.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card py-3 shadow">
              <div className="card-body">
                <p className="card-title fw-bold mb-3">Visión</p>
                <p className="card-text">
                  Nuestra visión es ser la plataforma líder que facilite el
                  acceso a servicios profesionales independientes, empoderando a
                  trabajadores y clientes por igual.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 ">
          <h3 className="mb-3 mb-md-4 text-center">Fundadores</h3>
          <div className="d-flex flex-wrap gap-5 justify-content-center">
            {fundadores.map((fundador) => (
              <CardNosotros key={fundador.id} fundador={fundador} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
