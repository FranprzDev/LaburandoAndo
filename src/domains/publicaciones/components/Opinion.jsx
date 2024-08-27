import { FaStar, FaUser } from "react-icons/fa";

const Opinion = ({ review}) => {

  return (
    <div className="cardOpinion w-100 d-flex flex-column gap-3 border rounded-2 p-3">
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <span>
            <FaUser className="fs-4" />
          </span>
          <p className="fw-bold mb-0">{review.user.fullname}</p>
        </div>
        <div className="calificacion mb-2">
          {[...Array(review.stars)].map((_, index) => (
            <FaStar key={index} color="gold" className="fs-5" />
          ))}
        </div>
      </div>

      <p className="mb-0">{review.comment}</p>
    </div>
  );
};

export default Opinion;
