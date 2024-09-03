import React, { useEffect, useState } from "react";
import { getCategories } from "../../../api/api";
import { Accordion } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterPostByCategory, filterPostByName, filterPostByLocation } from "../../../slices/postsSlice";

const FormFiltros = () => {
  const dispatch = useDispatch();
  const [categoriaTrabajos, setCategoriaTrabajos] = useState([]);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

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

  useEffect(() => {
    dispatch(filterPostByName(name));
  }, [name]);

  useEffect(() => {
    dispatch(filterPostByLocation(location));
  }, [location]);


  return (
    <Accordion defaultActiveKey="0" className="w-100">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Filtrar por:</Accordion.Header>
        <Accordion.Body className="px-2 px-xl-3">
          <div className=" rounded-2 bg-white">
            <div className="input-group mb-2">
              <label className="form-label fw-medium mb-0 mb-md-1" htmlFor="name">
                Nombre
              </label>
              <input
                type="text"
                title="Ingresa el nombre de un profesional"
                id="name"
                className="form-control input w-100 rounded-2"
                placeholder="Juan Perez"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-group mb-2 mb-md-3">
              <label className="form-label fw-medium mb-0 mb-md-1" htmlFor="loc">
                Ubicación
              </label>
              <input
                type="text"
                title="Ingresa ciudad y provincia"
                id="loc"
                className="form-control input w-100 rounded-2"
                placeholder="Yerba Buena, Tucumán"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="input-group mb-2 mb-md-3">
              <label className="form-label fw-medium mb-0 mb-md-1" htmlFor="category">
                Categorías
              </label>
              <select
                className="form-select w-100 rounded-2 input"
                title="Selecciona una categoría de trabajo"
                id="category"
                onChange={(e) => {dispatch(filterPostByCategory(e.target.value))}}
              >
                <option value="">Todas las categorías</option>
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
