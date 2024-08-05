import React from "react";
import FormularioPublicacion from "./FormularioPublicacion";

const PublicacionProfesional = () => {
  return (
    <section className="container-fluid px-2 px-lg-5 py-5 mainSection containerProfile">
      <h1>Publicar Anuncio de trabajo</h1>
      <FormularioPublicacion></FormularioPublicacion>
    </section>
  );
};

export default PublicacionProfesional;
