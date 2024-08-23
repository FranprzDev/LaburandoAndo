import { useSelector } from "react-redux";
import FormularioSoporte from "../components/FormularioSoporte";
import "../styles/soporteProfesional.css";

const SoporteProfesional = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <section className="container-fluid px-2 px-lg-5 py-5 mainSection containerProfile">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">{user?.fullname}</li>
          <li className="breadcrumb-item text-primary">Soporte</li>
        </ol>
      </nav>
      <FormularioSoporte></FormularioSoporte>
    </section>
  );
};

export default SoporteProfesional;
