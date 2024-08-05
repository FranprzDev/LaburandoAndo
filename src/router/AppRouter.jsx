import { BrowserRouter, Route, Routes } from "react-router-dom";
import PerfilLayout from "../components/PerfilLayout";
import MainLayout from "../components/MainLayout";
import Home from "../pages/Home";
import PublicacionProfesional from "../components/profesional/PublicacionProfesional";

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
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
