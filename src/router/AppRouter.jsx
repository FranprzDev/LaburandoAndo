import { BrowserRouter, Route, Routes } from "react-router-dom";
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
          path="/mi-perfil"
          element={
            <PerfilLayout>
            </PerfilLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
