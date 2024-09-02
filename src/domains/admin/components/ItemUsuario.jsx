import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteWorker } from "../../../slices/actions/workersActions";
import useAlert from "../../../hooks/useAlertHook";
import { deleteUser } from "../../../slices/actions/usersActions";

const ItemUsuario = ({ user, profesional }) => {
  const dispatch = useDispatch();

  const { customAlert, autoCloseAlert } = useAlert();

  const handleDelete = (id) => {
    if (user.role) {
      customAlert(
        "¿Estas seguro que quieres borrar a este usuario profesional?",
        () => {
          dispatch(deleteWorker(id));
          autoCloseAlert("Usuario eliminado", "success");
        }
      );
    } else {
      customAlert(
        "¿Estas seguro que quieres borrar a este usuario cliente?",
        () => {
          dispatch(deleteUser(id));
          autoCloseAlert("Usuario eliminado", "success");
        }
      );
    }
  };

  return (
    <>
      <div className="row cardMessage shadow rounded-2 p-1 py-md-3 px-md-2 border">
        <div className="col-lg-4 d-flex align-items-center ">
          <p className="fw-bold mb-0">{user?.fullname}</p>
        </div>
        <div className="col-lg-6 d-flex  align-items-center ">
          <p className="mb-0">{user?.mail}</p>
        </div>
        <div className="col-lg-2 d-flex justify-content-end">
          {/* <button className="btn btn-warning me-3">
            <RiEdit2Fill className="fs-5" />
          </button> */}
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(user._id)}
          >
            <MdDelete className="fs-5" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemUsuario;
