import { useState, useEffect } from "react";
import ListaMensajesSoporte from "../components/ListaMensajesSoporte";
import "../styles/administracion.min.css";
import Loader from "../../../components/loaders/Loader"; 


const Soporte = () => {
  const [leido, setLeido] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleLeido = (e) => {
    const valor = e.target.value;
    if (valor === "Leido") {
      setLeido(true);
    } else if (valor === "No Leido") {
      setLeido(false);
    }
  };

  useEffect(() => {
    setLoading(true);

    fetch("/api/soporte/mensajes")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar los mensajes:", error);
        setLoading(false);
      });
  }, [leido]);

  return (
    <section className="container-fluid px-2 px-lg-5 py-3 py-md-5 mainSection containerProfile">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">Admin</li>
          <li className="breadcrumb-item text-primary">Soporte</li>
        </ol>
      </nav>
      <p className="fw-bold mb-0">Mensajes</p>
      <div className="d-flex justify-content-end filterMessages">
        <div className="mb-2 mb-md-3">
          <small className="mb-0 mb-md-1">Filtrar por</small>
          <select onChange={handleLeido} required className="form-select rounded-2 input">
            <option value="No Leido">No Leídos</option>
            <option value="Leido">Leídos</option>
          </select>
        </div>
      </div>

      <div className="d-flex">
        {loading ? (
          <Loader /> 
        ) : (
          <ListaMensajesSoporte leido={leido} />
        )}
      </div>
    </section>
  );
};

export default Soporte;
