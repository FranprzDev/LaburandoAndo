import { Route, Routes } from 'react-router-dom'
import PerfilLayout from '../layout/PerfilLayout'
import PerfilProfesional from '../domains/profesionales/pages/PerfilProfesional'
import PublicacionProfesional from '../domains/profesionales/pages/PublicacionProfesional'

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