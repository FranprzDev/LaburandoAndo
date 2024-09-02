import React, { useEffect } from "react";
import FormCategoria from "../components/FormCategoria";
import "../styles/administracion.min.css";
import ListaCategorias from "../components/ListaCategorias";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../../../slices/actions/categoryActions";

const Categorias = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  return (
    <section className="container-fluid px-2 px-lg-5 py-3 py-md-5 mainSection containerProfile">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">Admin</li>
          <li className="breadcrumb-item text-primary">Categorías</li>
        </ol>
      </nav>
      <FormCategoria />
      <p className="mt-5">Categorías</p>
      <ListaCategorias />
    </section>
  );
};

export default Categorias;
