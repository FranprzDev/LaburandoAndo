import React, { useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BiSolidExit } from "react-icons/bi";
import { FaListAlt, FaUser, FaWpforms } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link} from "react-router-dom";
import "../styles/menu.css";
import useLogout from "../hooks/useLogout";

const Menu = () => {
  const user = useSelector((state) => state.auth.user);
  const status = useSelector((state) => state.auth.stateSync);

  const { cerrarSesion } = useLogout();

  useEffect(() => {}, [status]);

  return (
    <Navbar expand="lg" className="bg-body-tertiary text-center ">
      <Container>
        <Link to={"/"} className="navbar-brand display-6">
          <h5 className="display-6">LaburandoAndo</h5>
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
            {user ? (
              <Link className="btn btn-Profesional px-md-4" to="/work/publicar-anuncio">
                Publicar Anuncio
              </Link>
            ) : (
              <Link className="btn btn-Profesional me-3" to="/auth/register">
                Anúnciate como profesional
              </Link>
            )}

            {user ? (
              <>
              <Link className="nav-link d-lg-none" to="/work/mi-perfil">
                Mi cuenta
              </Link>
              <button className="py-0 nav-link text-center nav-item w-100 d-lg-none" onClick={cerrarSesion}>
                <span className="align-middle">Salir</span>
              </button>
              <NavDropdown
                title={`Mi cuenta`}
                id="basic-nav-dropdown"
                className="w-7100 mx-auto d-none d-lg-block"
              >
                <div className="w-100 text-center">
                  <img
                    src={user.img}
                    alt="imagen de perfil"
                    title="imagen de perfil"
                    className="rounded-circle shadow imgProfileDropdown mx-auto"
                  />
                </div>
                <p className="fw-bold text-center my-1">{user.fullname}</p>
                <NavDropdown.Item as={Link} to={"/work/mi-perfil"} className="d-flex gap-2 align-items-center px-2">
                  <FaUser className="fs-5 iconMenu" />{" "}
                  <span className="align-middle">Mi Perfil</span>
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/work/publicar-anuncio"} className="d-flex gap-2 align-items-center px-2">
                  <FaWpforms className="fs-5 iconMenu" />{" "}
                  <span className="align-middle">Publicar Anuncio</span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="d-flex gap-2 align-items-center px-2"
                  as={Link}
                  to={"/work/mis-publicaciones"}
                >
                  <FaListAlt className="fs-5 iconMenu" />
                  <span className="align-middle">Mis publicaciones</span>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <button className="py-0 nav-link text-start d-flex gap-1 align-items-center nav-item w-100 px-1" onClick={cerrarSesion}>
                  <BiSolidExit className="fs-4 iconMenu" />
                  <span className="align-middle">Salir</span>
                </button>
              </NavDropdown>
              </>            
            ) : (
              <Link className="nav-link " to="/auth/login">
                <IoPersonCircleOutline className="me-1 fs-4" />
                Ingresar
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
