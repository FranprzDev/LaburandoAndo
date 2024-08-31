import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProtectedAdminRoutes = ({ children }) => {
  const usuario = JSON.parse(sessionStorage.getItem("usuarioLogeado")) || null;
  const navigate = useNavigate();
  useEffect(() => {
    if (!usuario || usuario.role !== "admin") {
      navigate("/*");
    }
  }, [usuario, navigate]);

  if (usuario && usuario.role === "admin") {
    return children;
  } else {
    return null;
  }
};

export default ProtectedAdminRoutes;
