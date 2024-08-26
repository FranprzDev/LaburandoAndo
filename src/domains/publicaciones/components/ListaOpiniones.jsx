import Opinion from "./Opinion";
import { useSelector } from "react-redux";

const ListaOpiniones = ({ userLogeado, opinionesFiltradas }) => {
  const profesional = useSelector((state) => state.posts.post);

  return (
    <div className="d-flex flex-column gap-2 ">
      {profesional?.reviews &&
        opinionesFiltradas.length === 0 &&
        profesional?.reviews
          .slice()
          .reverse()
          .map((review) => (
            <Opinion
              key={review._id}
              review={review}
              userLogeado={userLogeado}
            ></Opinion>
          ))}
      {profesional?.reviews && profesional?.reviews.length === 0 && (
        <p>0 opiniones hasta el momento</p>
      )}
      {opinionesFiltradas &&
        opinionesFiltradas.slice().reverse().map((review) => (
          <Opinion
            key={review._id}
            review={review}
            userLogeado={userLogeado}
          ></Opinion>
        ))}
    </div>
  );
};

export default ListaOpiniones;
