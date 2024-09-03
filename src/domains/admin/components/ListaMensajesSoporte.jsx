import { useDispatch, useSelector } from "react-redux";
import ItemMensaje from "./ItemMensaje";
import { useEffect, useState } from "react";
import { getFeedbacks } from "../../../slices/actions/feedbackActions";

const ListaMensajesSoporte = ({ leido }) => {
  const feedbacks = useSelector((state) => state.feedbacks.feedbacks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeedbacks(leido));
  }, [leido]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  let maxPage = Math.ceil(feedbacks.length / itemsPerPage);
  let start = (currentPage - 1) * itemsPerPage;
  let end = start + itemsPerPage;
  let currentItems = feedbacks.slice(start, end);

  return (
    <div className="gap-3 containerFeedbacks justify-content-between d-flex flex-column containerMessages w-100 mt-2">
      <div>
        {feedbacks.length > 0 ? (
          currentItems.map((feedback) => (
            <ItemMensaje key={feedback._id} feedback={feedback}></ItemMensaje>
          ))
        ) : (
          <div className="mt-3 text-center border px-3 py-3 py-md-5 rounded-2 shadow w-100">
            <p className="mb-0">No tienes mensajes</p>
          </div>
        )}
      </div>

      <div className="d-flex justify-content-center mt-3">
        <nav aria-label="Navigation">
          <ul className="pagination">
            {Array.from({ length: maxPage }, (_, i) => (
              <li className="page-item" key={i}>
                <a
                  className="page-link"
                  href="#"
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ListaMensajesSoporte;
