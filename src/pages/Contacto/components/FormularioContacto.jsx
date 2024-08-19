import React from "react";
import { Button, Form } from "react-bootstrap";
import "../contacto.css";
import { useForm } from "react-hook-form";
const FormularioContacto = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className="justify-content-center d-lg-flex">
    <div className="formularioContenedor px-xl-5 border border-2 border-dark-subtle rounded-5 mb-5">
      <Form className="formularioContenedor p-4" onSubmit={handleSubmit(onSubmit)}>
        <h3>Contáctanos y pronto recibirás una respuesta</h3>
        <Form.Group className="mb-3" controlId="formNombreApellido">
          <Form.Label>Nombre y Apellido</Form.Label>
          <Form.Control
            type="text"
            className="input"
            placeholder="Ej: Juan Perez"
            {...register("nombreApellido", {
              required: "Su nombre y apellido es requerido",
              minLength:{
                value: 3,
                message: "Debe escribir al menos 3 letras"
              },
              maxLength: {
                value: 40,
                message: "Debe escribir menos de 40 letras"
              },
              pattern: {
                value: /^[a-zA-Z\s]{3,40}$/,
                message: "Ingrese un nombre y apellido válido",
              },
            })}
            />
          <div className="text-danger">{errors.nombreApellido?.message}</div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control className="input" type="email" placeholder="Ej: juanperez@gmail.com" {...register("email", {
            required: "Su email es requerido",
            pattern: {
              value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
              message: "Ingrese un email válido",
            },
          })} />
            <div className="text-danger">{errors.email?.message}</div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control className="input" as="textarea" rows={5} placeholder="Ej: Tengo un problema con..." {...register("mensaje", {
            required: "Su mensaje es requerido",
            minLength:{
              value: 4,
              message: "El mínimo de carácteres es 4",
            },
            maxLength:{
              value: 300,
              message: "El máximo de carácteres es 300",
            },
            pattern: {
              value: /^[a-zA-Z\s0-9]{4,300}$/,
              message: "Ingrese un mensaje válido",
            },
          })} />
            <div className="text-danger">{errors.mensaje?.message}</div>
        </Form.Group>
        <div className="text-end">
          <Button className="btnContacto w-25 border-0" type="submit">
            Enviar
          </Button>
        </div>
      </Form>
    </div>
    </section>
  );
};

export default FormularioContacto;
