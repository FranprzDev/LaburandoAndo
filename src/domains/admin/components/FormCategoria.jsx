import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createCategory } from "../../../slices/actions/categoryActions";

const FormCategoria = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch()

  const handleCategory = (data) => {
    dispatch(createCategory({data: data}))
    reset();
  };

  return (
    <Form
      className="formCategory gy-3 mt-2 mt-md-5 bg-white shadow rounded-2 px-3 px-xl-5 pb-3 mt-lg-2 pt-4 mt-xl-4 border"
      onSubmit={handleSubmit(handleCategory)}
    >
      <Form.Group className="my-2 my-md-3">
        <Form.Label
          label="Correo Electrónico"
          className="w-100 text-lg-start fw-medium  fontSizeLabel mb-0 mb-md-1"
        >
          Nueva Categoría
        </Form.Label>
        <Form.Control
          className="rounded-2 input "
          placeholder="Por ej. Fotógrafo"
          {...register("name", {
            required: "La categoría es obligatoria",
            minLength: {
              value: 3,
              message: "La categoría debe tener al menos 3 caracteres",
            },
            maxLength: {
              value: 25,
              message: "La categoría debe tener como máximo 25 caracteres",
            },
          })}
        ></Form.Control>
        <div className="text-danger text-start">{errors.name?.message}</div>
      </Form.Group>
      <div className="py-2 text-end">
        <Button
          type="submit"
          className="px-3 px-md-5 py-1 btnCategory rounded-2 text-white border-0"
        >
          Agregar
        </Button>
      </div>
    </Form>
  );
};

export default FormCategoria;
