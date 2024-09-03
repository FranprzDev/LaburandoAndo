import React, { useEffect } from "react";
import ItemCategoria from "./ItemCategoria";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../slices/actions/categoryActions";

const ListaCategorias = () => {
  const category = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchCategories())
  },[category])

  return (
    <div className="d-flex justify-content-center justify-content-xxl-center flex-column gap-2 flex-md-row flex-wrap">
      {category.length === 0 ? (
        <div className="mt-5 text-center border px-3 py-5 p-md-5 rounded-2 shadow">
          <p className="mb-4">No hay categorías que mostrar.</p>
        </div>
      ) : (
        category.map((categoria) => (
          <ItemCategoria key={categoria._id} categoria={categoria} />
        ))
      )}
    </div>
  );
};

export default ListaCategorias;
