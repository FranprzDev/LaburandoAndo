import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { logout } from "../slice/authSlice";

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cerrarSesion = () => {
    Swal.fire({
      text: "¿Estás seguro que deseas salir?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logout());
        navigate("/");
      }
    });
  };

  return { cerrarSesion };
};

export default useLogout;