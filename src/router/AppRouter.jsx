
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import RegistroPasoUno from '../components/RegistroPasoUno'
import PerfilLayout from "../components/PerfilLayout";
import MainLayout from "../components/MainLayout";
import PublicacionProfesional from "../components/profesional/PublicacionProfesional";
import PerfilProfesional from "../components/profesional/PerfilProfesional";
import Login from '../pages/Login'

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
        <Route
          path="/publicar-anuncio"
          element={
            <PerfilLayout>
              <PublicacionProfesional></PublicacionProfesional>
            </PerfilLayout>
          }
        />
        <Route path='/registropasouno' element={<RegistroPasoUno></RegistroPasoUno>}/>
        <Route path='/login' element={
          <MainLayout>
            <Login/>
          </MainLayout>
          }/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
