import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const ItemPublicacion = () => {
  return (
    <div className="cardPostProfessional shadow rounded-2 justify-content-center justify-content-md-between gy-2 align-items-center p-2 p-md-3 border">
      <article className=" d-flex justify-content-center align-items-center justify-content-lg-start mt-0 ">
        <p className="fw-bold align-middle mb-0 titlePostProfesional">
          Clases particulares de inglés en línea para alumnos de primario y
          secundario...
        </p>
      </article>
      <article className="mt-lg-2">
        <span className="mb-0">Profesor Particular</span>
      </article>
      <article className=" d-flex gap-3 align-items-center justify-content-end mt-0">
        <Link
          className="iconUpdatePost"
          title="editar publicación"
        >
            <FaEdit/>
        </Link>
        <a
          className="iconDeletePost border-0 bg-none"
          title="eliminar publicación"
        >
            <MdDelete/>
        </a>
      </article>
    </div>
  );
};

export default ItemPublicacion;
