import { useEffect, useMemo } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import PostModalComponent from "../../../components/PostModalComponents";
import { fetchCategories } from "../../../slices/actions/categoryActions";
import { createPost, getPost, updatePost } from "../../../slices/actions/postsActions";
import useAlert from "../../../hooks/useAlertHook";

const FormularioPublicacion = ({ id }) => {
  const post = useSelector((state) => state.posts.post);
  const categorias = useSelector((state) => state.categories.categories);
  const status = useSelector((state) => state.categories.status);
  const createPostStatus = useSelector((state) => state.posts.createPostStatus);
  const userLogeado = useSelector((state) => state.auth.user);
  const {customAlert, autoCloseAlert} = useAlert()
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const postCreateState = useMemo(() => {
    return createPostStatus;
  }, [createPostStatus]);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories());
    } else {
      if (id) {
        dispatch(getPost(id))
      }
      else{
        reset({
          title: "",
          categoryId: "",
          description: "",
          pricePerHour: ""
        })
      }
    }
  }, [id,status,dispatch]);

  useEffect(() => {
    if (id && post) {
      setValue("title", post.title);
      setValue("categoryId", post.category[0]?._id || '');
      setValue("price", post.pricePerHour);
      setValue("description", post.description);
    }
    else{
      reset()
    }
  }, [post, setValue]);

  const handlePost = async (post) => {
    dispatch(createPost({ id: userLogeado._id, post: post }));
    reset();
  };

  const handleUpdate =  (data) =>{
    customAlert("¿Desea Editar su publicación?", () => {
      dispatch(updatePost({data: data, id: id}))
      autoCloseAlert("Su publicacion fue editada con éxito", "success");
    });
  }

  if(status !== "exitoso")
  {
    return <div>Cargando...</div>
  }

  return (
    <Form
      className="formPublication mt-2 mt-md-5 bg-white shadow rounded-2 px-3 px-xl-5 pb-2 pb-md-3 mt-lg-2 pt-4 mt-xl-4 border"
      onSubmit={handleSubmit(id ? handleUpdate : handlePost)}
    >
      {/* <PostModalComponent postCreateState={postCreateState} /> */}
      {/* TODO: Cambiar a los modales del customAlert  */}
      {/* TODO: Agregar los loaders */}
      <p>
        Campo Obligatorio &#40; <span className="text-danger">*</span> &#41;
      </p>

      <Form.Group className="mb-2 mb-md-3">
        <Form.Label
          htmlFor="title"
          className="w-100 text-lg-start fw-medium fontSizeLabel mb-0 mb-md-1"
        >
          Título del anuncio <span className="text-danger">*</span>
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
        <div className="text-danger text-start">{errors.title?.message}</div>
      </Form.Group>
      <div className="row">
        <Form.Group className="mb-2 mb-md-3 col-md-8">
          <Form.Label
            htmlFor="category"
            className="w-100 text-lg-start fw-medium fontSizeLabel mb-0 mb-md-1"
          >
            Categoría <span className="text-danger">*</span>
          </Form.Label>
          <Form.Select
            type="text"
            id="category"
            className="input rounded-2"
            title="Selecciona una categoría de trabajo"
            {...register("categoryId", {
              required: "La categoría es obligatoria",
            })}
          >
            <option value="">seleccione</option>
            {status === "exitoso" &&
              categorias &&
              categorias.map((c) => (
                <option key={c._id} defaultValue={post ? post.category[0].name === c.name : ''} value={`${c._id}`}>
                  {c.name}
                </option>
              ))}
          </Form.Select>
          <div className="text-danger text-start">
            {errors.categoryId?.message}
          </div>
        </Form.Group>
        <Form.Group className="col-md-4 mb-2 mb-md-3">
          <Form.Label
            htmlFor="price"
            className="w-100 text-lg-start fw-medium  fontSizeLabel mb-0 mb-md-1"
          >
            Precio por hora <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            type="number"
            id="price"
            className="rounded-2 input"
            title="Ingresa el sitio web de tu negocio en caso de tener"
            placeholder="5000"
            {...register("price", {
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
          <div className="text-danger text-start">{errors.price?.message}</div>
        </Form.Group>
      </div>

      <Form.Group className="mb-2 mb-md-3">
        <Form.Label
          htmlFor="description"
          className="w-100 text-lg-start fw-medium  fontSizeLabel mb-0 mb-md-1"
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
              value: 500,
              message: "La descripción debe tener como máximo 500 caracteres",
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
        >
          {id ? "Editar Anuncio" : "Publicar Anuncio"}
        </button>
      </div>
    </Form>
  );
};

export default FormularioPublicacion;
