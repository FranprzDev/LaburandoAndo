import { Link } from "react-router-dom";
import "../styles/nosotros.min.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

const CardNosotros = ({ fundador }) => {
  return (
      <div className="card cardUs shadow">
        <img
          src={fundador?.foto}
          className="card-img-top imgCardUs"
          alt={fundador.nombre}
        />
        <div className="card-body text-center">
          <p className="card-title fw-bold">{fundador.nombre}</p>
          <div className="d-flex justify-content-center gap-2">
          <Link
          className="fs-1 text-dark"
            to={fundador.linkGitHub}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare />
          </Link>
          <Link
            to={fundador.linkLinkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="fs-1"
          >
            <FaLinkedin />
          </Link>
        </div>
        </div>
        
      </div>
  );
};

export default CardNosotros;
