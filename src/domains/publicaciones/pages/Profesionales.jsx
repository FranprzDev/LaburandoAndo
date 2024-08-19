import React, { useState } from "react";
import Filtros from "../components/Filtros";
import ListaPublicaciones from "../components/ListaPublicaciones";
import "../styles/profesionales.css";

const Profesionales = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section className="mainSection py-2 pb-md-5 pt-md-4 sectionBanner">
      <div className="container">
      <div className="row gap-2 gap-md-3 gap-lg-2 justify-content-center">
        <article className="mb-2 mb-md-3">
          <h1>Profesionales a tu alcance</h1>
          <p>Estos son todos los profesionales que puedes contratar!</p>
        </article>
        <article className="col-md-9 col-lg-3">
          <Filtros onCategoryChange={handleCategoryChange} />
        </article>
        <article className="col-lg-8">
          <ListaPublicaciones selectedCategory={selectedCategory} />
        </article>
      </div>
      </div>
      
    </section>
  );
};

export default Profesionales;
