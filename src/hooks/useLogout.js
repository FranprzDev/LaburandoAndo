import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../slices/authSlice";

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cerrarSesion = () => {
    let usuario = JSON.parse(sessionStorage.getItem("usuarioLogeado"));
    if (usuario.role === "admin") {
      sessionStorage.removeItem("usuarioLogeado");
    } else {
      dispatch(logout());
    }
    navigate("/");
  };

  return { cerrarSesion };
};

export default useLogout;
