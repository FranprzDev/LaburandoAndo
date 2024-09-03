import { useSelector } from 'react-redux';
import ListaPublicaciones from '../components/ListaPublicaciones';
import "../styles/min/publicacionesProfesional.min.css";

const PublicacionesProfesional = () => {

    const user = useSelector((state) => state.auth.user);

    return (
        <section className="container-fluid px-2 px-lg-5 py-3 py-md-5 mainSection">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">{user?.fullname}</li>
            <li className="breadcrumb-item text-primary">Mis publicaciones</li>
          </ol>
        </nav>
        <ListaPublicaciones></ListaPublicaciones>
      </section>
    );
};

export default PublicacionesProfesional;