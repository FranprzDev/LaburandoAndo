import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PerfilLayout from '../components/PerfilLayout'
import PerfilProfesional from '../components/profesional/PerfilProfesional'
import PublicacionProfesional from '../components/profesional/PublicacionProfesional'

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