import React from "react";

export default function Login() {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
      <div className="row w-100">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto">
          <div className="card p-4">
            <div className="text-center">
              <h5 className="card-title">
                Accede a <span className="text-primary">LaburandoAndo</span>
              </h5>
            </div>
            <div className="card-body">
              <button className="btn btn-LoginGoogle btn-outline-secondary w-100 d-flex align-items-center justify-content-center mb-3">
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
              <div className="text-center my-3">
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="juanperez@gmail.com"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Ju4n23!"
                  />
                </div>
                <button className="btn btn-danger w-100 mb-3">Ingresar</button>
              </div>
              <div className="text-center">
                <a href="#" className="text-primary text-decoration-none">
                  ¿No recuerdas tu contraseña?
                </a>
              </div>
            </div>
            <div className="d-flex align-items-center w-100 my-3">
              <hr className="flex-grow-1 border border-secondary border-1" />
              <span className="mx-2">o</span>
              <hr className="flex-grow-1 border border-secondary border-1" />
            </div>
            <div className="text-center">
              <button className="btn btn-outline-secondary btn-Registrarse w-100 mt-2 text-dark">
                Crear una cuenta nueva
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
