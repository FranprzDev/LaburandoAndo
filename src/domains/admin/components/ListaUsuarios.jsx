import React, { useState, useEffect } from "react";
import ItemUsuario from "./ItemUsuario";
import Loader from "../../../components/loaders/Loader"; 

const ListaUsuarios = ({ users, profesionales }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if ((profesionales && profesionales.length > 0) || (users && users.length > 0)) {
      setLoading(false);
    } else {
      setLoading(false); 
    }
  }, [profesionales, users]);

  return (
    <div className="gap-3 align-items-start d-flex flex-column containerMessages w-100 mt-2">
      {loading ? (
        <Loader /> 
      ) : profesionales && profesionales.length > 0 ? (
        profesionales.map((user) => (
          <ItemUsuario key={user._id} user={user} />
        ))
      ) : users && users.length > 0 ? (
        users.map((user) => <ItemUsuario key={user._id} user={user} />)
      ) : (
        "No hay datos por mostrar"
      )}
    </div>
  );
};

export default ListaUsuarios;

