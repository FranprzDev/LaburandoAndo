import React from "react";
import ItemCategoria from "./ItemCategoria";
import { useSelector } from "react-redux";

const ListaCategorias = () => {
  const category = useSelector((state) => state.categories.categories);

  return (
    <div className="d-flex justify-content-xxl-center flex-column gap-2 flex-md-row flex-wrap">
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
