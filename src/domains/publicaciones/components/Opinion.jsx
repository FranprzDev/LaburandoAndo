import { FaStar, FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import useAlert from "../../../hooks/useAlertHook";
import { deleteReview } from "../../../slices/actions/reviewsActions";

const Opinion = ({ review }) => {
  const usuario = JSON.parse(sessionStorage.getItem("usuarioLogeado"));

  const dispatch = useDispatch();
  const { customAlert, autoCloseAlert } = useAlert();

  const handleDelete = (id) => {
    customAlert("¿Estás seguro que quieres borrar este comentario?", () => {
      dispatch(deleteReview(id));
      autoCloseAlert("Comentario eliminado", "success");
    });
  };

  return (
    <div className="cardOpinion w-100 d-flex flex-column gap-3 border rounded-2 p-3">
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center gap-2" title="Cliente">
          <span title="usuario">
            <FaUser className="fs-4" />
          </span>
          <p className="fw-bold mb-0">{review.user?.fullname}</p>
        </div>
        <div className="calificacion mb-2">
          {[...Array(review.stars)].map((_, index) => (
            <FaStar key={index} color="gold" className="fs-5" />
          ))}
        </div>
      </div>

      <p className="mb-0">{review?.comment}</p>
      {usuario && usuario.role === "admin" && (
        <div className="d-flex justify-content-end">
          <button
            className="btn btnDeleteReview border py-1 border-primary  text-primary"
            title="Eliminar comentario"
            onClick={() => handleDelete(review._id)}
          >
            eliminar
          </button>
        </div>
      )}
    </div>
  );
};

export default Opinion;
