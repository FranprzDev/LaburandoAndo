import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../auth/pages/Login";
import RegistroPasoUno from "../auth/pages/RegistroPasoUno";
import RegistroPasoDos from "../auth/pages/RegistroPasoDos";
import RegistroPasoTres from "../auth/pages/RegistroPasoTres";

const AuthRouter = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegistroPasoUno></RegistroPasoUno>} />
        <Route path="/register2" element={<RegistroPasoDos />} />
        <Route path="/register3" element={<RegistroPasoTres />} />
      </Routes>
    </MainLayout>
  );
};

export default AuthRouter;
