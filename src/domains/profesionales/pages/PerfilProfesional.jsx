import FormularioPerfilProfesional from "../components/FormularioPerfilProfesional";
import "../styles/perfilProfesional.css";
import { useSelector } from "react-redux";

const PerfilProfesional = () => { 
  
  const user = useSelector((state) => state.auth.user);

  return (
    <section className="container-fluid px-2 px-lg-5 py-5 mainSection containerProfile">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            {user?.fullname}
          </li>
          <li className="breadcrumb-item text-primary">
            Mi perfil
          </li>
        </ol>
      </nav>
      <FormularioPerfilProfesional />
    </section>
  );
};

export default PerfilProfesional;
