import React from 'react';
import FormularioPerfilProf from './FormularioPerfilProf';

const PerfilProfesional = () => {
    return (
       <section className='container-fluid px-2 px-lg-5 py-5 mainSection myProfile'>
        <h1>Mi Perfil</h1>
        <FormularioPerfilProf></FormularioPerfilProf>
       </section> 
    );
};

export default PerfilProfesional;