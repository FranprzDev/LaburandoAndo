import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeType } from "../../../slices/registerSlice";

const CardRegistroPasoUno = ({ usuario }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(changeType(usuario ? "Client" : "Professional"));
    navigate("../register2");
  };

  return (
    <article
      className="cardRegister d-flex justify-content-center align-items-center rounded-2 p-3"
      title={
        usuario
          ? "Selecciona esta opción si eres un Cliente"
          : "Selecciona esta opción si eres un Profesional"
      }
      onClick={handleClick}
    >
      <h3 className="mb-0">
        {usuario
          ? "Soy cliente"
          : "Soy profesional autónomo en busca de trabajo"}
      </h3>
    </article>
  );
};

export default CardRegistroPasoUno;
