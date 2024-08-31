import { useState } from "react";
import ListaMensajesSoporte from "../components/ListaMensajesSoporte";
import "../styles/soporte.css";

const Soporte = () => {

  const [leido,setLeido] = useState("")

  const handleLeido = (e) => {
    const valor = e.target.value
    if(valor === "Leido")
    {
      setLeido(true)
    }
    else if (valor === "No Leido"){
      setLeido(false)     
    }
  }

  return (
    <section className="container-fluid px-2 px-lg-5 py-3 py-md-5 mainSection containerProfile">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">Admin</li>
          <li className="breadcrumb-item text-primary">Soporte</li>
        </ol>
      </nav>
      <div>
        <p className="fw-bold">Mensajes</p>
        <div className=" mb-2 mb-md-3 filterMessages">
          <small className="mb-0 mb-md-1">
            Filtrar por
          </small>
          <select onChange={handleLeido} required className="form-select  rounded-2 input">
            <option value="">Seleccione</option>
            <option value="Leido">Leídos</option>
            <option value="No Leido">No Leídos</option>
          </select>
        </div>
      </div>

      <ListaMensajesSoporte leido={leido}></ListaMensajesSoporte>
    </section>
  );
};

export default Soporte;
