import React from "react";
import { useForm } from "react-hook-form";
import "../styles/registro.css";

const RegitroProfesional = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="card">
        <div className="row g-3 mx-5 my-5">
          <div className="col-md-6 text-center mt-5">
            {/* informacion */}
            <h2 className="texto-registro">¿Como funciona?</h2>
            <br />
            <h4 className="texto-registro">1. Anunciate de manera gratuita</h4>
            <h6>Completá tus datosy publica tu anunciogratuitamente.</h6>
            <br />
            <h4 className="texto-registro">2. Recibe mensajes de clientes</h4>
            <h6>
              Podrán contactarte a traves de WhatsApp e Email para solicitar tus
              servicios.
            </h6>
            <br />
            <h4 className="texto-registro">
              3. Comienza a brindar tus servicios
            </h4>
            <h6>Concreta con tus clientes.</h6>
            <br />
            <br />
            <br />

            <h2 className="texto-registro">¿Por que registrarte?</h2>
            <br />
            <h6>Es gratis</h6>
            <br />
            <h6>
              Con LaburandoAndo tienes la oportunidad de llegar a mas personas
            </h6>
            <br />
          </div>

          <div className="col-md-6 ">
            {/* formulario */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="border p-4 rounded"
            >
              <h2 className="text-center mb-5 texto-registro">
                Registrate en <strong>LaburandoAndo</strong>
              </h2>

              <fieldset>
                <label htmlFor="nombreRegistro" className="form-label">
                  Nombre y Apellido
                </label>
                <input
                  type="text"
                  id="nombreRegistro"
                  className="form-control"
                  {...register("nombre", {
                    required: "Campo requerido",
                    minLength: {
                      value: 3,
                      message: "Escriba mínimo 3 caracteres",
                    },
                    maxLength: {
                      value: 25,
                      message: "Escriba como máximo 25 caracteres",
                    },
                  })}
                  required
                  minLength={3}
                  maxLength={25}
                />
                <p className="text-danger">{errors.nombre?.message}</p>
              </fieldset>

              <fieldset>
                <label htmlFor="emailRegistro" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="emailRegistro"
                  className="form-control"
                  {...register("email", {
                    required: "Campo requerido",
                    pattern: {
                      value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                      message: "Escriba un correo valido",
                    },
                  })}
                  required
                  placeholder="ejemplo@ejemplo.com"
                />
                <p className="text-danger">{errors.email?.message}</p>
              </fieldset>

              <fieldset>
                <label htmlFor="passwordRegistro" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  id="passwordRegistro"
                  className="form-control"
                  {...register("password", {
                    required: "Campo requerido",
                    minLength: {
                      value: 8,
                      message: "Escriba mínimo 8 caracteres",
                    },
                    maxLength: {
                      value: 16,
                      message: "Escriba como máximo 16 caracteres",
                    },
                  })}
                  required
                  minLength={8}
                  maxLength={16}
                />
                <p className="text-danger">{errors.password?.message}</p>
              </fieldset>

              <fieldset>
                <label htmlFor="password2Registro" className="form-label">
                  Repetir Contraseña
                </label>
                <input
                  type="password"
                  id="password2Registro"
                  className="form-control"
                  {...register("password2", {
                    required: "Campo requerido",
                    minLength: {
                      value: 8,
                      message: "Escriba mínimo 8 caracteres",
                    },
                    maxLength: {
                      value: 16,
                      message: "Escriba como máximo 16 caracteres",
                    },
                  })}
                  required
                  minLength={8}
                  maxLength={16}
                />
                <p className="text-danger">{errors.password2?.message}</p>
              </fieldset>

              <div className="d-grid">
                <button type="submit" className="btn btn-lg boton-color">
                  Registrar
                </button>
              </div>

              <div>
                <button className="btn btn-lg btn-LoginGoogle btn-outline-secondary w-100 d-flex align-items-center justify-content-center mt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="me-2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="4" />
                    <line x1="21.17" x2="12" y1="8" y2="8" />
                    <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
                    <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
                  </svg>
                  Continúa con Google
                </button>
              </div>

              <div className="d-grid mt-5">
                <p>¿Ya tienes una cuena?</p>
                <button className="btn boton2-color btn-lg">Ingresar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegitroProfesional;
