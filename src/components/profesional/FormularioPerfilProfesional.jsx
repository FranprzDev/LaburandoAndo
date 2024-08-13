import { Form } from "react-bootstrap";
import imgUsuario from "../../img/imgUsuario.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { fetchWorkerForID } from "../../slice/workersSlice";
import { useNavigate } from "react-router-dom";

const FormularioPerfilProf = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const [habilitado, setHabilitado] = useState(true); //para manejar disabled de inputs y botones, sirve para fn de editar

  const user = useSelector((state) => state.auth.user);
  const worker = useSelector((state) => state.workers.worker);
  const status = useSelector((state) => state.workers.status);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      dispatch(fetchWorkerForID(user._id));
    } else {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (worker && status === "exitoso") {
      cargarDatosUsuario();
    }
  }, [worker, status]);

  const cargarDatosUsuario = () => {
    setValue("fullname", worker.fullname);
    setValue("mail", worker.mail);
    setValue("phone", worker.phone);
    setValue("address", worker.address);
    setValue("img", worker.img);
  };

  return (
    <Form className="formProfile row gy-3 mt-2 mt-md-5 bg-white shadow rounded-2 px-3 px-xl-5 pb-3 mt-lg-2 pt-4 mt-xl-4 border">
      <div className="col-lg-7">
        <Form.Group className="mb-3">
          <Form.Label
            htmlFor="name"
            className="text-md-center w-100 text-lg-start fw-medium mb-0 fontSizeLabel"
          >
            Nombre y Apellido
          </Form.Label>
          <Form.Control
            type="text"
            id="name"
            className="input px-0 border-start-0 border-end-0 border-top-0 border-bottom rounded-0"
            title="tu nombre y apellido"
            disabled={habilitado}
            {...register("fullname", {
              required: "El nombre y apellido es obligatorio",
              minLength: {
                value: 3,
                message:
                  "El nombre y apellido debe tener como mínimo 3 caracteres",
              },
              maxLength: {
                value: 50,
                message:
                  "El nombre y apellido debe tener como máximo 50 caracteres",
              },
            })}
          />
          <div className="text-danger text-start">{errors.fullname?.message}</div>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label
            htmlFor="email"
            className="text-md-center w-100 text-lg-start fw-medium mb-0 fontSizeLabel"
          >
            Email
          </Form.Label>
          <Form.Control
            type="email"
            id="email"
            className="input px-0 border-start-0 border-end-0 border-top-0 border-bottom rounded-0"
            title="tu dirección de correo electrónico"
            disabled={habilitado}
            {...register("mail", {
              required: "El correo es obligatorio",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Ingrese una dirección de correo válida",
              },
            })}
          />
          <div className="text-danger text-start">{errors.mail?.message}</div>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label
            htmlFor="ubication"
            className="text-md-center w-100 text-lg-start fw-medium mb-0 fontSizeLabel"
          >
            Ubicación
          </Form.Label>
          <Form.Control
            type="text"
            id="ubication"
            className="input px-0 border-start-0 border-end-0 border-top-0 border-bottom rounded-0"
            title="tu ubicación actual"
            disabled={habilitado}
            {...register("address", {
              minLength: {
                value: 3,
                message: "La ubicación debe tener como mínimo 3 caracteres",
              },
              maxLength: {
                value: 70,
                message: "La ubicación debe tener como máximo 70 caracteres",
              },
            })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label
            htmlFor="wpp"
            className="text-md-center w-100 text-lg-start fw-medium mb-0 fontSizeLabel"
          >
            Número de WhatsApp
          </Form.Label>
          <Form.Control
            type="text"
            id="wpp"
            className="input px-0 border-start-0 border-end-0 border-top-0 border-bottom rounded-0"
            title="tu número de WhatsApp"
            disabled={habilitado}
            {...register("phone", {
              pattern: /^[0-9]{10}$/,
            })}
          />
        </Form.Group>
      </div>
      <div className="col-lg-5 mt-lg-5">
        <Form.Group className="mb-3 d-flex flex-column justify-content-center align-items-md-center gap-2">
          <Form.Label
            htmlFor="wpp"
            className="text-md-center w-100 fw-medium mb-0 fontSizeLabel"
          >
            Foto de Perfil
          </Form.Label>
          <img
            src={worker ? worker.img : ""}
            alt="imagen de perfil"
            className="border rounded-circle imgProfileForm"
            title="imagen de perfil"
          />
          <Form.Control
            type="file"
            className="d-none"
            id="file"
            {...register("img")}
          />
          <button
            className={` ${
              habilitado ? "d-none" : "d-block"
            } btn rounded-2 btn-secondary px-4`}
          >
            Subir Imagen
          </button>
        </Form.Group>
      </div>

      <div className="d-flex justify-content-end gap-2 justify-content-md-center justify-content-lg-end d-block w-100">
        {!habilitado && (
          <button
            type="submit"
            className="px-3 px-md-5 py-2 rounded-2 btn btn-secondary text-white border-0 opacity-75"
          >
            Cancelar
          </button>
        )}
        <button
          type="submit"
          className="px-3 px-md-5 py-2 rounded-2 btnEdit text-white border-0"
        >
          {habilitado ? "Editar Mis datos" : "Guardar"}
        </button>
      </div>
    </Form>
  );
};

export default FormularioPerfilProf;
