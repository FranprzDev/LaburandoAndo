import React from "react";

const FormFiltros = () => {
  return (
    <div className="border p-2 p-md-3 rounded-2 shadow">
      <div className="input-group mb-2 mb-md-3">
        <label className="form-label fw-medium">Ubicación</label>
        <input
          type="text"
          className="form-control input w-100 rounded-2"
          placeholder="Yerba Buena, Tucumán"
        />
      </div>
      <div className="d-flex flex-wrap mb-2 mb-md-3">
        <label className="form-label fw-medium w-100">Categorías</label>
        <div className="d-flex flex-wrap gap-2">
          <button className="p-2 rounded-2 border">Fotógrafo</button>
          <button className="p-2 rounded-2 border">Personal Trainer</button>
          <button className="p-2 rounded-2 border">Profesor particular</button>
          <button className="p-2 rounded-2 border">Electricista</button>
        </div>
      </div>
      <div className="input-group mb-2">
        <label className="form-label fw-medium">Buscar por palabra clave</label>
        <input
          type="text"
          className="form-control input w-100 rounded-2"
          placeholder="juan perez"
        />
      </div>
    </div>
  );
};

export default FormFiltros;
