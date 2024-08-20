import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const ItemPublicacion = () => {
  return (
    <div className="cardPostProfessional shadow rounded-2 justify-content-center justify-content-md-between gy-2 align-items-center p-2 p-md-3 border">
      <p className="fw-bold align-middle mb-1 titlePostProfesional">
        Clases particulares de inglés en línea para alumnos de primario y
        secundario...
      </p>
      <span className="mb-0">Profesor Particular</span>
      <div className=" d-flex gap-3 align-items-center justify-content-end mt-0">
        <Link className="iconUpdatePost" title="editar publicación">
          <FaEdit />
        </Link>
        <a className="iconDeletePost" title="eliminar publicación">
          <MdDelete />
        </a>
      </div>
    </div>
  );
};

export default ItemPublicacion;
