import { Route, Routes } from "react-router-dom";
import RegistroPasoUno from "../pages/AuthPages/RegistroPasoUno";
import RegistroPasoDos from "../pages/AuthPages/RegistroPasoDos";
import RegistroPasoTres from "../pages/AuthPages/RegistroPasoTres";
import Login from "../pages/AuthPages/Login";
import MainLayout from "../components/MainLayout";

const AuthRouter = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegistroPasoUno />} />
        <Route path="/register2" element={<RegistroPasoDos />} />
        <Route path="/register3" element={<RegistroPasoTres />} />
      </Routes>
    </MainLayout>
  );
};

export default AuthRouter;
