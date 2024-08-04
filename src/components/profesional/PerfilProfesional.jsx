import FormularioPerfilProfesional from './FormularioPerfilProfesional';
import "../../styles/perfilProfesional.css"

const PerfilProfesional = () => {
    return (
       <section className='container-fluid px-2 px-lg-5 py-5 mainSection containerProfile'>
        <h1>Mi Perfil</h1>
        <FormularioPerfilProfesional></FormularioPerfilProfesional>
       </section> 
    );
};

export default PerfilProfesional;
