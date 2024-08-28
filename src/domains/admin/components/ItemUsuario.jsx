import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";

const ItemUsuario = () => {
  return (
    <div className="cardMessage shadow rounded-2 justify-content-center justify-content-md-between gy-3 align-items-center p-2 pt-md-3 px-md-3 border">
      <div className="d-flex  justify-content-around">
        <p className="fw-bold">nombre</p>
        <p>mail </p>
        <p>tipo de usuario</p>

        <div className="d-flex  justify-content-center">
          <button className="btn btn-warning me-3">
            <RiEdit2Fill className="fs-5" />
          </button>
          <button className="btn btn-danger">
            <MdDelete className="fs-5" />
          </button>
        </div>
      </div>

      {/*      
      <div className="d-flex  justify-content-around">
        <p className="fw-bold">nombre</p>
        <p>mail </p>
        <p>tipo de usuario</p>
      </div>
      <div className="d-flex  justify-content-center">
        <button className="me-3">aa</button>
        <button>bb</button>
      </div> */}
    </div>
  );
};

export default ItemUsuario;
