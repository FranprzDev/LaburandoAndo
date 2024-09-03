import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Home/styles/home.css"; 

const NecesitasAyuda = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col>
          <h1>¿Necesitas Ayuda?</h1>
          <p>
            Bienvenido a LaburandoAndo, la plataforma para encontrar y contratar
            profesionales independientes. A continuación, te mostramos cómo puedes
            sacar el máximo provecho de nuestra aplicación.
          </p>

          <p className="fw-bold mt-3">1. Cómo Buscar Profesionales</p>
          <ul className="list-unstyled">
            <li>
              Utiliza la opción "Explorar" en la página de inicio para buscar
              profesionales en diversas categorías.
            </li>
            <li>
              Puedes filtrar los resultados según tu ubicación y las habilidades
              específicas que necesites.
            </li>
          </ul>

          <p className="fw-bold mt-3">2. Cómo Publicar un Anuncio</p>
          <ul className="list-unstyled">
            <li>
              Si eres un profesional, regístrate en nuestra plataforma y completa tu
              perfil.
            </li>
            <li>
              Una vez registrado, podrás publicar anuncios sobre los servicios que
              ofreces.
            </li>
          </ul>

          <p className="fw-bold mt-3">3. Cómo Contactar a un Profesional</p>
          <ul className="list-unstyled">
            <li>
              Después de encontrar un profesional adecuado, puedes contactarlo
              directamente a través de la plataforma.
            </li>
            <li>
              Asegúrate de discutir los detalles del servicio y acordar los términos
              antes de proceder.
            </li>
          </ul>

          <p className="fw-bold mt-3">4. Contacto y Asistencia Adicional</p>
          <p>
            Si tienes más preguntas, consulta nuestra sección de "Contacto" para obtener respuestas a las consultas comunes sobre el uso
            de la plataforma. Para obtener asistencia adicional, no dudes en contactarnos a través del enlace "Contacto" al pie de la página.
          </p>
          <div className="text-center mt-4">
            <Link to="/contacto">
              <Button  className="btnContact border-black">Contactar</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NecesitasAyuda;
