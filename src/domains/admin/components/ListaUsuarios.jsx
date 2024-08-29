import React from "react";
import ItemUsuario from "./ItemUsuario";

const ListaUsuarios = ({users}) => {
  return (
    <div className="gap-3 align-items-start d-flex flex-column containerMessages w-100 mt-2">
      {
        users ? users.map((user) =><ItemUsuario key={user._id} user={user} />  ) : "a" 
      }
    </div>
  );
};

export default ListaUsuarios;
