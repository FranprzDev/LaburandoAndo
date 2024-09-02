import React, { useState } from "react";
import Filtros from "../components/Filtros";
import ListaPublicaciones from "../components/ListaPublicaciones";
import "../styles/profesionales.css";

const Profesionales = () => {
  return (
    <section className="mainSection py-3 pb-md-5 pt-md-4 sectionBanner">
      <div className="container">
      <div className="row gap-2 gap-lg-2 justify-content-center">
        <article className="mb-2 mb-md-3">
          <h1>Profesionales a tu alcance</h1>
          <p className="mb-0 mb-md-2">Estos son todos los profesionales que puedes contratar!</p>
        </article>
        <article className="col-md-9 col-lg-3">
          <Filtros/>
        </article>
        <article className="col-lg-8">
          <ListaPublicaciones />
        </article>
      </div>
      </div>
      
    </section>
  );
};

export default Profesionales;
