import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";

const ItemMensaje = ({ feedback }) => {
  return (
    <div className="cardMessage shadow rounded-2 justify-content-center justify-content-md-between gy-3 align-items-center p-2 pt-md-3 px-md-3 border">
      <div className="d-flex flex-column flex-md-row justify-content-md-between">
        <div className="d-flex flex-column ">
          <span className="fw-medium">Asunto: {feedback.subject}</span>
          <p className="fw-bold mb-0 align-middle">
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
      <div className=" d-flex gap-3 align-items-center justify-content-end mt-2">
        <a className="">
          <IoMdNotifications className="fs-5" />
          Marcar como Leído
        </a>
      </div>
    </div>
  );
};

export default ItemMensaje;
