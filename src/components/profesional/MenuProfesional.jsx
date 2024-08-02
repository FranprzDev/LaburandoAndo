import React from "react";
import "../../styles/perfilProfesional.css";
import { Link } from "react-router-dom";
import image from "../../img/Logo.jpg";

const MenuProfesional = () => {
  return (
    <nav className="navbar navbar-expand-md menuProfessional bg-body-tertiary d-flex align-items-start w-100 px-2">
      <div className="px-0 px-md-2 py-md-3 container-fluid containerMenu d-flex flex-md-column align-items-start">
        <div className="text-md-center">
          <Link className="navbar-brand fs-2" to={"/"}>
            LaburandoAndo
          </Link>
        </div>
        <figure className="d-none d-md-block text-center mx-auto w-100 mt-5">
          <img
            src={image}
            alt=""
            width={100}
            className="rounded-circle shadow"
          />
          <figcaption className="fw-bold fs-5">Bruno Madozzo Romay</figcaption>
          <figcaption>Tucumán, Argentina</figcaption>
        </figure>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-start w-100" id="offcanvasNavbar">
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>
          <div className="offcanvas-body d-flex justify-content-center w-100 px-4">
            <ul className="navbar-nav d-flex flex-column justify-content-center w-100 mt-3">
              <li className="nav-item">
                <Link className="nav-link w-100" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item mt-xl-3">
                <Link className="nav-link w-100" to={"/miperfil"}>
                  Mi Perfil
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/publicar"}>
                  Publicar Anuncio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Mis Publicaciones
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Ayuda
                </Link>
              </li>
              <li className="nav-item mt-xl-3">
                <Link className="nav-link" href="#">
                  Cerrar Sesión
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MenuProfesional;
