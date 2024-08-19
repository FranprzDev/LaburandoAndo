import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Profesionales from '../domains/publicaciones/pages/Profesionales';
import Home from '../pages/Home/Home';
import Nosotros from '../pages/AboutUs/Nosotros';
import DetallePublicacion from '../domains/publicaciones/pages/DetallePublicacion';
import Contacto from '../pages/Contacto/Contacto';

const ClientRouter = () => {
    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/profesionales' element={<Profesionales/>}/>
                <Route path="/detalle/:id" element={<DetallePublicacion />} />
                <Route path='/nosotros' element={<Nosotros/>}/>
                <Route path='/contacto' element={<Contacto></Contacto>}/>
            </Routes>
        </MainLayout>
    )
}

export default ClientRouter;
