import { useSelector } from 'react-redux';

const PublicacionesProfesional = () => {

    const user = useSelector((state) => state.auth.user);

    return (
        <section className="container-fluid px-2 px-lg-5 py-5 mainSection containerProfile">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">{user?.fullname}</li>
            <li className="breadcrumb-item text-primary">Mis publicaciones</li>
          </ol>
        </nav>

      </section>
    );
};

export default PublicacionesProfesional;