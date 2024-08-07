import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Home from "../pages/Home";
import RegistroPasoUno from "../pages/AuthPages/RegistroPasoUno";
import DetalleDelProfesional from "../pages/DetalleDelProfesional";
import RegistroPasoTres from "../pages/AuthPages/RegistroPasoTres";
import PerfilLayout from "../components/PerfilLayout";
import PublicacionProfesional from "../components/profesional/PublicacionProfesional";
import PerfilProfesional from "../components/profesional/PerfilProfesional";
import Login from "../pages/AuthPages/Login";
import { RegisterProvider } from "../Context/registerContext";
import RegistroPasoDos from "../pages/AuthPages/RegistroPasoDos";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

            <Route path="/register" element={<RegisterProvider><RegistroPasoUno /></RegisterProvider>} />
            <Route path="/register2" element={<RegisterProvider><RegistroPasoDos /></RegisterProvider>} />
            <Route path="/register3" element={<RegisterProvider><RegistroPasoTres /></RegisterProvider>} />

          {/* <Route
            path="/mi-perfil"
            element={
              <PerfilLayout>
                <PerfilProfesional></PerfilProfesional>
              </PerfilLayout>
            }
          />
          <Route
            path="/publicar-anuncio"
            element={
              <PerfilLayout>
                <PublicacionProfesional></PublicacionProfesional>
              </PerfilLayout>
            }
          />
          <Route
            path="/registropasouno"
            element={<RegistroPasoUno></RegistroPasoUno>}
          />
          <Route
            path="/registropasotres"
            element={<RegistroPasoTres></RegistroPasoTres>}
          /> */}

          {/* <Route path="/registropasotres" element={<RegistroPasoTres />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default AppRouter;
