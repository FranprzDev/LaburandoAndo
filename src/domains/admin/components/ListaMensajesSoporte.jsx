import { useDispatch, useSelector } from "react-redux";
import ItemMensaje from "./ItemMensaje";
import { useEffect } from "react";
import { getFeedbacks } from "../../../slices/actions/feedbackActions";

const ListaMensajesSoporte = ({leido}) => {
  const feedbacks = useSelector((state) => state.feedbacks.feedbacks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeedbacks(leido));
  }, [leido]);

  return (
    <div className="gap-3 align-items-start d-flex flex-column containerMessages w-100 mt-2">
      {feedbacks.length > 0 ? (
        feedbacks.map((feedback) => (
          <ItemMensaje key={feedback._id} feedback={feedback}></ItemMensaje>
        ))
      ) : (
        <div className="mt-3 text-center border px-3 py-3 py-md-5 rounded-2 shadow w-100">
          <p className="mb-0">No tienes mensajes</p>
        </div>
      )}
    </div>
  );
};

export default ListaMensajesSoporte;
