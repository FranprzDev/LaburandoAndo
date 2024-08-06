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
      <div className="card">
        <div className="row g-3 mx-5 my-5">
          <div className="col-md-6">
            {/* informacion */}
            <h2>¿Como funciona?</h2>
            <h2>¿Por que registrarte?</h2>
          </div>

          <div className="col-md-6 ">
            {/* formulario */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="border p-4 rounded"
            >
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
                <button type="submit" className="btn btn-danger">
                  Registrarme
                </button>
              </div>

              <div className="d-grid mt-5">
                <p>¿Ya tienes una cuena?</p>
                <button className="btn btn-secondary">Ingresar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegitroProfesional;
