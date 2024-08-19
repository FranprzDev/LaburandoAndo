import { Form } from "react-bootstrap";

const FormOpiniones = () => {
  return (
    <Form className="formComments border p-2 rounded-2 p-md-3 shadow">
        <div className="mb-2 d-flex flex-column w-100">
        <label htmlFor="" className="form-label d-block">
          Valoración
        </label>
        <Form.Select className="rounded-2 w-100 input py-2 border-1">
            <option value="">seleccione</option>
            <option value="">1 estrella</option>
            <option value="">2 estrellas</option>
            <option value="">3 estrellas</option>
            <option value="">4 estrellas</option>
            <option value="">5 estrellas</option>

        </Form.Select>
      </div>
      <div className="mb-2 d-flex flex-column w-100">
        <label htmlFor="" className="form-label d-block">
          Comentario
        </label>
        <textarea className="form-control rounded-2 w-100 input" placeholder="Escribe tu comentario aquí..."></textarea>
      </div>
      <div className="d-flex justify-content-md-end">
        <button className="btn btn-secondary px-5 w-100 opacity-50">Publicar</button>
      </div>
    </Form>
  );
};

export default FormOpiniones;
