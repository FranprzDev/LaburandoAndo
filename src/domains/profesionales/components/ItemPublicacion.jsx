import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost } from "../../../slices/actions/postsActions";
import useAlert from "../../../hooks/useAlertHook";

const ItemPublicacion = ({ work }) => {
  const dispatch = useDispatch();
  const { customAlert, autoCloseAlert } = useAlert();
  const handleDelete = () => {
    customAlert("¿Desea Borrar su publicación?", () => {
      dispatch(deletePost(work._id));
      autoCloseAlert("Su publicacion fue borrada con éxito", "success");
    });
  };

  return (
    <div className="cardPostProfessional shadow rounded-2 justify-content-center justify-content-md-between gy-2 align-items-center p-2 p-md-3 border">
      <p className="fw-bold align-middle mb-1 titlePostProfesional">
        {work.title}
      </p>
      <span className="mb-0">{work.category[0].name}</span>
      <div className=" d-flex gap-3 align-items-center justify-content-end mt-0">
        <Link className="iconUpdatePost" title="editar publicación">
          <FaEdit />
        </Link>
        <a className="iconDeletePost" title="eliminar publicación">
          <MdDelete onClick={handleDelete} />
        </a>
      </div>
    </div>
  );
};

export default ItemPublicacion;
