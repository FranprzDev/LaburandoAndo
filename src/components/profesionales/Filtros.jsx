import React from 'react';
import FormFiltros from './FormFiltros';

const Filtros = () => {
    return (
        <div className='h-100'>
            <p className='mb-1'>Filtrar por:</p>
            <FormFiltros></FormFiltros>
        </div>
    );
};

export default Filtros;