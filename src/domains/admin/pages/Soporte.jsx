import ListaMensajesSoporte from "../components/ListaMensajesSoporte";
import "../styles/soporte.css";

const Soporte = () => {
    return (
        <section className="container-fluid px-2 px-lg-5 py-3 py-md-5 mainSection containerProfile">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              Admin
            </li>
            <li className="breadcrumb-item text-primary">
              Soporte
            </li>
          </ol>
        </nav>
        <p className="">Mensajes</p>
        <ListaMensajesSoporte></ListaMensajesSoporte>
      </section>
    );
};

export default Soporte;