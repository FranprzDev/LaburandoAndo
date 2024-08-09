import React, { useMemo } from "react";
import { useRegisterHook } from "../../hooks/useRegisterHook";
import { useNavigate } from "react-router-dom";

function FormAuth() {
  const {
    changeName,
    changeEmail,
    changePassword,
    changeRetryPassword,
    comparePassword,
  } = useRegisterHook();

  const equals = useMemo(() => {
    return comparePassword();
  }, [comparePassword]);

  const navigate = useNavigate();

  return (
    <div className="col-md-6 d-flex justify-content-center align-items-center">
      <div className="col-11 col-sm-10 col-md-12 col-lg-11 col-xl-9 mx-auto">
        <div className="card p-4">
          <div className="text-center">
            <h5 className="card-title">
              Registrate en <span className="text-primary">LaburandoAndo</span>
            </h5>
          </div>
          <div className="card-body">
            <div className="text-center my-3">
              <div className="mb-3 text-start">
                <label htmlFor="email" className="mb-1">
                  Nombre y Apellido
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Francisco Perez"
                  onChange={(e) => changeName(e.target.value)}
                />
              </div>
              <div className="mb-3 text-start">
                <label htmlFor="email" className="mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="franciscoperez@gmail.com"
                  onChange={(e) => changeEmail(e.target.value)}
                />
              </div>
              <div className="mb-3 text-start">
                <label htmlFor="password" className="mb-1">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Ju4n23!"
                  onChange={(e) => changePassword(e.target.value)}
                />
              </div>
              <div className="mb-3 text-start">
                <label htmlFor="password" className="mb-1">
                  Repetir Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Ju4n23!"
                  onChange={(e) => changeRetryPassword(e.target.value)}
                />
              </div>
              {equals ? null : (
                <p className="text-danger fs-6">Las contraseñas no coinciden</p>
              )}
              <button className="btn btn-danger w-100 mb-3" disabled={!equals} onClick={() => {navigate("../register3")}}>Registrarme</button>
            </div>
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
