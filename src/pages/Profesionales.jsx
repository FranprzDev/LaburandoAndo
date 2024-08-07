import Filtros from "../components/profesionales/Filtros";
import ListaPublicaciones from "../components/profesionales/ListaPublicaciones";

const Profesionales = () => {
    return (
        <section className='mainSection py-5 container'>
            <div className="row gap-2">
                <article className="text-center">
                    <h1>Profesionales a tu alcance</h1>
                </article>
                <article className="col-md-3 border">
                    <Filtros></Filtros>
                </article>
                <article className="col-md-8 border">
                    <ListaPublicaciones></ListaPublicaciones>
                </article>
            </div>
            
        </section>
    );
};

export default Profesionales;