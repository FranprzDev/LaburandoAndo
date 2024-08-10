import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nosotros.css";

const CardNosotros = ({ fundador }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img
          src={fundador.foto}
          className="card-img-top"
          alt={fundador.nombre}
        />
        <div className="card-body">
          <h3 className="card-title">{fundador.nombre}</h3>
        </div>
        <div className="card-footer d-flex justify-content-evenly">
          <Link
            to={fundador.linkGitHub}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-2x fa-github"></i>
          </Link>
          <Link
            to={fundador.linkLinkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-2x fa-linkedin"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardNosotros;
