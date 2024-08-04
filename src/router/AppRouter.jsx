import { BrowserRouter, Route, Routes } from "react-router-dom";
import PerfilLayout from "../components/PerfilLayout";
import MainLayout from "../components/MainLayout";
import Home from "../pages/Home";
import PerfilProfesional from "../components/profesional/PerfilProfesional";

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
          path="/mi-perfil"
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
