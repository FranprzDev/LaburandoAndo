import { Form } from "react-bootstrap";

const FormularioPublicacion = () => {
  return (
    <Form className="mt-2 mt-md-5 bg-white shadow rounded-2 px-3 px-xl-5 pb-3 mt-lg-2 pt-4 mt-xl-5 border">
        <Form.Group className="mb-3">
          <Form.Label htmlFor="category" className="text-md-center w-100 text-lg-start fw-bold  ">
            Categoría
          </Form.Label>
          <Form.Select
            type="text"
            id="category"
            className="rounded-0"
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
          <Form.Label htmlFor="title" className="text-md-center w-100 text-lg-start fw-bold  ">
            Título del anuncio
          </Form.Label>
          <Form.Control
            type="text"
            id="title"
            className="rounded-0"
            title="Ingresa el título del anuncio"
            placeholder="Clases particulares de inglés..."
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="ubication" className="text-md-center w-100 text-lg-start fw-bold  ">
            Sitio web
          </Form.Label>
          <Form.Control
            type="url"
            id="ubication"
            className="rounded-0"
            title="Ingresa el sitio web de tu negocio en caso de tener"
            placeholder="https://tu-sitio-web.com"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="description" className="text-md-center w-100 text-lg-start fw-bold  ">
            Descripción
          </Form.Label>
          <Form.Control
            as="textarea"
            id="description"
            className="rounded-0"
            title="Ingresa una breve presentación de ti y del anuncio"
            placeholder="Hola, me llamo juan y soy electricista con mas de 5 años de exp...."
          />
        </Form.Group>
      <div className="d-flex justify-content-end justify-content-md-center justify-content-lg-end d-block w-100">
        <button type="submit" className="px-3 px-md-5 py-2 rounded-2 text-white border-0">
          Publicar anuncio
        </button>
      </div>
    </Form>
  );
};

export default FormularioPublicacion;
