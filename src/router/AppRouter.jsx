
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import RegistroPasoUno from '../components/RegistroPasoUno'
import DetalleDelProfesional from '../pages/DetalleDelProfesional'
import RegistroPasoTres from '../pages/RegistroPasoTres'
import PerfilLayout from "../components/PerfilLayout";
import MainLayout from "../components/MainLayout";
import PublicacionProfesional from "../components/profesional/PublicacionProfesional";
import PerfilProfesional from "../components/profesional/PerfilProfesional";
import Profesionales from '../pages/Profesionales'
import { BiLogIn } from 'react-icons/bi'
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
          path='/detalle-profesional' 
          element={
            <MainLayout>
              <DetalleDelProfesional></DetalleDelProfesional>
            </MainLayout>
          } 
        />
        <Route 
          path='/profesionales' 
          element={
            <MainLayout>
              <Profesionales></Profesionales>
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
        <Route path='/registro-paso-uno' element={
          <MainLayout>
            <RegistroPasoUno></RegistroPasoUno>
          </MainLayout>
          }/>
        <Route path='/registro-paso-tres' element={
          <MainLayout>
            <RegistroPasoTres></RegistroPasoTres>
          </MainLayout>
          }/>
          <Route path='/login' element={
          <MainLayout>
            <Login></Login>
          </MainLayout>
          }/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
