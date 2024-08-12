import { Link } from "react-router-dom";
import "../../styles/registroPasoUno.css";
import CardRegistroPasoUno from "../../components/registro/CardRegistroPasoUno";

const RegistroPasoUno = () => {

  return (
    <section className="container registerStepOne mainSection py-3 py-md-5 text-center">
      <h1 className="mb-3 mb-md-5">
        ¿Eres un cliente o un profesional autónomo?
      </h1>
      <p className="text-center fontSizeText">Selecciona una opción</p>
      <div className="d-flex flex-column flex-md-row justify-content-center gap-2 gap-md-5 align-items-center mb-4">
        <CardRegistroPasoUno usuario={true}/>
        <CardRegistroPasoUno usuario={false} />
      </div>
      <div className="mb-5">
        <p className="fontSizeText">¿Ya tienes cuenta?</p>
        <Link
          to={"/auth/login"}
          className="btn px-5 border btnOptionLogin fontSizeText text-white"
        >
          Ingresar
        </Link>
      </div>
    </section>
  );
};

export default RegistroPasoUno;
