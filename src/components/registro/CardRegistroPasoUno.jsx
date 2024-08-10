import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeType } from "../../slice/registerSlice";

const CardRegistroPasoUno = ({ usuario }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate()


  const handleClick = () => {
    dispatch(changeType());
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
