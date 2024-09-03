import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../domains/auth/pages/Login";
import RegistroPasoUno from "../domains/auth/pages/RegistroPasoUno";
import RegistroPasoDos from "../domains/auth/pages/RegistroPasoDos";
import RegistroPasoTres from "../domains/auth/pages/RegistroPasoTres";

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
