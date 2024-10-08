import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../../../slices/actions/categoryActions";
import useAlert from "../../../hooks/useAlertHook";

const ItemCategoria = ({categoria}) => {

  const dispatch = useDispatch()
  const {customAlert, autoCloseAlert} = useAlert()
  const handleDelete = (id) => {
    customAlert('¿Estas seguro que quieres borrar esta categoria?', () => {
      dispatch(deleteCategory(id))
      autoCloseAlert('Categoria Eliminada','success')
    }) 
  }

  return (
    <div className="cardCategory shadow rounded-2 d-flex flex-column px-2 p-md-2 flex-md-row justify-content-center justify-content-md-between gy-3 align-items-center px-md-3 border">
      <p className="text-center mb-0 text-md-start fw-bold w-100 d-block p-2 rounded-2 align-middle">
        {categoria.name}
      </p>
      <div className="d-flex justify-content-end ">
        <button className=" btn py-0 py-md-1">
          <MdDelete onClick={() => handleDelete(categoria._id)} className="fs-1 text-danger" title="eliminar categoría"/>
        </button>
      </div>
    </div>
  );
};

export default ItemCategoria;
