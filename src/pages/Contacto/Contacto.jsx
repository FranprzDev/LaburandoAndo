import React from 'react'
import FormularioContacto from './components/FormularioContacto'

const Contacto = () => {
  return (
    <section className='mainSection container'>
      <div className='my-5'>
      <h1>¿En qué podemos Ayudarte?</h1>
      <h2 className='my-3'>Hablemos por mail</h2>
      </div>
      <FormularioContacto/>
    </section>
  )
}

export default Contacto
