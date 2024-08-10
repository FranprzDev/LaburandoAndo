import React from "react";
import { get, useForm } from "react-hook-form";
import "../../styles/registroPasoTres.css";
import Foto from "../../img/FotoPerfil.jpg";
import { Col, Container, Row } from "react-bootstrap";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { createProfessional, getProfessional, setAditionalValues } from "../../slice/registerSlice";

const RegistroPasoTres = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(setAditionalValues(data))
    dispatch(createProfessional())
  };

  return (
    <Container className="mx-1 my-5 p-3 mx-sm-auto border">
      <section>
        <h1>Añade datos a tu perfil!</h1>
        <p>Completá los datos que se muestran a continuación.</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row className="d-flex justify-content-center align-items-center">
            <Col md={6} className="d-flex justify-content-center flex-column">
              <label className="fs-5"><FaLocationDot/>Ubicación: <span className="optional-text fs-6">(Opcional)</span></label>
              <input type="text" className=" form-control" {...register("adress")} />
              <label className="fs-5"><FaWhatsapp/>WhatsApp: <span className="optional-text fs-6">(Opcional)</span></label>
              <input
                type="text"
                className="form-control input-optionals"
                {...register("phone", {
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Por favor, introduce un número válido",
                  },
                })}
              />
              {errors.whatsapp && <p>{errors.whatsapp.message}</p>}
            </Col>
            <Col md={6} className="d-flex justify-content-center flex-column">
              <div className="text-center d-flex flex-column justify-content-center align-items-center position-relative">
                <img src={Foto} className="img-fluid perfilImg mb-3 rounded-circle" alt="Foto de perfil" />
                <input
                  className="d-none"
                  type="file"
                  name="FotoPerfil"
                  id="FotoPerfil"
                  accept="image/png, image/jpeg"
                />
                <label htmlFor="FotoPerfil" className="upload-button">
                  +
                </label>
              </div>
            </Col>
            <div className="text-center d-flex justify-content-end gap-2">
              <button className="btn btn-Profesional mt-4 fs-4" type="submit">
                Crear cuenta
              </button>
            </div>
          </Row>
        </form>
      </section>
    </Container>
  );
};

export default RegistroPasoTres;