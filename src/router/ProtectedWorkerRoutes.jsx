import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProtectedWorkerRoutes = ({ children }) => {
  const usuario = JSON.parse(sessionStorage.getItem("usuarioLogeado")) || null;
  const navigate = useNavigate();
  useEffect(() => {
    if (!usuario || usuario.role !== "worker") {
      navigate("/*");
    }
  }, [usuario, navigate]);

  if (usuario && usuario.role === "worker") {
    return children;
  } else {
    return null;
  }
};

export default ProtectedWorkerRoutes;
