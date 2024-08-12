import React, { useEffect, useState } from "react";
import { getCategories } from "../../api/api";

const FormFiltros = ({ onCategoryChange }) => {
  const [categoriaTrabajos, setCategoriaTrabajos] = useState([]);
  
  const categorias = async () => {
    try {
      const response = await getCategories();
      console.log(response); 
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
    <div className="border p-2 p-md-3 rounded-2 shadow">
      <div className="input-group mb-2">
        <label className="form-label fw-medium">Nombre</label>
        <input
          type="text"
          className="form-control input w-100 rounded-2"
          placeholder="Francisco Perez"
        />
      </div>
      <div className="input-group mb-2 mb-md-3">
        <label className="form-label fw-medium">Ubicación</label>
        <input
          type="text"
          className="form-control input w-100 rounded-2"
          placeholder="Yerba Buena, Tucumán"
        />
      </div>
      <div className="input-group mb-2 mb-md-3">
        <label className="form-label fw-medium">Categorías</label>
        <select
          className="form-select w-100 rounded-2"
          onChange={handleCambioDeCategoria}
        >
          <option value="">Seleccionar categoría</option>
          {Array.isArray(categoriaTrabajos) && categoriaTrabajos.map((categoria) => (
            <option key={categoria._id} value={categoria.name}>
              {categoria.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FormFiltros;
