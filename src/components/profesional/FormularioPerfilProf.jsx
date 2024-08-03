import { Form, Button } from "react-bootstrap";
import imgUsuario from "../../img/imgUsuario.png";

const FormularioPerfilProf = () => {
  return (
    <Form className="formProfile row gy-3 mt-2 mt-md-5 bg-white shadow rounded-2 px-3 px-xl-5 pb-3 mt-lg-2 pt-4 mt-xl-5 border">
      <div className="col-lg-7">
        <Form.Group className="mb-3">
          <Form.Label htmlFor="name" className="text-md-center w-100 text-lg-start fw-bold mb-0 fontSizeLabel">
            Nombre y Apellido
          </Form.Label>
          <Form.Control
            type="text"
            id="name"
            className="input px-0 border-start-0 border-end-0 border-top-0 border-bottom rounded-0"
            title="tu nombre y apellido"
            disabled
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="email" className="text-md-center w-100 text-lg-start fw-bold mb-0 fontSizeLabel">
            Email
          </Form.Label>
          <Form.Control
            type="email"
            id="email"
            className="input px-0 border-start-0 border-end-0 border-top-0 border-bottom rounded-0"
            title="tu dirección de correo electrónico"
            disabled
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="ubication" className="text-md-center w-100 text-lg-start fw-bold mb-0 fontSizeLabel">
            Ubicación
          </Form.Label>
          <Form.Control
            type="text"
            id="ubication"
            className="input px-0 border-start-0 border-end-0 border-top-0 border-bottom rounded-0"
            title="tu ubicación actual"
            disabled
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wpp" className="text-md-center w-100 text-lg-start fw-bold mb-0 fontSizeLabel">
            Número de WhatsApp
          </Form.Label>
          <Form.Control
            type="text"
            id="wpp"
            className="input px-0 border-start-0 border-end-0 border-top-0 border-bottom rounded-0"
            title="tu número de WhatsApp"
            disabled
          />
        </Form.Group>
      </div>
      <div className="col-lg-5 mt-lg-5">
        <Form.Group className="mb-3 d-flex flex-column justify-content-center align-items-md-center gap-2">
          <Form.Label htmlFor="wpp" className="text-md-center w-100 fw-bold mb-0 fontSizeLabel">
            Foto de Perfil
          </Form.Label>
          <img
            src={imgUsuario}
            alt=""
            className="border rounded-circle imgProfileForm"
          />
          <Form.Control type="file" className="d-none" id="file" />
          <button className="d-none btn rounded-2 btn-secondary px-4">
            Subir Imagen
          </button>
        </Form.Group>
      </div>

      <div className="d-flex justify-content-end justify-content-md-center justify-content-lg-end d-block w-100">
        <button type="submit" className="px-3 px-md-5 py-2 rounded-2 btnEdit text-white border-0">
          Editar Mis datos
        </button>
      </div>
    </Form>
  );
};

export default FormularioPerfilProf;
