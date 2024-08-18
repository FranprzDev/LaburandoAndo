import { Route, Routes } from 'react-router-dom'
import PerfilLayout from '../layout/PerfilLayout'
import PerfilProfesional from '../profesionales/pages/PerfilProfesional'
import PublicacionProfesional from '../profesionales/pages/PublicacionProfesional'

function WorkerRouter() {
  return (
    <PerfilLayout>
        <Routes>
            <Route path="/mi-perfil" element={<PerfilProfesional/>}/>
            <Route path="/publicar-anuncio" element={<PublicacionProfesional/>}/>
        </Routes>
    </PerfilLayout>
  )
}

export default WorkerRouter