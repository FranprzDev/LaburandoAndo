import Filtros from "../components/profesionales/Filtros";
import ListaPublicaciones from "../components/profesionales/ListaPublicaciones";
import "../styles/profesionales.css";

const Profesionales = () => {
  return (
    <section className="mainSection py-2 pb-md-5 pt-md-4 container">
      <div className="row gap-2 justify-content-center">
        <article className=" mb-2 mb-md-3">
          <h1>Profesionales a tu alcance</h1>
          <p>Estos son todos los profesionales que puedes contratar!</p>
        </article>
        <article className="col-md-9 col-lg-3">
          <Filtros/>
        </article>
        <article className="col-lg-8 ">
          <ListaPublicaciones/>
        </article>
      </div>
    </section>
  );
};

export default Profesionales;
