import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost } from "../../../slices/actions/postsActions";
import useAlert from "../../../hooks/useAlertHook";

const ItemPublicacion = ({ work, onDelete }) => {
  const dispatch = useDispatch();
  const { customAlert, autoCloseAlert } = useAlert();

  const handleDelete = () => {
    customAlert("¿Desea Borrar su publicación?", () => {
      dispatch(deletePost(work._id)).then(() => {
        autoCloseAlert("Su publicación fue borrada con éxito", "success");
        onDelete();  
      });
    });
  };

  return (
    <div className="cardPostProfessional shadow rounded-2 justify-content-center justify-content-md-between gy-2 align-items-center p-2 p-md-3 border">
      <p className="fw-bold align-middle mb-1 titlePostProfesional">
        {work.title}
      </p>
      <span className="mb-0">{work.category[0]?.name}</span>
      <div className="d-flex gap-3 align-items-center justify-content-end mt-0">
        <Link to={`/work/editar-anuncio/${work._id}`} className="iconUpdatePost" title="editar publicación">
          <FaEdit />
        </Link>
        <a className="iconDeletePost" title="eliminar publicación" onClick={handleDelete}>
          <MdDelete />
        </a>
      </div>
    </div>
  );
};

export default ItemPublicacion;
