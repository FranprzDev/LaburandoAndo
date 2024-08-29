import React from "react";
import ListaUsuarios from "../components/ListaUsuarios";
import { useSelector } from "react-redux";

const Profesionales = () => {

  const profesional = useSelector((state) => state)

  return (
    <section className="container-fluid px-2 px-lg-5 py-3 py-md-5 mainSection containerProfile">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">Admin</li>
          <li className="breadcrumb-item text-primary">Profesionales</li>
        </ol>
      </nav>
      <ListaUsuarios />
    </section>
  );
};

export default Profesionales;
