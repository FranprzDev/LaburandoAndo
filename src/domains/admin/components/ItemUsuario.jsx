import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";

const ItemUsuario = () => {
  return (
    <>
      {/* el div a continuacion se debe repetir por cada profesional/cliente 
      se debe filtrar el tipo de usuario (profesional o cliente) 
      traer nombre y email, y agregarlo en la etiqueta p correspondiente 
      El tipo de usuario no es necesario listarlo en la card porque esta como titulo en 
      la page que llama a este componenete*/}

      <div className="row ms-1 cardMessage shadow rounded-2 p-2 pt-md-3 px-md-3 border">
        <div className="col-9 d-flex flex-column flex-md-row justify-content-around">
          <p className="fw-bold mb-0 ">nombre</p>
          <p className="mb-0">mail</p>
        </div>
        <div className="col-3 d-flex justify-content-end">
          <button className="btn btn-warning me-3">
            <RiEdit2Fill className="fs-5" />
          </button>
          <button className="btn btn-danger">
            <MdDelete className="fs-5" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemUsuario;
