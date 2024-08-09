import { Form } from "react-bootstrap";

const FormularioPublicacion = () => {
  return (
    <Form className="formPublication mt-2 mt-md-5 bg-white shadow rounded-2 px-3 px-xl-5 pb-3 mt-lg-2 pt-4 mt-xl-4 border">
      <p>
        Campo Obligatorio &#40; <span className="text-danger fs-5">*</span>{" "}
        &#41;
      </p>
      <Form.Group className="mb-3">
        <Form.Label
          htmlFor="category"
          className="w-100 text-lg-start fw-bold fontSizeLabel "
        >
          Categoría <span className="text-danger fs-5">*</span>
        </Form.Label>
        <Form.Select
          type="text"
          id="category"
          className="input rounded-2"
          title="Selecciona una categoría de trabajo"
        >
          <option value="">seleccione</option>
          <option value="">Profesor particular</option>
          <option value="">Fotógrafo</option>
          <option value="">Electricista</option>
          <option value="">Personal trainer</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label
          htmlFor="title"
          className="w-100 text-lg-start fw-bold fontSizeLabel "
        >
          Título del anuncio <span className="text-danger fs-5">*</span>
        </Form.Label>
        <Form.Control
          as="textarea"
          id="title"
          className="rounded-2 input"
          title="Ingresa el título del anuncio"
          placeholder="Clases particulares de inglés..."
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label
          htmlFor="web"
          className="w-100 text-lg-start fw-bold  fontSizeLabel"
        >
          Sitio web
        </Form.Label>
        <Form.Control
          type="url"
          id="web"
          className="rounded-2 input"
          title="Ingresa el sitio web de tu negocio en caso de tener"
          placeholder="https://tu-sitio-web.com"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label
          htmlFor="description"
          className="w-100 text-lg-start fw-bold  fontSizeLabel"
        >
          Descripción <span className="text-danger fs-5">*</span>
        </Form.Label>
        <Form.Control
          as="textarea"
          id="description"
          className="rounded-2 input textareaDescription"
          title="Ingresa una breve presentación sobre ti y del anuncio"
          placeholder="Hola, me llamo juan y soy electricista con mas de 5 años de exp...."
        />
      </Form.Group>
      <div className="d-flex justify-content-end justify-content-md-center justify-content-lg-end d-block w-100">
        <button
          type="submit"
          className="px-3 px-md-5 py-2 btnPost rounded-2 text-white border-0"
        >
          Publicar anuncio
        </button>
      </div>
    </Form>
  );
};

export default FormularioPublicacion;
