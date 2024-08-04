import { Form } from "react-bootstrap";

const FormularioPerfilProf = () => {
  return (
    <Form>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="name" className="">
            Nombre y Apellido
          </Form.Label>
          <Form.Control
            type="text"
            id="name"            
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="email" className="">
            Email
          </Form.Label>
          <Form.Control
            type="email"
            id="email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="ubication" className="">
            Ubicación
          </Form.Label>
          <Form.Control
            type="text"
            id="ubication"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wpp" className="">
            Número de WhatsApp
          </Form.Label>
          <Form.Control
            type="text"
            id="wpp"
          />
        </Form.Group>
        <Form.Group className="">
          <Form.Label htmlFor="wpp" className="">
            Foto de Perfil
          </Form.Label>
          <img
            src=""
            alt=""
          />
          <Form.Control type="file" id="file" />
          <button className="">
            Subir Imagen
          </button>
        </Form.Group>   
      <div className="">
        <button type="submit" className="">
          Editar Mis datos
        </button>
      </div>
    </Form>
  );
};

export default FormularioPerfilProf;
