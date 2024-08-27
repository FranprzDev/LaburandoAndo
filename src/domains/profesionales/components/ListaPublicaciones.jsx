import { useDispatch, useSelector } from "react-redux";
import ItemPublicacion from "./ItemPublicacion";
import { useEffect, useState } from "react";
import { fetchWorkerForID } from "../../../slices/actions/workersActions";
import { Link } from "react-router-dom";

const ListaPublicaciones = () => {
  const [loading, setLoading] = useState(true);
  const profesional = useSelector((state) => state.workers.worker);
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  const refreshPosts = () => {
    setLoading(true);
    dispatch(fetchWorkerForID(user._id)).then(() => setLoading(false));
  };

  useEffect(() => {
    refreshPosts();  // Llama a refreshPosts al montar el componente
  }, [dispatch, user._id]);

  return (
    <div className="gap-3 align-items-start d-flex flex-column containerPosts w-100 mt-2 mt-md-4">
      {loading ? (
        <div className="loader-wrapper">
          <div className="spinner"></div>
        </div>
      ) : (
        profesional && profesional.works.length > 0 ? (
          profesional.works.map((work) => (
            <ItemPublicacion key={work._id} work={work} onDelete={refreshPosts} />
          ))
        ) : (
          <div className="mt-5 text-center border px-3 py-5 p-md-5 rounded-2 shadow">
            <p className="mb-4">¡No tienes anuncios de trabajo publicados!</p>
            <Link
              to={"/work/publicar-anuncio"}
              className="px-3 px-md-5 py-2 btnPost rounded-2 text-white border-0"
            >
              Publicar anuncio
            </Link>
          </div>
        )
      )}
    </div>
  );
};

export default ListaPublicaciones;

