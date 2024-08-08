import React from "react";
import "../styles/Nosotros.css";
import { Link } from "react-router-dom";
import flaviaImage from "../img/flavia.jpeg";
import franciscoImage from "../img/francisco.jpeg";
import nicolasImage from "../img/nicolas.jpeg";
import julianImage from "../img/julian.jpeg";
import brunoImage from "../img/bruno.jpeg";

const Nosotros = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row text-center g-5 color-fondo-somos px-5 py-5">
          <h1>Quienes somos?</h1>
          <div className="col-md-6 align-items-center mt-5 text-start">
            <h6 className="negrita">
              <span className="texto-ampliado">LaburandoAndo</span> es una
              innovadora plataforma digital que conecta a proveedores de
              servicios con clientes a nivel global, facilitando la prestación
              de servicios de manera eficiente y accesible. Nuestra empresa se
              especializa en ofrecer un entorno intuitivo y seguro donde los
              usuarios pueden registrarse, listar sus servicios, y establecer
              conexiones significativas con quienes buscan soluciones
              específicas. Con un enfoque en la calidad y la confianza,
              LaburandoAndo permite a los proveedores de servicios crear
              perfiles detallados, recibir valoraciones y construir una
              reputación sólida dentro de la comunidad. Al mismo tiempo, los
              clientes pueden explorar una amplia gama de servicios, comparar
              opciones y seleccionar a los proveedores que mejor se ajusten a
              sus necesidades y expectativas.
            </h6>
          </div>

          <div className="col-md-6 align-items-center mt-5 text-start">
            <h6 className="negrita">
              En <span className="texto-ampliado">LaburandoAndo</span>,
              impulsamos el trabajo al conectar a proveedores de servicios con
              clientes a través de una plataforma accesible e innovadora.
              Facilitamos oportunidades de empleo y emprendimientos. Nuestro
              objetivo es empoderar a nuestros usuarios para que puedan alcanzar
              su máximo potencial y contribuir al desarrollo económico y social
              de sus comunidades.
            </h6>
          </div>
        </div>

        <div className="row text-center py-5 px-5 color-fondo-mision-vision">
          <h1>Nuestros Principios</h1>

          <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h2 className="card-title mb-4">Misión</h2>
                  <p className="card-text">
                    Nuestra misión es empoderar a los individuos y las empresas
                    mediante la creación de una plataforma confiable y accesible
                    donde los usuarios puedan registrarse y ofrecer sus
                    servicios. Nos comprometemos a facilitar conexiones
                    significativas entre proveedores de servicios y clientes,
                    asegurando la calidad, la transparencia y la satisfacción
                    mutua. Fomentamos el crecimiento profesional y personal de
                    nuestros usuarios, brindando las herramientas y el soporte
                    necesarios para que alcancen su máximo potencial en un
                    entorno seguro y colaborativo.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h2 className="card-title mb-4">Visión</h2>
                  <p className="card-text">
                    Ser la plataforma líder a nivel global en la conexión de
                    proveedores de servicios con clientes, transformando la
                    manera en que las personas encuentran y brindan servicios a
                    través de la innovación continua, la confianza y la
                    excelencia. Nos esforzamos por crear un ecosistema inclusivo
                    y dinámico donde cada usuario, independientemente de su
                    ubicación, pueda alcanzar su máximo potencial y contribuir
                    al crecimiento económico y social de sus comunidades.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row text-center py-5 px-5 color-fondo-fundadores">
          <h1>Fundadores</h1>

          <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center card-fundadores">
            <div className="col">
              <div className="card h-100">
                <img
                  src={brunoImage}
                  className="card-img-top h-100"
                  alt="foto de Bruno Madozzo"
                />
                <div className="card-body">
                  <h3 className="card-title">Bruno Madozzo</h3>
                </div>
                <div className="card-footer d-flex justify-content-evenly">
                  <Link
                    to="https://github.com/brunomry"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-2x fa-github"></i>
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/bruno-madozzo/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-2x fa-linkedin"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100">
                <img
                  src={franciscoImage}
                  className="card-img-top h-100"
                  alt="foto de Francisco Perez"
                />
                <div className="card-body">
                  <h3 className="card-title">Francisco Perez</h3>
                </div>
                <div className="card-footer d-flex justify-content-evenly">
                  <Link
                    to="https://github.com/FranprzDev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-2x fa-github"></i>
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/franprzdev/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-2x fa-linkedin"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100">
                <img
                  src={julianImage}
                  className="card-img-top h-100"
                  alt="foto de Julian Martin"
                />
                <div className="card-body">
                  <h3 className="card-title">Julian Martin</h3>
                </div>
                <div className="card-footer d-flex justify-content-evenly">
                  <Link
                    to="https://github.com/Juliancito1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-2x fa-github"></i>
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/julian-martin-/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-2x fa-linkedin"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100">
                <img
                  src={nicolasImage}
                  className="card-img-top h-100"
                  alt="foto de Nicolas Cosme"
                />
                <div className="card-body">
                  <h3 className="card-title">Nicolas Cosme</h3>
                </div>
                <div className="card-footer d-flex justify-content-evenly">
                  <Link
                    to="https://github.com/CosmeNicolas"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-2x fa-github"></i>
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/cosmenicolas?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-2x fa-linkedin"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100">
                <img
                  src={flaviaImage}
                  className="card-img-top h-100"
                  alt="foto Flavia Walther"
                />
                <div className="card-body">
                  <h3 className="card-title">Flavia Walther</h3>
                </div>
                <div className="card-footer d-flex justify-content-evenly">
                  <Link
                    to="https://github.com/flawalther"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-2x fa-github"></i>
                  </Link>

                  <Link
                    to="https://linkedin.com/in/flavia-walther-154144216"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-2x fa-linkedin"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nosotros;
