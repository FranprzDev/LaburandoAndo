import React, { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import "../../styles/registroPasoTres.css";

import { Col, Container, Row } from "react-bootstrap";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  createProfessional,
  setAditionalValues,
} from "../../slice/registerSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import ImageUploader from "../../components/Common/ImageUploader";
import { useCloudinary } from "../../hooks/useCloudinaryHook";

const RegistroPasoTres = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const type = useSelector((state) => state.register.form.type);

  const state = useSelector((state) => state.register);

  const { loading } = useCloudinary();
  const load = useMemo(() => loading, [loading]);

  useEffect(() => {
    if (state && state.stateSync === "error") {
      Swal.fire({
        icon: "error",
        title: "No se pudo iniciar sesión",
        text: "Los datos ingresadodsdsdss no son correctos.",
      });
    }
    if (state && state.stateSync === "exitoso" && type === "Professional") {
      Swal.fire({
        icon: "success",
        title: "Se creo tu cuenta, inicia sesión para poder acceder al panel.",
      });
      navigate("../../auth/login");
    }
  }, [state]);

  const onSubmit = (data) => {
    dispatch(setAditionalValues(data));
    
    if (type === "Professional") {
      dispatch(createProfessional());
    }
  };

  return (
    <Container className="py-3 py-md-5 px-2 mx-sm-auto mainSection">
      <div className="text-md-center mx-auto d-flex flex-column align-items-center justify-content-center">
        <h1>Añade datos a tu perfil</h1>
        <p>Completá los datos que se muestran a continuación.</p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border p-2 p-md-3 px-lg-5 formRegisterThree rounded-2 shadow"
        >
          <Row className="d-flex justify-content-center align-items-center">
            <Col lg={8} className="d-flex justify-content-center flex-column">
              <div className="mb-2">
                <label
                  htmlFor="location"
                  className="form-label d-flex align-items-center gap-1"
                >
                  <FaLocationDot className="fs-4 text-secondary" />
                  <span className="fw-medium">Ubicación</span>{" "}
                  <span className="optional-text">(Opcional)</span>
                </label>
                <input
                  id="location"
                  type="text"
                  className=" form-control input"
                  {...register("adress")}
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="wpp"
                  className="form-label d-flex align-items-center gap-1"
                >
                  <FaWhatsapp className="fs-4 text-success" />
                  <span className="fw-medium">WhatsApp</span>{" "}
                  <span className="optional-text">(Opcional)</span>
                </label>
                <input
                  id="wpp"
                  type="text"
                  className="form-control input-optionals input"
                  {...register("phone", {
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Por favor, introduce un número válido",
                    },
                  })}
                />
                {errors.whatsapp && <p>{errors.whatsapp.message}</p>}
              </div>
            </Col>
            <Col lg={4} className="d-flex justify-content-center flex-column">
                  <ImageUploader/>
            </Col>
            <div className="text-center d-flex justify-content-end gap-2">
              <button className="btn btnCreateAccount mt-lg-4" type="submit" disabled={load}>
                Crear cuenta
              </button>
            </div>
          </Row>
        </form>
      </div>
    </Container>
  );
};

export default RegistroPasoTres;
