import React from "react";

const FormFiltros = () => {
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
        <select className="form-select w-100 rounded-2">
          <option value="">Seleccionar categoría</option>
          <option value="Carpintería">Carpintería</option>
          <option value="Electricidad">Electricidad</option>
          <option value="Plomería">Plomería</option>
          <option value="Profesor particular">Profesor particular</option>
          <option value="Cuidado de niños">Cuidado de niños</option>
        </select>
      </div>
    </div>
  );
};

export default FormFiltros;
