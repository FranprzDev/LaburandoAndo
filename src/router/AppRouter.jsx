import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PerfilProfesional from "../components/PerfilProfesional";
import PerfilLayout from "../components/PerfilLayout";
import MainLayout from "../components/MainLayout";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route 
          path='/' 
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          } 
        />
        <Route
          path="/miperfil"
          element={
            <PerfilLayout>
              <PerfilProfesional></PerfilProfesional>
            </PerfilLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
