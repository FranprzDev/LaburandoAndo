import FormFiltros from './FormFiltros';

const Filtros = ({ onCategoryChange }) => {
    return (
        <div className='h-100'>
            <FormFiltros onCategoryChange={onCategoryChange} />
        </div>
    );
};

export default Filtros;
