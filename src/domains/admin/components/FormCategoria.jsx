import React from 'react';
import { Button, Form } from 'react-bootstrap';

const FormCategoria = () => {
    return (
        <Form className="formCategory gy-3 mt-2 mt-md-5 bg-white shadow rounded-2 px-3 px-xl-5 pb-3 mt-lg-2 pt-4 mt-xl-4 border">
        <Form.Group className="my-2 my-md-3">
          <Form.Label
            label="Correo Electrónico"
            className="w-100 text-lg-start fw-medium  fontSizeLabel mb-0 mb-md-1"
          >
            Categoría
          </Form.Label>
          <Form.Control
            className="rounded-2 input "
            placeholder='Ingresa una categoría'
          >
          </Form.Control>
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