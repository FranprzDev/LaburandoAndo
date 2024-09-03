import { useParams } from "react-router-dom";
import FormularioPublicacion from "../components/FormularioPublicacion";
import "../styles/min/publicacionProfesional.min.css";
import { useSelector } from "react-redux";

const PublicacionProfesional = () => {
  const {id} = useParams()
  const user = useSelector((state) => state.auth.user);

  return (
    <section className="container-fluid px-2 px-lg-5 py-3 py-md-5 mainSection containerProfile">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            {user.fullname}
          </li>
          <li className="breadcrumb-item text-primary">
            {id ? "Editar Anuncio" : "Publicar Anuncio"}
          </li>
        </ol>
      </nav>
      <FormularioPublicacion id={id}/>
    </section>
  );
};

export default PublicacionProfesional;
