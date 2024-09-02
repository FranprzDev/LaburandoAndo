import React from "react";
import ItemUsuario from "./ItemUsuario";

const ListaUsuarios = ({ users, profesionales }) => {
  return (
    <div className="gap-2 align-items-center d-flex flex-column containerMessages w-100 mt-2">
      {users
        ? users.map((user) => <ItemUsuario key={user._id} user={user} />)
        : profesionales
        ? profesionales.map((user) => (
            <ItemUsuario key={user._id} user={user} />
          ))
        : "No hay datos por mostrar"}
    </div>
  );
};

export default ListaUsuarios;
