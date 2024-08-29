import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteWorker } from "../../../slices/actions/workersActions";

const ItemUsuario = ({ user, profesional }) => {

  const dispatch = useDispatch()

  const handleDelete = (id) => {
    console.log(id)
    // if(user.role)
    // {
    //   dispatch(deleteWorker(id))
    // }
  }

  return (
    <>
      <div className="row ms-1 cardMessage shadow rounded-2 p-2 pt-md-3 px-md-3 border">
        <div className="col-9 d-flex flex-column flex-md-row justify-content-start ">
          <p className="fw-bold mb-0 me-5">{user?.fullname}</p>
          <p className="mb-0">{user?.mail}</p>
        </div>
        <div className="col-3 d-flex justify-content-end">
          <button className="btn btn-warning me-3">
            <RiEdit2Fill className="fs-5" />
          </button>
          <button className="btn btn-danger">
            <MdDelete className="fs-5" onClick={handleDelete(user._id)} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemUsuario;
