import React, { useEffect } from "react";
import ListaUsuarios from "../components/ListaUsuarios";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../slices/actions/usersActions";

const Clientes = () => {

  const users = useSelector((state) => state.users.users)
  const dispatch = useDispatch()

  useEffect(() => {
   dispatch(getUsers())
  }, [])
  
  console.log(users)

  return (
    <section className="container-fluid px-2 px-lg-5 py-3 py-md-5 mainSection containerProfile">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">Admin</li>
          <li className="breadcrumb-item text-primary">Clientes</li>
        </ol>
      </nav>
      <ListaUsuarios users={users} />
    </section>
  );
};

export default Clientes;
