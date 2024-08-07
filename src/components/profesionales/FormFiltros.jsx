import React from "react";

const FormFiltros = () => {
  return (
    <div className="border p-2 p-md-3 rounded-2 shadow">
      <div className="input-group mb-3">
        <label className="form-label fw-medium">Ubicación</label>
        <input type="text" className="form-control w-100 rounded-2" placeholder="ubicación"/>
      </div>
      <div className="d-flex flex-column gap-2 mb-3">
        <label className="form-label fw-medium">Categorías</label>
        <button className="py-2 w-100 rounded-2 border">
            Fotógrafo
        </button>
        <button className="py-2 w-100 rounded-2 border">
            Personal Trainer
        </button>
        <button className="py-2 w-100 rounded-2 border">
            Profesor particular
        </button>
        <button className="py-2 w-100 rounded-2 border">
            Electricista
        </button>
      </div>
      <div className="input-group mb-3">
        <label className="form-label fw-medium">Buscar por palabra clave</label>
        <input type="text" className="form-control w-100 rounded-2" placeholder="palabra clave"/>
      </div>
    </div>
  );
};

export default FormFiltros;
