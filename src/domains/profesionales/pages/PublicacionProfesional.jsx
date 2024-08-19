import FormularioPublicacion from "../components/FormularioPublicacion";
import "../styles/publicacionProfesional.css";
import { useSelector } from "react-redux";

const PublicacionProfesional = () => {

  const user = useSelector((state) => state.auth.user);

  return (
    <section className="container-fluid px-2 px-lg-5 py-3 py-md-5 mainSection containerProfile">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            {user.fullname}
          </li>
          <li className="breadcrumb-item text-primary">
            Publicar Anuncio
          </li>
        </ol>
      </nav>
      <FormularioPublicacion/>
    </section>
  );
};

export default PublicacionProfesional;
