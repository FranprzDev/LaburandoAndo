import React, { useEffect } from "react";
import { useRegisterHook } from "../../hooks/useRegisterHook";
import { useNavigate } from "react-router-dom";

const CardRegistroPasoUno = ({ usuario }) => {
  const {
    changeAuthMethod,
    changeType,
  } = useRegisterHook();

  const navigate = useNavigate()


  const handleClick = () => {

    changeAuthMethod("Local");

    changeType(usuario ? "Cliente" : "Profesional");

    navigate("../register2")
  }

  return (
    <article className="cardRegister d-flex justify-content-center align-items-center rounded-2 p-3" onClick={handleClick}>
      <h3>
        {usuario
          ? "Soy cliente"
          : "Soy profesional autónomo en busca de trabajo"}
      </h3>
    </article>
  );
};

export default CardRegistroPasoUno;
