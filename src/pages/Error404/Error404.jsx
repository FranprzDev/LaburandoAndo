import { Button } from 'react-bootstrap'
import Error from '../../img/Error404.jpeg'

const Error404 = () => {
  return (
    <section className='text-center my-5'>
    <div>
        <img src={Error} className='img-fluid' alt='imagen error 404' />
    </div>
    <h2 className='fst-italic fw-bold'>"Parece que tu pala no encontró la página que buscabas. ¡A seguir cavando en el lugar correcto!"</h2>
    <Button className='btn btn-dark'>Volver al Inicio</Button>
    </section>
  )
}

export default Error404