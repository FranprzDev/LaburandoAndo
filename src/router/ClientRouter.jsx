import Home from '../pages/Home';
import Profesionales from '../pages/Profesionales';
import DetalleDelProfesional from '../pages/DetalleDelProfesional';
import { Routes, Route } from 'react-router-dom';
import PerfilLayout from '../components/PerfilLayout';

const ClientRouter = () => {
    return (
        <PerfilLayout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/profesionales' element={<Profesionales/>}/>
                <Route path="/detalle" element={<DetalleDelProfesional />} />
            </Routes>
        </PerfilLayout>
    )
}

export default ClientRouter;
