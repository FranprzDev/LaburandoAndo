import React, { useEffect, useState } from "react";
import { getCategories } from "../../../api/api";
import { Accordion } from "react-bootstrap";

const FormFiltros = ({ onCategoryChange }) => {
  const [categoriaTrabajos, setCategoriaTrabajos] = useState([]);

  const categorias = async () => {
    try {
      const response = await getCategories();
      setCategoriaTrabajos(response.data);
    } catch (error) {
      console.error("Error al llamar a las categorías:", error);
    }
  };

  useEffect(() => {
    categorias();
  }, []);

  const handleCambioDeCategoria = (e) => {
    onCategoryChange(e.target.value);
  };

  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" show>
        <Accordion.Header>Filtrar por:</Accordion.Header>
        <Accordion.Body>
          <div className=" rounded-2 bg-white">
            <div className="input-group mb-2">
              <label className="form-label fw-medium mb-0 mb-md-1">
                Nombre
              </label>
              <input
                type="text"
                className="form-control input w-100 rounded-2"
                placeholder="Juan Perez"
              />
            </div>
            <div className="input-group mb-2 mb-md-3">
              <label className="form-label fw-medium mb-0 mb-md-1">
                Ubicación
              </label>
              <input
                type="text"
                className="form-control input w-100 rounded-2"
                placeholder="Yerba Buena, Tucumán"
              />
            </div>
            <div className="input-group mb-2 mb-md-3">
              <label className="form-label fw-medium mb-0 mb-md-1">
                Categorías
              </label>
              <select
                className="form-select w-100 rounded-2 input"
                onChange={handleCambioDeCategoria}
              >
                <option value="">Seleccionar categoría</option>
                {Array.isArray(categoriaTrabajos) &&
                  categoriaTrabajos.map((categoria) => (
                    <option key={categoria._id} value={categoria.name}>
                      {categoria.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default FormFiltros;
