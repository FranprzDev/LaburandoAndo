import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../../slices/postsSlice";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const CardPublicacion = ({ selectedCategory }) => {
  const publicaciones = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const filteredPublicaciones = publicaciones.filter((publicacion) => 
    selectedCategory ? publicacion.category[0]?.name === selectedCategory : true
  );

  return (
    <>
      {filteredPublicaciones.length > 0 ? (
        filteredPublicaciones.map((publicacion) => (
          <div
            key={publicacion._id}
            onClick={() => {
              navigate(`/detalle/${publicacion._id}`)
            }}
            className="card cardPublication py-2 px-2 px-md-3 rounded-3 shadow"
          >
            <div className="d-flex flex-column flex-md-row w-100 gap-2 gap-md-4 h-100">
              <div className="h-100 d-flex flex-column justify-content-between align-items-center mt-lg-3">
                <img
                  src={publicacion.worker.img}
                  alt="imagen de perfil"
                  className="imgCardPublication border rounded-circle"
                />
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between w-100">
                <div className="containerDescriptionPost d-flex flex-column gap-1 gap-md-2 pt-2 pb-2 pb-md-3 order-1 order-md-0">
                  <p className="mb-0 fs-5 text-center fw-medium text-md-start">
                    {publicacion.worker.fullname}
                  </p>
                  <small className="align-middle text-center text-md-start">
                    <FaMapMarkerAlt className="fs-6 me-1" />
                    {publicacion.worker.address || "Remoto"}
                  </small>
                  <div className="mt-3 text-center text-md-start w-100">
                    <span className="px-5 py-2 rounded-2 category opacity-50 text-white">
                      {publicacion?.category[0] ? (
                        publicacion.category[0].name
                      ) : (
                        <>Sin Categoria </>
                      )}
                    </span>
                  </div>
                  <h5 className="fw-bold pt-2 mb-0 title">
                    {publicacion.title}
                  </h5>
                  <p
                    className="fs-6 text-secondary mb-0 description"
                  >
                    {publicacion.description}
                  </p>
                </div>
                <div className="containerStars d-flex flex-md-column justify-content-center gap-4 align-items-center justify-content-md-start gap-md-1 align-items-md-start">
                  <div className="d-flex align-items-center gap-1 text-center">
                    <IoMdStar className="fs-3 text-warning" />
                    <span>5.0</span>
                  </div>
                  <span className="text-center">10 valoraciones</span>
                </div>
              </div>
            </div>
            {publicacion.worker.outstanding && (
              <div className="d-flex justify-content-between align-items-center w-100 pb-2">
                <div className="d-none d-md-block text-center outstanding rounded-2 text-white py-1 px-4">
                  <span>Destacado</span>
                </div>
              </div>
            )}
            <div className="d-flex justify-content-end align-items-center d-lg-none w-100 pb-2">
                <div className="d-none text-center outstanding rounded-2 text-white py-1 px-4">
                  <span>Destacado</span>
                </div>
                <Link
          className="btn rounded-3 btnSeeProfile text-white d-lg-none"
          to={"/detalle-profesional"}
        >
          Más información
        </Link>
              </div>
            
          </div>
        ))
      ) : (
        <div className="card cardPublication pt-2 px-2 px-md-3 rounded-3 shadow">
          <div className="d-flex flex-column flex-md-row w-100 gap-2 gap-md-4 h-100">
            <div className="col-6 d-flex flex-column justify-content-md-between align-items-center w-50 mx-auto">
              <img
                src="https://media.discordapp.net/attachments/1271548261097934871/1271583466768564368/Imagen_de_WhatsApp_2024-08-09_a_las_18.37.56_612a8ac6.jpg?ex=66b7dde3&is=66b68c63&hm=56f0c7645bf3ca0e1028530d01f492ba11269c4f9b28ecf75f1a24f9e7da0f65&=&format=webp&width=676&height=676"
                alt="imagen de perfil"
                className="imgCardPublication border rounded-circle w-100"
              />
            </div>
            <div className="d-flex text-center justify-content-center items-center align-items-center">
              <h2>Aún no hay trabajadores!</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardPublicacion
