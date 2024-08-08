import React from "react";
import "../styles/Nosotros.css";

const Nosotros = () => {
  return (
    <>
      <div className="container">
        <div className="row mb-5 text-center g-5">
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

        <div className="row text-center mb-5">
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

        <div className="row text-center ">
          <h1>Fundadores</h1>

          <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center card-fundadores">
            <div className="col">
              <div className="card h-100">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h3 className="card-title">Bruno Madozzo</h3>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary">links</small>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h3 className="card-title">Francisco Perez</h3>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary">links</small>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h3 className="card-title">Julian Martin</h3>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary">links</small>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h3 className="card-title">Nicolas Cosme</h3>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary">links</small>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h3 className="card-title">Flavia Walther</h3>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary">links</small>
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
