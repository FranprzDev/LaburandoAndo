import { useEffect } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../slice/categorySlice";
import { useForm } from "react-hook-form";

const FormularioPublicacion = () => {
  const categorias = useSelector((state) => state.categories.categories);
  const status = useSelector((state) => state.categories.status);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories());
    }
  }, []);

  const handlePost = () => {
    
  }

  return (
    <Form className="formPublication mt-2 mt-md-5 bg-white shadow rounded-2 px-3 px-xl-5 pb-2 pb-md-3 mt-lg-2 pt-4 mt-xl-4 border">
      <p>
        Campo Obligatorio &#40; <span className="text-danger fs-5">*</span>{" "}
        &#41;
      </p>

      <Form.Group className="mb-2 mb-md-3">
        <Form.Label
          htmlFor="title"
          className="w-100 text-lg-start fw-bold fontSizeLabel mb-0 mb-md-1"
        >
          Título del anuncio <span className="text-danger fs-5">*</span>
        </Form.Label>
        <Form.Control
          as="textarea"
          id="title"
          className="rounded-2 input"
          title="Ingresa el título del anuncio"
          placeholder="Clases particulares de inglés en línea..."
          {...register("title", {
            required: "El título es obligatorio",
            minLength: {
              value: 15,
              message: "El título debe tener al menos 15 caracteres",
            },
            maxLength: {
              value: 90,
              message: "El título debe tener como máximo 90 caracteres",
            },
          })}
        />
        <div className="text-danger text-start">
          {errors.title?.message}
        </div>
      </Form.Group>
      <div className="row">
        <Form.Group className="mb-2 mb-md-3 col-md-8">
          <Form.Label
            htmlFor="category"
            className="w-100 text-lg-start fw-bold fontSizeLabel mb-0 mb-md-1"
          >
            Categoría <span className="text-danger fs-5">*</span>
          </Form.Label>
          <Form.Select
            type="text"
            id="category"
            className="input rounded-2"
            title="Selecciona una categoría de trabajo"
            {...register("category", {
              required: "La categoría es obligatoria",
            })}
          >
            <option value="">seleccione</option>
            {status === "exitoso" &&
              categorias &&
              categorias.map((c) => (
                <option key={c._id} value={`${c.name}`}>
                  {c.name}
                </option>
              ))}
          </Form.Select>
          <div className="text-danger text-start">
          {errors.category?.message}
        </div>
        </Form.Group>
        <Form.Group className="col-md-4 mb-2 mb-md-3">
          <Form.Label
            htmlFor="price"
            className="w-100 text-lg-start fw-bold  fontSizeLabel mb-0 mb-md-1"
          >
            Precio por hora <span className="text-danger fs-5">*</span>
          </Form.Label>
          <Form.Control
            type="number"
            id="price"
            className="rounded-2 input"
            title="Ingresa el sitio web de tu negocio en caso de tener"
            placeholder="5000"
            {...register("pricePerHour", {
              required: "El precio es obligatorio",
              min: {
                value: 500,
                message: "El precio debe ser mayor o igual a 500",
              },
              max: {
                value: 50000,
                message: "El precio debe ser menor o igual a 50000",
              },
            })}
          />
          <div className="text-danger text-start">
          {errors.pricePerHour?.message}
        </div>
        </Form.Group>
      </div>

      <Form.Group className="mb-2 mb-md-3">
        <Form.Label
          htmlFor="description"
          className="w-100 text-lg-start fw-bold  fontSizeLabel mb-0 mb-md-1"
        >
          Descripción <span className="text-danger fs-5">*</span>
        </Form.Label>
        <Form.Control
          as="textarea"
          id="description"
          className="rounded-2 input textareaDescription"
          title="Ingresa una breve presentación sobre ti y del anuncio"
          placeholder="Hola, me llamo juan y soy electricista con mas de 5 años de exp...."
          {...register("description", {
            required: "La descripción es obligatoria",
            minLength: {
              value: 25,
              message: "La descripción debe tener al menos 25 caracteres",
            },
            maxLength: {
              value: 250,
              message: "La descripción debe tener como máximo 250 caracteres",
            },
          })}
        />
        <div className="text-danger text-start">
          {errors.description?.message}
        </div>
      </Form.Group>
      <div className="d-flex justify-content-end justify-content-md-center justify-content-lg-end d-block w-100">
        <button
          type="submit"
          className="px-3 px-md-5 py-2 btnPost rounded-2 text-white border-0"
          onClick={handleSubmit(handlePost)}
        >
          Publicar anuncio
        </button>
      </div>
    </Form>
  );
};

export default FormularioPublicacion;
