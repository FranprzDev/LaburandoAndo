import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createFeedback } from "../../../slices/actions/feedbackActions";

const FormularioSoporte = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const user = useSelector((state)=> state.auth.user)
  console.log(user._id)
  const dispatch = useDispatch()
  

  const handleCrear = (data) => {
    console.log(data)
    dispatch(createFeedback(user._id,data))
    reset()
  }

  return (
    <Form onSubmit={handleSubmit(handleCrear)} className="formSupport gy-3 mt-2 mt-md-5 bg-white shadow rounded-2 px-3 px-xl-5 pb-3 mt-lg-2 pt-4 mt-xl-4 border">
      <span>
        Si tienes alguna consulta o problema, completa el formulario y te
        ayudaremos lo antes posible.
      </span>
      <Form.Group className="my-2 my-md-3">
        <Form.Label
          label="Asunto"
          className="w-100 text-lg-start fw-medium  fontSizeLabel mb-0 mb-md-1"
        >
          Asunto
        </Form.Label>
        <Form.Select
          className="rounded-2 input inputAffair"
          {...register("affair", {
            required: "El asunto es obligatorio",
          })}
        >
          <option value="">Seleccione el asunto</option>
          <option value="Sugerencia">Sugerencia</option>
          <option value="Consulta">Consulta</option>
          <option value="Queja">Queja</option>
          <option value="Felicitación">Felicitación</option>
          <option value="Petición">Petición</option>
        </Form.Select>
        <div className="text-danger text-start">{errors.affair?.message}</div>
      </Form.Group>
      <Form.Group className="mb-2 mb-md-3">
        <Form.Label
          label="Comentarios"
          className="w-100 text-lg-start fw-medium  fontSizeLabel mb-0 mb-md-1"
        >
          Mensaje
        </Form.Label>
        <Form.Control
          as="textarea"
          className="rounded-2 input textareaMessage"
          placeholder="Escribe tu mensaje..."
          {...register("question", {
            required: "El mensaje es obligatorio",
            minLength: {
              value: 25,
              message: "El mensaje debe tener al menos 25 caracteres",
            },
            maxLength: {
              value: 300,
              message: "El mensaje debe tener como máximo 300 caracteres",
            },
          })}
        />
        <div className="text-danger text-start">{errors.question?.message}</div>
      </Form.Group>

      <div className="py-2 text-end">
        <Button
          type="submit"
          className="px-3 px-md-5 py-2 btnPost rounded-2 text-white border-0"
        >
          Enviar Consulta
        </Button>
      </div>
    </Form>
  );
};

export default FormularioSoporte;
