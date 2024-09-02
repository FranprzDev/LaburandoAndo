import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { useDispatch } from "react-redux";
import { getFeedbacks } from "../../../slices/actions/feedbackActions";
import useAlert from "../../../hooks/useAlertHook";
import instance from "../../../api/api";

const ItemMensaje = ({ feedback }) => {
  const { autoCloseAlert } = useAlert();
  const dispatch = useDispatch();

  const changeFeedBack = async () => {
    const data = await instance.patch(`/feedback/${feedback._id}`);
    if (data.status === 200)
      autoCloseAlert(
        feedback.isRead ? "Mensaje marcado como no leído" : "Mensaje marcado como leído", 
        "success");
    else autoCloseAlert(
      feedback.isRead ? "Error al marcar como no leído" : "Error al marcar como leído", 
      "error");

    dispatch(getFeedbacks(feedback.isRead));
  };

  return (
    <div className="cardMessage shadow rounded-2 justify-content-center justify-content-md-between gy-3 align-items-center p-2 pt-md-3 px-md-3 border">
      <div className="d-flex flex-column flex-md-row justify-content-md-between">
        <div className="d-flex flex-column ">
          <span className="fw-medium text-secondary">
            Asunto: {feedback.subject}
          </span>
          <p className="fw-medium mb-0 align-middle">
            {feedback.worker.fullname}
          </p>
        </div>
        <span className="">
          <IoChatbubbleEllipsesOutline className="fs-3" />
        </span>
      </div>
      <span className="descriptionMessage w-100 d-block p-2 rounded-2">
        - {feedback.message}
      </span>
      <div className="d-flex gap-3 align-items-center justify-content-end mt-2">
        <a className="color-primary" onClick={changeFeedBack}>
          <IoMdNotifications className="fs-5" />
          { feedback.isRead ? "Marcar como no leído" : "Marcar como leído" }
        </a>
      </div>
    </div>
  );
};

export default ItemMensaje;
