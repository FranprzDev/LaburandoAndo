import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { fetchWorkerForID } from "../../../slices/actions/workersActions";
import imgUsuario from "../../../img/imgUsuario.png";
import useAlert from "../../../hooks/useAlertHook";
import instance from "../../../api/api";
import { useCloudinary } from "../../../hooks/useCloudinaryHook";

const FormularioPerfilProf = ({ setLoading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  const [edit, setEdit] = useState(true);
  const [imageLoading, setImageLoading] = useState(true); 
  const { customAlert, autoCloseAlert } = useAlert();

  const user = useSelector((state) => state.auth.user);
  const worker = useSelector((state) => state.workers.worker);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(fetchWorkerForID(user._id));
    }
  }, []);

  useEffect(() => {
    reset();
  }, [user, worker]);

  const handleEdit = (e) => {
    e.preventDefault();
    setEdit(!edit);
    setValue("mail", worker.mail);
    setValue("address", worker.address);
    setValue("phone", worker.phone);
  };

  const handleUpdate = async (data) => {
    customAlert(
      "¿Estás seguro de que deseas actualizar tus datos?",
      async () => {
        try {
          await instance.put(`/worker/update/${worker._id}`, {
            mail: data.mail,
            address: data.address,
            phone: data.phone,
          });
          autoCloseAlert(
            "Tus datos se han actualizado correctamente",
            "success"
          );
          setEdit(!edit);
          dispatch(fetchWorkerForID(worker._id));
        } catch (error) {
          autoCloseAlert("No se pudieron actualizar tus datos", "error");
          setEdit(!edit);
        }
      }
    );
  };

  const { uploadImage } = useCloudinary();
  const changeImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setLoading(true);
      const imageUrl = await uploadImage(file);
      await instance.put(`/worker/update/${worker._id}`, { img: imageUrl });
      autoCloseAlert("Tu foto de perfil se ha actualizado", "success");
      dispatch(fetchWorkerForID(user._id));
    } catch (error) {
      autoCloseAlert("No se pudo actualizar tu foto de perfil", "error");
    } finally {
      setLoading(false);
    }
  };


  const handleImageLoaded = () => {
    setImageLoading(false);
  };

  return (
    <Form
      className="formProfile row gy-3 mt-2 mt-md-5 bg-white shadow rounded-2 px-3 px-xl-5 pb-3 mt-lg-2 pt-4 mt-xl-4 border"
      onSubmit={handleSubmit(handleUpdate)}
    >
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
            className="input rounded-2"
            title="Tu nombre y apellido"
            value={worker ? worker.fullname : ""}
            disabled={true}
          />
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
            className="input rounded-2"
            title="Tu dirección de correo electrónico"
            disabled={edit}
            defaultValue={worker ? worker.mail : ""}
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
            className="input rounded-2"
            title="Tu ubicación actual"
            disabled={edit}
            defaultValue={worker ? worker.address : ""}
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
            className="input rounded-2"
            title="Tu número de WhatsApp"
            disabled={edit}
            defaultValue={worker ? worker.phone : ""}
            {...register("phone", {
              pattern: /^[0-9]{10}$/,
            })}
          />
        </Form.Group>
      </div>
      <div className="col-lg-5 mt-lg-5">
        <Form.Group className="text-center d-flex flex-column justify-content-center align-items-center position-relative mb-3">
          <Form.Label htmlFor="FotoPerfil" className="fw-medium">
            Foto de perfil
          </Form.Label>
          {imageLoading && <div className="spinner"></div>} {/* Loader */}
          <img
            src={worker ? worker.img : imgUsuario}
            alt="imagen de perfil"
            className={`img-fluid imgProfileForm mb-5 rounded-circle ${
              imageLoading ? "d-none" : "d-block"
            }`}
            title="imagen de perfil"
            onLoad={handleImageLoaded} 
          />
          <Form.Control
            className="d-none"
            type="file"
            name="FotoPerfil"
            title="Cambiar imagen de perfil"
            id="FotoPerfil"
            accept="image/png, image/jpeg"
            {...register("img")}
            onChange={(e) => changeImage(e)}
          />
          <label
            htmlFor="FotoPerfil"
            className={`upload-button ${edit ? "d-none" : "d-block"}`}
          >
            +
          </label>
        </Form.Group>
      </div>

      <div className="d-flex justify-content-end gap-2 justify-content-md-center justify-content-lg-end d-block w-100">
        {!edit && (
          <button
            className="px-3 px-md-5 py-2 rounded-2 btn btn-secondary text-white border-0 opacity-75 button"
            onClick={handleEdit}
          >
            Cancelar
          </button>
        )}
        <button
          type="submit"
          className="px-3 px-md-5 py-2 rounded-2 btnEdit text-white border-0 button"
          onClick={edit ? handleEdit : null}
        >
          {edit ? "Editar Mis datos" : "Guardar"}
        </button>
      </div>
    </Form>
  );
};

export default FormularioPerfilProf;
