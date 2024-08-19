import FormularioPerfilProfesional from "../components/FormularioPerfilProfesional";
import "../styles/perfilProfesional.css";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import Loader from "../../../components/loaders/Loader";

const PerfilProfesional = () => { 

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
  }, [loading]);
  
  const user = useSelector((state) => state.auth.user);

  return (
    <>
      {loading && <Loader />}
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
        <FormularioPerfilProfesional loading={loading} setLoading={setLoading}/>
      </section>
    </>
  );
};

export default PerfilProfesional;
