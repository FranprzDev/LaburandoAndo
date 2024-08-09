import React from "react";
import img from "../../img/Logo.jpg";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";

const CardPublicacion = () => {
  return (
    <div className="card cardPublication pt-2 px-2 px-md-3 rounded-3 shadow">
      <div className="d-flex flex-column flex-md-row w-100 gap-2 gap-md-4 h-100">
        <div className="h-100 d-flex flex-column justify-content-between align-items-center mt-lg-3">
          <img
            src={img}
            alt="imagen de perfil"
            className="imgCardPublication border rounded-circle"
          />
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between ">
          <div className="d-flex flex-column gap-1 gap-md-2 pt-2 pb-2 pb-md-3 order-1 order-md-0">
            <p className="mb-0 fs-5 text-center fw-medium text-md-start">
              Juan Perez
            </p>
            <small className="align-middle text-center text-md-start">
              <FaMapMarkerAlt className="fs-6 me-1" />
              Yerba Buena, Tucumán
            </small>
            <div className="  mt-3 text-center text-md-start w-100">
              <span className=" px-5 py-2 rounded-2 category opacity-50 text-white">
                Profesor particular
              </span>
            </div>
            <h5 className="fw-bold pt-2 mb-0 title">
              Clases particulares de inglés en línea
            </h5>
            <p className="fs-6 text-secondary mb-0 description">
              Hola me llamo juan perez y tengo 25 años. Brindo clases a alumnos
              que...
            </p>
            <Link className="d-none d-md-block" to={"/detalle"}>
              seguir leyendo
            </Link>
          </div>
          <div className="d-flex flex-md-column justify-content-center gap-4 align-items-center justify-content-md-start gap-md-1 align-items-md-start">
            <div className="d-flex align-items-center gap-1">
              <IoMdStar className="fs-3 text-warning" />
              <span> 5.0</span>
            </div>
            <span>10 valoraciones</span>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center w-100 pb-2">
        <div className="d-none d-md-block text-center outstanding rounded-2 text-white py-1 px-4">
          <span>Destacado</span>
        </div>

        <Link
          className="btn rounded-3 btnSeeProfile text-white"
          to={"/detalle"}
        >
          Ver Perfil de <span>Juan</span>
        </Link>
      </div>
    </div>
  );
};

export default CardPublicacion;
