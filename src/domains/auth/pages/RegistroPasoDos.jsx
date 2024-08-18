import React, { useMemo } from "react";
import FormAuth from "../../auth/components/FormAuth";
import { useSelector } from "react-redux";

function RegistroPasoDos() {
  const type = useSelector((state) => state.register.form.type);

  return (
    <div className="container d-flex align-items-center justify-content-center my-3 mainSection py-3 py-md-5">
      <div
        className="row w-100"
      >
        {type === "Professional" ? (
          <div className="col-md-6 justify-content-center text-center mt-2 order-1">
            <div className="d-flex justify-content-center flex-column align-items-center ">
              <h2 className="mb-4">¿Cómo funciona?</h2>

              <div>
                <p className="fw-bold">Anúnciate de manera gratuita</p>
                <p>Completá tus datos y publicá tu anuncio gratuitamente.</p>
              </div>
              <div>
                <p className="fw-bold">Recibe mensajes de clientes 💬</p>
                <p>
                  Podrán contactarte a través de WhatsApp y Email para solicitar
                  tus servicios.
                </p>
              </div>

              <div>
                <p className="fw-bold">
                  Comienza a brindar tus servicios 🤑💸💸💸
                </p>
                <p>Concretá con tus clientes que requieren de tus servicios.</p>
              </div>

              <h3 className="mt-2 mb-3 mb-md-4">¿Por qué registrarte?</h3>
              <ol className="d-flex flex-column text-start">
                <li className="d-flex flex-column">
                  <p className="">✔️ ¡Es gratis!</p>
                </li>
                <li className="d-flex justify-center flex-column">
                  <p className="">✔️ ¡Llegas a más personas!</p>
                </li>
              </ol>
            </div>
          </div>
        ) : (
          <div className="col-md-6 justify-content-center text-center mt-2 order-1">
          <div className="d-flex justify-content-center flex-column align-items-center">
            <h2 className="mb-4">¿Cómo funciona?</h2>
      
            <div>
              <p className="fw-bold">Encuentra el profesional que necesitas</p>
              <p>
                Explora nuestro catálogo de profesionales independientes y encuentra al que mejor se adapte a tus necesidades.
              </p>
            </div>
            <div>
              <p className="fw-bold">Contacta directamente con el profesional 💬</p>
              <p>
                Puedes ponerte en contacto a través de WhatsApp o Email para coordinar los detalles del servicio.
              </p>
            </div>
      
            <div>
              <p className="fw-bold">
                Disfruta de un servicio personalizado 🛠️🔧💼
              </p>
              <p>
                Contrata y recibe un servicio de calidad adaptado a lo que realmente necesitas.
              </p>
            </div>
      
            <h3 className="mt-2 mb-3 mb-md-4">¿Por qué registrarte?</h3>
            <ol className="d-flex flex-column text-start">
              <li className="d-flex flex-column">
                <p className="">✔️ ¡Es fácil y rápido!</p>
              </li>
              <li className="d-flex justify-center flex-column">
                <p className="">✔️ ¡Accede a una red de profesionales confiables!</p>
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
