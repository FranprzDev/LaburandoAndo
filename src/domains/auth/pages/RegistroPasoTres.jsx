import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import "../styles/min/registroPasoTres.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCloudinary } from "../../../hooks/useCloudinaryHook";
import { createProfessional } from "../../../slices/actions/registerActions";
import { changePhoto, resetProfessional, setAditionalValues } from "../../../slices/registerSlice";
import Loader from "../../../components/loaders/Loader";
import useAlert from "../../../hooks/useAlertHook";

const RegistroPasoTres = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const type = useSelector((state) => state.register.form.type);
  const statusProfessional = useSelector((state) => state.register.statusProfessional);
  const { loading, setLoading } = useCloudinary();

  const { uploadImage } = useCloudinary();
  const { autoCloseAlert } = useAlert();

  const load = useMemo(() => loading ? <Loader /> : null, [loading]);
  
  const handleFileChange = async (e) => {
    setLoading(true)
    setFile(e.target.files[0]);
    const file = e.target.files[0];
    
    if (file) {
      const link = await uploadImage(file);
      link && dispatch(changePhoto(link));
      setLoading(false)
    }
  };

  const onSubmit = (data) => {
    dispatch(setAditionalValues(data));

    if (type === "Professional") {
      dispatch(createProfessional());
      
    }
  };

  useEffect(() => {

    if (statusProfessional === "exitoso") {
      autoCloseAlert("Cuenta creada con éxito", "success");
      navigate("/auth/login");
    }
    if (statusProfessional === "error") {
      autoCloseAlert("Hubo un error al crear la cuenta", "error");
      navigate("/auth/register");
    }
    dispatch(resetProfessional());
  }, [statusProfessional]);

  return (
    <Container className="py-3 py-md-5 px-2 mx-sm-auto mainSection">
      {
       load
      }
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
                  title="Ingresa tu ciudad y provincia actual"
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
                  title="Ingresa tu número de WhatsApp"
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
              <div className="d-flex align-items-center justify-content-center position-relative mb-3 flex-column">
                <label
                  htmlFor="file-upload"
                  className="btn uploadPlusButton rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "6rem", height: "6rem" }}
                >
                  <input
                    id="file-upload"
                    type="file"
                    title="Sube una imagen profesional de ti"
                    className={`d-none ${
                      !file ? "uploadButtonDefaultValue" : ""
                    }`}
                    accept="image/jpeg, image/png"
                    onChange={handleFileChange}
                    defaultValue={file ? file.name : ""}
                  />
                  <div className="position-relative">
                    <div
                      className="position-absolute"
                      style={{
                        top: "0px",
                        left: "0px",
                        transform: "translate(50%, 50%)",
                      }}
                    >
                      <div className="uploadButton text-white rounded-circle p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="bi bi-plus-lg"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5v14" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </label>
                {file && <div className="mt-2 text-center">{file.name}</div>}
              </div>
            </Col>
            <div className="text-center d-flex justify-content-end gap-2">
              <button className="btn btnCreateAccount mt-lg-4" type="submit" disabled={loading}>
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
