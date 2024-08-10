import React from 'react';
import CardPublicacion from './CardPublicacion';

const ListaPublicaciones = () => {
    return (
        <div className='d-flex flex-column gap-3'>
            <CardPublicacion></CardPublicacion>
        </div>
    );
};

export default ListaPublicaciones;