import { useEffect } from "react";
import ListaUsuarios from "../components/ListaUsuarios";
import { useDispatch, useSelector } from "react-redux";
import { getWorkers } from "../../../slices/actions/workersActions";

const Profesionales = () => {
  const profesionales = useSelector((state) => state.workers.workers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorkers());
  }, []);

  return (
    <section className="container-fluid px-2 px-lg-5 py-3 py-md-5 mainSection containerProfile">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">Admin</li>
          <li className="breadcrumb-item text-primary">Profesionales</li>
        </ol>
      </nav>
      <ListaUsuarios profesionales={profesionales} />
    </section>
  );
};

export default Profesionales;
