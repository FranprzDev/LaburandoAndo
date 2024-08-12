import React, { useMemo } from "react";
import FormAuth from "../../components/AuthComponents/FormAuth";
import { useSelector } from "react-redux";

function RegistroPasoDos() {
  // TODO: Realizar el cambio al revés del BiColumns, en pantallas chiacs quiero que primero se muestre el formulario y luego la explicación

  const type = useSelector((state) => state.register.form.type);
  
  return (
    <div className="container d-flex align-items-center justify-content-center my-3">
      <div className={`row w-100 ${type === "Client" ? "d-flex justify-content-center" : ""}`}>
        {type === "Professional" && (
          <div className="col-md-6 justify-content-center text-center mt-2">
            <div className="col-md-10 d-flex justify-center flex-column">
              <h2 className="mb-4">¿Cómo funciona?</h2>
              <ol className="text-start">
                <li className="d-flex justify-center flex-column ">
                  <p className="fs-5">
                    <strong>Anúnciate de manera gratuita</strong>
                  </p>
                  <p className="fs-6">
                    Completá tus datos y publicá tu anuncio gratuitamente.
                  </p>
                </li>
                <li className="d-flex justify-center flex-column">
                  <p className="fs-5">
                    <strong>Recibe mensajes de clientes 💬</strong>
                  </p>
                  <p className="fs-6">
                    Podrán contactarte a través de WhatsApp y Email para
                    solicitar tus servicios.
                  </p>
                </li>
                <li className="d-flex justify-center flex-column">
                  <p className="fs-5">
                    <strong>Comienza a brindar tus servicios 🤑💸💸💸</strong>
                  </p>
                  <p className="fs-6">
                    Concretá con tus clientes que requieren de tus servicios.
                  </p>
                </li>
              </ol>
              <h2 className="">¿Por qué registrarte?</h2>
              <ol className="d-flex flex-column text-start">
                <li className="d-flex flex-column">
                  <strong className="fs-5">✔️ ¡Es gratis!</strong>
                </li>
                <li className="d-flex justify-center flex-column">
                  <strong className="fs-5">✔️ ¡Llegas a más personas!</strong>
                </li>
              </ol>
            </div>
          </div>
        )}
        <FormAuth />
      </div>
    </div>
  );
}

export default RegistroPasoDos;
