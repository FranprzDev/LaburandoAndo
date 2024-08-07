import Filtros from "../components/profesionales/Filtros";
import ListaPublicaciones from "../components/profesionales/ListaPublicaciones";
import "../styles/profesionales.css"

const Profesionales = () => {
    return (
        <section className='mainSection py-2 pb-md-5 pt-md-4 container'>
            <div className="row gap-1 justify-content-center">
                <article className=" mb-2 mb-md-3">
                    <h1>Profesionales a tu alcance</h1>
                </article>
                <article className="col-lg-3">
                    <Filtros></Filtros>
                </article>
                <article className="col-lg-8 col-xl-7">
                    <ListaPublicaciones></ListaPublicaciones>
                </article>
            </div>
            
        </section>
    );
};

export default Profesionales;