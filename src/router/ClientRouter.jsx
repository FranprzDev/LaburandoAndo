import Home from '../pages/Home';
import Profesionales from '../pages/Profesionales';
import Nosotros from '../pages/Nosotros';

import DetalleDelProfesional from '../pages/DetalleDelProfesional';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/MainLayout';

const ClientRouter = () => {
    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/profesionales' element={<Profesionales/>}/>
                <Route path="/detalle" element={<DetalleDelProfesional />} />
                <Route path='/nosotros' element={<Nosotros/>}/>
            </Routes>
        </MainLayout>
    )
}

export default ClientRouter;
