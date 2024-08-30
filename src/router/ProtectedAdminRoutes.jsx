import { useNavigate } from "react-router-dom";
import useAlert from "../hooks/useAlertHook";
import { useEffect } from "react";

const ProtectedAdminRoutes = ({ children }) => {
  const usuario = JSON.parse(sessionStorage.getItem("usuarioLogeado")) || null;
  const { autoCloseAlert } = useAlert();
  const navigate = useNavigate();
  useEffect(() => {
    if (!usuario || usuario.role !== "admin") {
      autoCloseAlert("No tienes permisos para acceder a esta página", "error");
      navigate("/");
    }
  }, [usuario, navigate, autoCloseAlert]);

  if (usuario && usuario.role === "admin") {
    return children;
  } else {
    return null;
  }
};

export default ProtectedAdminRoutes;
