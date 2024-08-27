import React, { useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BiSolidExit } from "react-icons/bi";
import { FaListAlt, FaUser, FaWpforms } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/menu.css";
import useLogout from "../../hooks/useLogout";
import image from "../../img/Logo.jpg";
import useAlert from "../../hooks/useAlertHook";

const Menu = () => {
  const user = useSelector((state) => state.auth.user);
  const status = useSelector((state) => state.auth.stateSync);

  const usuario = JSON.parse(sessionStorage.getItem("usuarioLogeado")) || null;

  const { customAlert } = useAlert();
  const { cerrarSesion } = useLogout();

  const logoutUser = () =>{
    customAlert("¿Estás seguro que deseas salir?", cerrarSesion);
  }
  useEffect(() => {}, [status]);
  useEffect(()=>{

  },[user,usuario])

  return (
    <Navbar expand="lg" className="bg-body-tertiary text-center border-bottom">
      <Container>
        <Link to={"/"} className="navbar-brand ">
          <h5 className="logo">LaburandoAndo</h5>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-lg-auto d-flex justify-content-center flex-column flex-lg-row align-items-center ">
            <Link
              className={`nav-link ${user ? "me-lg-3" : "me-lg-3"}`}
              to={"/profesionales"}
            >
              Profesionales
            </Link>
            {user?.role === "worker" && (
              <Link
                className="btn btn-Profesional px-md-4"
                to="/work/publicar-anuncio"
              >
                Publicar Anuncio
              </Link>
            )}
            {(user?.role !== "worker" && user?.role !== "client" && (usuario && usuario.role !== "admin")) && (
              <Link className="btn btn-Profesional me-3" to="/auth/register">
                Anúnciate como profesional
              </Link>
            )}
            {(!user && !usuario) && (
              <Link
                className="nav-link d-flex align-items-center gap-1 me-3"
                to="/auth/login"
              >
                <span className="fs-3 align-middle d-flex align-items-center">
                  <IoPersonCircleOutline></IoPersonCircleOutline>
                </span>
                <span>Ingresar</span>
              </Link>
            )}
            {((usuario && usuario.role === "admin") || user?.role === "worker")  && (
              <>
                <Link className="nav-link d-lg-none" to={`${user?.role === "worker" ? "/work/mi-perfil" : "/admin/clientes"}`}>
                  Mi cuenta
                </Link>
                <button
                  className="py-0 nav-link text-center nav-item w-100 d-lg-none"
                  onClick={cerrarSesion}
                >
                  <span className="align-middle">Salir</span>
                </button>
                <NavDropdown
                  title={`Mi cuenta`}
                  id="basic-nav-dropdown"
                  className="w-7100 mx-auto d-none d-lg-block"
                >
                  <div className="w-100 text-center">
                    <img
                      src={`${user?.role === "worker" ? `${user.img}` : `${image}`}`}
                      alt="imagen de perfil"
                      title="imagen de perfil"
                      className="rounded-circle shadow imgProfileDropdown mx-auto"
                    />
                  </div>
                  <p className="fw-bold text-center my-1">{`${user?.role === "worker" ? `${user.fullname}` : `admin`}`}</p>
                  <NavDropdown.Item
                    as={Link}
                    to={`${user?.role === "worker" ? `/work/mi-perfil` : `/admin/clientes`}`}
                    className="d-flex gap-2 align-items-center px-2"
                  >
                    <FaUser className="fs-5 iconMenu" />{" "}
                    <span className="align-middle">{`${user?.role === "worker" ? `Mi perfil` : `Clientes`}`}</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to={`${user?.role === "worker" ? `/work/publicar-anuncio` : `/admin/profesionales`}`}
                    className="d-flex gap-2 align-items-center px-2"
                  >
                    <FaWpforms className="fs-5 iconMenu" />{" "}
                    <span className="align-middle">{`${user?.role === "worker" ? `Publicar Anuncio` : `Profesionales`}`}</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="d-flex gap-2 align-items-center px-2"
                    as={Link}
                    to={`${user?.role === "worker" ? `/work/mis-publicaciones` : `/admin/categorias`}`}
                  >
                    <FaListAlt className="fs-5 iconMenu" />
                    <span className="align-middle">{`${user?.role === "worker" ? `Mis publicaciones` : `Categorías`}`}</span>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <button
                    className="py-0 nav-link text-start d-flex gap-1 align-items-center nav-item w-100 px-1"
                    onClick={logoutUser}
                  >
                    <BiSolidExit className="fs-4 iconMenu" />
                    <span className="align-middle">Salir</span>
                  </button>
                </NavDropdown>
              </>
            )}

            {user?.role === "client" && (
              <>
                <NavDropdown
                  title={`${user.fullname}`}
                  id="basic-nav-dropdown"
                  className="w-7100 mx-auto"
                >
                  <p className=" text-center my-1 mb-2"></p>
                  <button
                    className="py-0 nav-link text-start d-flex gap-1 align-items-center nav-item w-100 px-1"
                    onClick={logoutUser}
                  >
                    <BiSolidExit className="fs-4 iconMenu" />
                    <span className="align-middle">Salir</span>
                  </button>
                </NavDropdown>
              </>
            )}
             
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
