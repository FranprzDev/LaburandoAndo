import MenuProfesional from "./profesional/MenuProfesional";

const PerfilLayout = ({ children }) => {
  return (
    <section className="px-0 container-fluid mainSection">
      <div className="row containerProfile w-100">
        <article className="col-md-4 col-lg-3 col-xxl-2 h-100">
          <MenuProfesional></MenuProfesional>
        </article>
        <article className="col-md-8 col-lg-9 col-xxl-10">{children}</article>
      </div>
    </section>
  );
};

export default PerfilLayout;
