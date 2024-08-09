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
<<<<<<< HEAD
import Login from "../pages/AuthPages/Login";
import { RegisterProvider } from "../Context/registerContext";
import RegistroPasoDos from "../pages/AuthPages/RegistroPasoDos";
=======
import Profesionales from '../pages/Profesionales'
import { BiLogIn } from 'react-icons/bi'
import Login from '../pages/Login'

>>>>>>> a63af0b3aebd5bbe33770eacfe523a21dbe2c6b9

const AppRouter = () => {
  return (
    <BrowserRouter>
<<<<<<< HEAD
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
=======
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
>>>>>>> a63af0b3aebd5bbe33770eacfe523a21dbe2c6b9
    </BrowserRouter>
  );
};

export default AppRouter;
