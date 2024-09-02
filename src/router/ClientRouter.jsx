import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Profesionales from '../domains/publicaciones/pages/Profesionales';
import Home from '../pages/Home/Home';
import Nosotros from '../pages/AboutUs/Nosotros';
import DetallePublicacion from '../domains/publicaciones/pages/DetallePublicacion';
import Contacto from '../pages/Contacto/Contacto';
import Error404 from '../pages/Error404/Error404';
import PoliticaPrivacidad from '../pages/TerminosCondiciones/PoliticasYPrivacidad';
import CondicionesUsoCliente from '../pages/TerminosCondiciones/CondicionesUsoCliente';
import CondicionesUsoProfesional from '../pages/TerminosCondiciones/CondicionesUsoProfesional';

const ClientRouter = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profesionales" element={<Profesionales />} />
        <Route path="/detalle/:id" element={<DetallePublicacion />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto></Contacto>} />
        <Route path="/politicas" element={<PoliticaPrivacidad />} />
        <Route path="/condiciones-profesional" element={<CondicionesUsoCliente />} />
        <Route path="/condiciones-cliente" element={<CondicionesUsoProfesional />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </MainLayout>
  );
};

export default ClientRouter;
