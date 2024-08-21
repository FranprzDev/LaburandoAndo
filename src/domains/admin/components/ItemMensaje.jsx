import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";

const ItemMensaje = () => {
  return (
    <div className="cardMessage shadow rounded-2 justify-content-center justify-content-md-between gy-3 align-items-center p-2 pt-md-3 px-md-3 border">
      <div className="d-flex flex-column flex-md-row justify-content-md-between">
        <div className="d-flex flex-column ">
          <span className="fw-medium">Asunto: Categoría</span>
          <p className="fw-bold mb-0 align-middle">Bruno Madozzo Romay</p>
        </div>
        <span className="">
          <IoChatbubbleEllipsesOutline className="fs-3" />
        </span>
      </div>
      <span className="descriptionMessage w-100 d-block p-2 rounded-2">
        - Hola, quería saber si podrían agregar la categoría Fotógrafo. Gracias.
      </span>
      <div className=" d-flex gap-3 align-items-center justify-content-end mt-2">
        <a className="">
          <IoMdNotifications className="fs-5" />
          Marcar como Resuelto
        </a>
      </div>
    </div>
  );
};

export default ItemMensaje;
