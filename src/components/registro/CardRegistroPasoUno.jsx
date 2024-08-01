import React from "react";

const CardRegistroPasoUno = ({ usuario }) => {
  return (
    <article className="cardRegister d-flex justify-content-center align-items-center rounded-2 p-3">
      <h3>
        {usuario
          ? "Soy cliente"
          : "Soy profesional autónomo en busca de trabajo"}
      </h3>
    </article>
  );
};

export default CardRegistroPasoUno;
