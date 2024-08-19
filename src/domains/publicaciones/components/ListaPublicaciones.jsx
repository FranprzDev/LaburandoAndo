import React from 'react';
import CardPublicacion from './CardPublicacion';

const ListaPublicaciones = ({ selectedCategory }) => {
    return (
        <div className='d-flex flex-column gap-3'>
            <CardPublicacion selectedCategory={selectedCategory} />
        </div>
    );
};

export default ListaPublicaciones;
