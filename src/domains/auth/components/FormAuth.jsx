import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createClient } from "../../../slices/actions/registerActions";
import { setAditionalValues, setValues } from "../../../slices/registerSlice";
import useAlert from "../../../hooks/useAlertHook";

function FormAuth() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const dispatch = useDispatch();
  const type = useSelector((state) => state.register.form.type);

  const password = useRef({});
  password.current = watch("password", "");

  const navigate = useNavigate();
  const { customAlert, autoCloseAlert } = useAlert();

  return (
    <div className="col-md-6 d-flex justify-content-center align-items-center mb-3 mb-md-0 order-md-1 px-0">
      <div className={`col-11 col-sm-10 col-md-12 col-lg-11 col-xl-9 mx-auto`}>
        <div className="card p-lg-4 pt-3 px-0">
          <div className="text-center">
            <p className="fw-bold mb-0">
              Registrate en <span className="text-primary">LaburandoAndo</span>
              {
                type === "Client" ? " como cliente" : " como profesional"
              }
            </p>
          </div>
          <div className="card-body pb-0">
            <form className="text-center my-3" onSubmit={handleSubmit((data) => {
              dispatch(setValues(data))
              
              if(type === "Professional") {
                navigate("/auth/register3")
                autoCloseAlert("Rellena los datos adicionales, estos son opcionales.", "warning")
              }
                

              if(type === "Client"){
                customAlert("Tu cuenta ha sido creada exitosamente, ingresa sesión para iniciar.", () => {
                  dispatch(createClient())
                  navigate("../login");
                })
              }
            })}>
              <div className="mb-2 text-start">
                <label htmlFor="fullname" className="mb-1 fw-medium">
                  Nombre y Apellido
                </label>
                <input
                  type="text"
                  className="form-control input"
                  placeholder="Francisco Perez"
                  {...register("fullname", {
                    required: "El nombre completo es obligatorio",
                    pattern: {
                      value: /^[a-zA-Z\s]*$/,
                      message: "Ingrese un nombre válido",
                    },
                  })}
                />
                <div className="text-danger">{errors.fullname?.message}</div>
              </div>
              <div className="mb-2 text-start">
                <label htmlFor="mail" className="mb-1 fw-medium">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control input"
                  placeholder="franciscoperez@gmail.com"
                  {...register("mail", {
                    required: "El correo es obligatorio",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Ingrese una dirección de correo válida",
                    },
                  })}
                />
                <div className="text-danger">{errors.mail?.message}</div>
              </div>
              <div className="mb-2 text-start">
                <label htmlFor="password" className="mb-1 fw-medium">
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control input"
                  placeholder="Ju4n23!"
                  {...register("password", {
                    required: "La contraseña es obligatoria",
                    minLength: {
                      value: 8,
                      message: "La clave debe tener al menos 8 caracteres",
                    },
                    maxLength: {
                      value: 70,
                      message: "La clave debe tener como máximo 70 caracteres",
                    },
                  })}
                />
                <div className="text-danger">{errors.password?.message}</div>
              </div>
              <div className="mb-2 text-start">
                <label htmlFor="retry-password" className="mb-1 fw-medium">
                  Repetir Contraseña
                </label>
                <input
                  name="password_repeat"
                  type="password"
                  className="form-control input"
                  placeholder="Ju4n23!"
                  {...register("password_repeat", {
                    validate: value =>
                      value === password.current || "Las contraseñas no coinciden.",
                  })}
                />
                <div className="text-danger">{errors.password_repeat?.message}</div>
              </div>
              <button className="btn btn-danger w-100 mb-3">Registrarme</button>
            </form>
            <button className="btn btn-LoginGoogle btn-outline-secondary w-100 d-flex align-items-center justify-content-center mb-4">
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
        </div>
      </div>
    </div>
  );
}

export default FormAuth;