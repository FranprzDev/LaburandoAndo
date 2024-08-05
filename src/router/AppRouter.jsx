
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import RegistroPasoUno from '../components/RegistroPasoUno'
import PerfilLayout from "../components/PerfilLayout";
import MainLayout from "../components/MainLayout";
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
            </PerfilLayout>
          }
        />
        <Route path='/registropasouno' element={<RegistroPasoUno></RegistroPasoUno>}/>
        <Route path='/login' element={<Login></Login>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
