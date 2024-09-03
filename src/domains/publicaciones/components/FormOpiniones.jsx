import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createReview } from "../../../slices/actions/reviewsActions";
import { useParams } from "react-router-dom";
import { getPost } from "../../../slices/actions/postsActions";
import useAlert from "../../../hooks/useAlertHook";

const FormOpiniones = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { id } = useParams();
  const userLogeado = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const { autoCloseAlert } = useAlert();

  const handleReview = async (review) => {
    if (userLogeado) {
      await dispatch(
        createReview({ userId: userLogeado._id, idWork: id, ...review })
      );
      dispatch(getPost(id));
      autoCloseAlert("Tu comentario fue agregado con éxito", "success");
      reset();
    } else{
      autoCloseAlert("Debes iniciar sesión para dejar una reseña", "error");
    }
  };

  return (
    <Form
      className="formComments border p-2 rounded-2 p-md-3 shadow"
      onSubmit={handleSubmit(handleReview)}
    >
      <div className="mb-2 d-flex flex-column w-100">
        <label htmlFor="" className="form-label d-block">
          Valoración
        </label>
        <Form.Select
          className="rounded-2 w-100 input py-2 border-1"
          title="Selecciona una valoración"
          {...register("stars", {
            required: "La valoración es obligatoria",
          })}
        >
          <option value="">seleccione</option>
          <option value="1">1 estrella</option>
          <option value="2">2 estrellas</option>
          <option value="3">3 estrellas</option>
          <option value="4">4 estrellas</option>
          <option value="5">5 estrellas</option>
        </Form.Select>
        <div className="text-danger text-start">{errors.stars?.message}</div>
      </div>
      <div className="mb-2 d-flex flex-column w-100">
        <label htmlFor="" className="form-label d-block">
          Comentario
        </label>
        <textarea
          className="form-control rounded-2 w-100 input"
          title="Ingresa tu comentario"
          placeholder="Escribe tu comentario aquí..."
          {...register("comment", {
            required: "El comentario es obligatorio",
            minLength: {
              value: 3,
              message: "El comentario debe tener al menos 3 caracteres",
            },
            maxLength: {
              value: 150,
              message: "El comentario debe tener como máximo 150 caracteres",
            },
          })}
        ></textarea>
        <div className="text-danger text-start">{errors.comment?.message}</div>
      </div>
      <div className="d-flex justify-content-md-end">
        <button className="btn btn-secondary px-5 w-100">Publicar</button>
      </div>
    </Form>
  );
};

export default FormOpiniones;
