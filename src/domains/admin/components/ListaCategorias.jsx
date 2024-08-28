import React, { useEffect } from "react";
import ItemCategoria from "./ItemCategoria";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../slices/actions/categoryActions";

const ListaCategorias = () => {

  const categorias = useSelector((state) => state.categories.categories)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  console.log(categorias)
  

  return (
    <div className="gap-2 align-items-start d-flex flex-column containerMessages w-100 ">
      {categorias.map((categoria => (<ItemCategoria categoria={categoria} key={categoria._id}></ItemCategoria>)))}
      
      

      {/* <div className="mt-5 text-center border px-3 py-5 p-md-5 rounded-2 shadow">
          <p className="mb-4">No se agregó ninguna categoría</p>
        </div> */}
    </div>
  );
};

export default ListaCategorias;
