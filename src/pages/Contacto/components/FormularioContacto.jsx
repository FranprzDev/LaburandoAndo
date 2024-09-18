import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { sendEmail } from "../emailJS/email";

const FormularioContacto = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { nombreApellido, email } = data;
    sendEmail(nombreApellido, email);
    reset();
  };

  return (
    <Form
      className="formContact px-2 py-3 px-md-5 pb-md-4 pt-md-5 rounded-2 shadow border-1"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="mb-3 mb-md-4">
        Contáctanos y pronto recibirás una respuesta
      </p>
      <Form.Group className="mb-2 mb-md-3">
        <Form.Label
          htmlFor="full-name"
          className="w-100 text-lg-start fw-medium  fontSizeLabel mb-0 mb-md-1"
        >
          Nombre y Apellido
        </Form.Label>
        <Form.Control
          type="text"
          className="input"
          id="full-name"
          title="Ingresa tu nombre y apellido"
          placeholder="Juan Perez"
          {...register("nombreApellido", {
            required: "Su nombre y apellido es requerido",
            minLength: {
              value: 3,
              message: "Debe escribir al menos 3 letras",
            },
            maxLength: {
              value: 40,
              message: "Debe escribir menos de 40 letras",
            },
            pattern: {
              value: /^[a-zA-Z\s]{3,40}$/,
              message: "Ingrese un nombre y apellido válido",
            },
          })}
        />
        <div className="text-danger">{errors.nombreApellido?.message}</div>
      </Form.Group>
      <Form.Group className="mb-2 mb-md-3" htmlFor="emailContact">
        <Form.Label
          className="w-100 text-lg-start fw-medium  fontSizeLabel mb-0 mb-md-1"
          htmlFor="emailContact"
        >
          Email
        </Form.Label>
        <Form.Control
          className="input"
          type="email"
          id="emailContact"
          title="Ingresa tu correo electrónico"
          placeholder="juanperez@gmail.com"
          {...register("email", {
            required: "Su email es requerido",
            pattern: {
              value:
                /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
              message: "Ingrese un email válido",
            },
          })}
        />
        <div className="text-danger">{errors.email?.message}</div>
      </Form.Group>
      <Form.Group className="mb-2 mb-md-3">
        <Form.Label
          className="w-100 text-lg-start fw-medium  fontSizeLabel mb-0 mb-md-1"
          htmlFor="Message"
        >
          Mensaje
        </Form.Label>
        <Form.Control
          className="input"
          as="textarea"
          id="Message"
          title="Ingresa tu consulta o problema.."
          rows={5}
          placeholder="Hola, tengo una consulta sobre..."
          {...register("mensaje", {
            required: "Su mensaje es requerido",
            minLength: {
              value: 15,
              message: "El mínimo de carácteres es 15",
            },
            maxLength: {
              value: 300,
              message: "El máximo de carácteres es 300",
            },
            pattern: {
              value: /^[a-zA-Z\s0-9.,áéíóúÁÉÍÓÚ]{4,300}$/,
              message: "Ingrese un mensaje válido",
            },
          })}
        />
        <div className="text-danger">{errors.mensaje?.message}</div>
      </Form.Group>
      <div className="text-md-end">
        <Button className="btnContact border-0" type="submit">
          Enviar
        </Button>
      </div>
    </Form>
  );
};

export default FormularioContacto;
