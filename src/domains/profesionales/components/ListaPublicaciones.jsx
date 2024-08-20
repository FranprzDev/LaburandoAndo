import ItemPublicacion from "./ItemPublicacion";

const ListaPublicaciones = () => {
    return (
        <div className="d-flex flex-column align-items-center gap-3 containerPosts w-100 mt-4">
            <div className="">

            </div>
            <ItemPublicacion></ItemPublicacion>
            <ItemPublicacion></ItemPublicacion>
            <ItemPublicacion></ItemPublicacion>

        </div>
    );
};

export default ListaPublicaciones;