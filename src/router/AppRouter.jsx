import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import DetalleDelProfesional from "../pages/DetalleDelProfesional";
import PerfilLayout from "../components/PerfilLayout";
import PublicacionProfesional from "../components/profesional/PublicacionProfesional";
import PerfilProfesional from "../components/profesional/PerfilProfesional";
import Profesionales from '../pages/Profesionales'
import AuthRouter from "./AuthRouter";

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/profesionales' element={<Profesionales/>}/>
        <Route path="/detalle" element={<DetalleDelProfesional />} />
        <Route path="/mi-perfil" element={<PerfilLayout><PerfilProfesional/></PerfilLayout>}/>
        <Route path="/publicar-anuncio" element={<PerfilLayout><PublicacionProfesional/></PerfilLayout>}/>

        <Route path="/auth/*" element={<AuthRouter/>} />
    </Routes>
  );
};

export default AppRouter;
