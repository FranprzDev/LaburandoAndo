import React from "react";
import FormularioPublicacion from "./FormularioPublicacion";
import "../../styles/publicacionProfesional.css";

const PublicacionProfesional = () => {
  return (
    <section className="container-fluid px-2 px-lg-5 py-3 py-md-5 mainSection containerProfile">
      <h1>Publicar Anuncio de trabajo</h1>
      <FormularioPublicacion></FormularioPublicacion>
    </section>
  );
};

export default PublicacionProfesional;
