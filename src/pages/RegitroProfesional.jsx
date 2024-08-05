import React from "react";

import { useForm } from "react-hook-form";

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
      <div className="card mb-3">
        <div className="row g-3 mx-5 my-5">
          <div className="col-md-4">
            {/* informacion */}
            <h2>¿Como funciona?</h2>
            <h2>¿Por que registrarte?</h2>
          </div>
          <div className="col-md-8">
            {/* formulario */}

            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-center mb-5">Registrate en LaburandoAndo</h2>

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
                />
                <p className="text-danger">{errors.email?.message}</p>
              </fieldset>

              <button type="submit" className="btn btn-primary">
                Registrarme
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegitroProfesional;
