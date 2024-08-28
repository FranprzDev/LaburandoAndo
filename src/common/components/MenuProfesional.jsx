import { Link, useNavigate } from "react-router-dom";
import image from "../../img/Logo.jpg";
import { FaUser, FaWpforms, FaListAlt, FaUsers } from "react-icons/fa";
import { BiSolidExit, BiSupport } from "react-icons/bi";
import { GrUserWorker } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { fetchWorkerForID } from "../../slices/actions/workersActions";
import { useEffect, useState } from "react";
import useLogout from "../../hooks/useLogout";
import useAlert from "../../hooks/useAlertHook";

const MenuProfesional = () => {
  const userJwt = useSelector((state) => state.auth.user);
  const worker = useSelector((state) => state.workers.worker);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { customAlert } = useAlert();
  const { cerrarSesion } = useLogout();
  const logoutUser = () =>{
    customAlert("¿Estás seguro que deseas salir?", cerrarSesion);
  }

  const [imageLoading, setImageLoading] = useState(true); 
  useEffect(() => {
    if (userJwt?._id) {
      dispatch(fetchWorkerForID(userJwt?._id));
    }
  }, [userJwt, dispatch]);

  const handleImageLoaded = () => {
    setImageLoading(false);
  };
  console.log(worker)

  return (
    <nav className="navbar navbar-expand-md menuProfessional bg-body-tertiary d-flex align-items-start w-100 px-2 py-3">
      <div className="px-0 px-md-2 py-md-3 pt-lg-0 container-fluid containerMenu d-flex flex-md-column align-items-start">
        <div className="text-md-center">
          <Link className="fw-medium text-dark logo" to={"/"}>
            LaburandoAndo
          </Link>
        </div>
        <figure className="d-none text-center w-100 mt-3 mt-md-5 mt-lg-3 mt-xl-5 mb-md-3 mb-lg-0 mb-xl-3 d-md-flex flex-column align-items-center position-relative">
          {imageLoading && (
            <div className="position-absolute top-50 start-50 translate-middle w-100 h-100 d-flex justify-content-center align-items-center">
              <div className="spinner"></div> 
            </div>
          )}
          <img
            src={worker ? worker.img : image}
            alt="imagen de perfil"
            title="imagen de perfil"
            className={`rounded-circle shadow  imgProfileUser ${imageLoading ? 'd-none' : 'd-block'}`}
            onLoad={handleImageLoaded}
        
          />
          <figcaption className="fw-bold fs-5 mt-2">
            {worker ? worker.fullname : "Admin"}
          </figcaption>
          <figcaption>{worker ? worker.address : "Remoto"}</figcaption>
        </figure>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbarMd"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas menuOffcanvas offcanvas-end w-75"
          id="offcanvasNavbarMd"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>
          <figure className="d-md-none text-center w-100 d-flex flex-column align-items-center mt-3 mt-md-5 mt-lg-3 mt-xl-5 mb-md-3 mb-lg-0 mb-xl-3 position-relative">
            {imageLoading && (
              <div className="position-absolute top-50 start-50 translate-middle w-100 h-100 d-flex justify-content-center align-items-center">
                <div className="spinner"></div> {/* Loader */}
              </div>
            )}
            <img
              src={worker ? worker.img : image}
              alt=""
              className={`rounded-circle shadow imgProfileUser ${imageLoading ? 'd-none' : 'd-block'}`}
              onLoad={handleImageLoaded}
         
            />
            <figcaption className="fw-bold fs-5 mt-2">
              {worker ? worker.fullname : "Admin"}
            </figcaption>
            <figcaption>{worker ? worker.address : ""}</figcaption>
          </figure>
          <div className="offcanvas-body d-flex justify-content-md-center ps-xxl-4">
            <ul className="navbar-nav d-flex flex-column justify-content-start mt-3">
              <li className="nav-item mt-xl-3 navItemOffCanvas">
                <Link
                  className="nav-link px-0 d-flex gap-2 align-items-center navLink"
                  to={`${worker ? "/work/mi-perfil" : "/admin/clientes"}`}
                >
                  {worker ? (
                    <FaUser className="fs-5 iconMenu" />
                  ) : (
                    <FaUsers className="fs-5 iconMenu" />
                  )}
                  <span className="align-middle">
                    {worker ? "Mi perfil" : "Clientes"}
                  </span>
                </Link>
              </li>
              <li className="nav-item navItemOffCanvas d-flex gap-2 align-items-center">
                <Link
                  className="nav-link px-0 d-flex gap-2 align-items-center navLink"
                  to={`${
                    worker ? "/work/publicar-anuncio" : "/admin/profesionales"
                  }`}
                >
                  {worker ? (
                    <FaWpforms className="fs-5 iconMenu" />
                  ) : (
                    <GrUserWorker className="fs-5 iconMenu" />
                  )}
                  <span className="align-middle">
                    {worker ? "Publicar Anuncio" : "Profesionales"}
                  </span>
                </Link>
              </li>
              <li className="nav-item navItemOffCanvas">
                <Link
                  className="nav-link px-0 d-flex gap-2 align-items-center navLink"
                  to={`${
                    worker ? "/work/mis-publicaciones" : "/admin/categorias"
                  }`}
                >
                  <FaListAlt className="fs-5 iconMenu" />
                  <span className="align-middle">
                    {worker ? "Mis publicaciones" : "Categorías"}
                  </span>
                </Link>
              </li>
              <li className="nav-item navItemOffCanvas navLink">
                <Link
                  className="nav-link px-0 d-flex gap-1 align-items-center navLink"
                  to={`${
                    worker ? "/work/soporteProfesional" : "/admin/soporte"
                  }`}
                >
                  <BiSupport className="fs-4 iconMenu" />
                  <span className="align-middle">Soporte</span>
                  {userJwt?.role !== "worker" && (
                    <span className="rounded-circle px-2 bg-primary text-white">
                      5
                    </span>
                  )}
                </Link>
              </li>
              <li className="nav-item navItemOffCanvas text-start">
                <button
                  className="nav-link px-0 w-100 text-start d-flex gap-1 align-items-center navLink"
                  onClick={logoutUser}
                >
                  <BiSolidExit className="fs-4 iconMenu" />
                  <span className="align-middle">Salir</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MenuProfesional;
