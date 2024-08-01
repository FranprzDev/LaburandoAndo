import React from "react";

const CardRegistroPasoUno = ({ usuario }) => {
  return (
    <article className="cardRegister d-flex justify-content-center align-items-center border rounded-2 p-3">
      <h2>
        {usuario
          ? "Soy cliente"
          : "Soy profesional autónomo en busca de trabajo"}
      </h2>
    </article>
  );
};

export default CardRegistroPasoUno;
