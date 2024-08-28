import React from "react";
import { MdDelete } from "react-icons/md";

const ItemCategoria = ({categoria}) => {
  return (
    <div className="cardCategory shadow rounded-2 d-flex flex-column px-2 p-md-2 flex-md-row justify-content-center justify-content-md-between gy-3 align-items-center px-md-3 border">
      <p className="text-center mb-0 text-md-start fw-bold w-100 d-block p-2 rounded-2 align-middle">
        {categoria.name}
      </p>
      <div className="d-flex justify-content-end ">
        <button className=" btn py-0 py-md-1">
          <MdDelete className="fs-1 text-danger" />
        </button>
      </div>
    </div>
  );
};

export default ItemCategoria;
