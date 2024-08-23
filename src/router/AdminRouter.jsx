import React from "react";
import PerfilLayout from "../layout/PerfilLayout";
import { Route, Routes } from "react-router-dom";
import Clientes from "../domains/admin/pages/Clientes";
import Profesionales from "../domains/admin/pages/Profesionales";
import Categorias from "../domains/admin/pages/Categorias";
import Soporte from "../domains/admin/pages/Soporte";

const AdminRouter = () => {
  return (
    <PerfilLayout>
      <Routes>
        <Route path="/clientes" element={<Clientes></Clientes>} />
        <Route
          path="/profesionales"
          element={<Profesionales></Profesionales>}
        />
        <Route path="/categorias" element={<Categorias></Categorias>} />
        <Route path="/soporte" element={<Soporte></Soporte>} />
      </Routes>
    </PerfilLayout>
  );
};

export default AdminRouter;
