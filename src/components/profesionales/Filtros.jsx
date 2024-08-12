import React from 'react';
import FormFiltros from './FormFiltros';

const Filtros = ({ onCategoryChange }) => {
    return (
        <div className='h-100'>
            <p className='mb-1'>Filtrar por:</p>
            <FormFiltros onCategoryChange={onCategoryChange} />
        </div>
    );
};

export default Filtros;
