import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import logo from '../img/Logo.jpg';
import '../styles/estiloDetalleDelProfesional.css'
import { FaStar } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { FaWhatsapp } from "react-icons/fa";
import { Container } from 'react-bootstrap';
import Opiniones from '../components/Opiniones';

const DetalleDelProfesional = () => {
  return (
    <Container>
    <section className='d-flex mb-4 justify-content-center contenedor-detalle'>
      <Card className='me-3 mt-3 card-detalle'  >
      <div>
      <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
        <Image src={logo} roundedCircle  className='img-circulo-card '/>
        <Card.Title >Juan Perez</Card.Title>
        <Card.Text>
          Yerba Buena, Tucumán
        </Card.Text> 
        <Card.Subtitle className="mb-2 text-muted">
          <div className=' d-flex'>
          <FaStar className='me-2 text-warning' />
          <p>4.0</p>
          </div>
          <p>10 Valoraciones</p>
          </Card.Subtitle>
          <Button variant="success">
            <FaWhatsapp className='me-2' />
            Contactar
          </Button>
      </Card.Body>
      </div>
    </Card>
    <div className='mt-3'>
    <Button variant='danger' className='btn-descripcion-profesional opacity-50'  size="md">
          Profesor particular
        </Button>
        <h2 className='my-2'>Clases Particulares</h2>
        <h3>Descripción del anuncio</h3>
        <hr />
        <p>Hola me llamo Juan Perez y tengo 25 años. <br />Brindo clases a alumnos que deseen capacitarse en inglés</p>
    </div>
    </section>
    <Opiniones/>
    </Container>
  )
}

export default DetalleDelProfesional

