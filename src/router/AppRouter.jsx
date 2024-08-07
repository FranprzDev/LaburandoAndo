
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import RegistroPasoUno from '../components/RegistroPasoUno'
import DetalleDelProfesional from '../pages/DetalleDelProfesional'
import RegistroPasoTres from '../pages/RegistroPasoTres'
import PerfilLayout from "../components/PerfilLayout";
import MainLayout from "../components/MainLayout";
import PublicacionProfesional from "../components/profesional/PublicacionProfesional";
import PerfilProfesional from "../components/profesional/PerfilProfesional";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/detalleDelProfesional' element={<DetalleDelProfesional/>}/>
        <Route path='/registropasouno' element={<RegistroPasoUno></RegistroPasoUno>}/>
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
        <Route path='/registropasouno' element={
          <MainLayout>
            <RegistroPasoUno></RegistroPasoUno>
          </MainLayout>
          }/>
        <Route path='/registropasotres' element={
          <MainLayout>
            <RegistroPasoTres></RegistroPasoTres>
          </MainLayout>
          }/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
