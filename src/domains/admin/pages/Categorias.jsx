import React from "react";
import FormCategoria from "../components/FormCategoria";
import "../styles/administracion.css";

const Categorias = () => {
  return (
    <section className="container-fluid px-2 px-lg-5 py-3 py-md-5 mainSection containerProfile">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">Admin</li>
          <li className="breadcrumb-item text-primary">Categorías</li>
        </ol>
      </nav>
      <FormCategoria></FormCategoria>
    </section>
  );
};

export default Categorias;
