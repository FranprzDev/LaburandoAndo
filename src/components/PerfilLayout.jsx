import MenuProfesional from "./profesional/MenuProfesional";
import "../styles/perfilProfesional.css";

const PerfilLayout = ({ children }) => {
  return (
    <section className="container-fluid mainSection">
      <div className="row containerProfile">
        <article className="col-md-4 col-lg-3 col-xxl-2 px-0 ">
          <MenuProfesional></MenuProfesional>
        </article>
        <article className="col-md-8 col-lg-9 col-xxl-10">{children}</article>
      </div>
    </section>
  );
};

export default PerfilLayout;
