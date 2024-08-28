import React from "react";
import ItemCategoria from "./ItemCategoria";

const ListaCategorias = () => {
  return (
    <div className="gap-2 align-items-start d-flex flex-column containerMessages w-100 ">
      <ItemCategoria></ItemCategoria>
      <ItemCategoria></ItemCategoria>

      {/* <div className="mt-5 text-center border px-3 py-5 p-md-5 rounded-2 shadow">
          <p className="mb-4">No se agregó ninguna categoría</p>
        </div> */}
    </div>
  );
};

export default ListaCategorias;
