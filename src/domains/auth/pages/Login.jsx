import "../styles/min/login.min.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loginUser } from "../../../slices/actions/authActions";
import useAlert from "../../../hooks/useAlertHook";
import Loader from "../../../components/loaders/Loader";

export default function Login() {

  const adminEmail = import.meta.env.VITE_ADMIN_MAIL;
  const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const role = useSelector((state) => state.auth.role);
  const status = useSelector((state) => state.auth.status);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const navigate = useNavigate();

  const { autoCloseAlert } = useAlert();

  const login = async (usuario) => {
    if(usuario.mail === adminEmail && usuario.password === adminPassword){
      usuario.role = "admin";
      autoCloseAlert(`Haz iniciado sesión. Bienvenido Administrador!`, "success");
      sessionStorage.setItem("usuarioLogeado", JSON.stringify(usuario));
      navigate("/admin/clientes")
    }else{
      dispatch(loginUser(usuario));
    }
  };

  useEffect(() => {
    if (status === "error") {
      autoCloseAlert(`Correo o Contraseña incorrecto. Verifica los datos ingresados`, "error");
    } else if (status === "exitoso" && isAuth) {
      autoCloseAlert(`Haz iniciado sesión. Bienvenido!`, "success");
      if (role === "client"){
        navigate("../../profesionales");
      } 
      if (role === "worker"){
        navigate("../../work/mi-perfil");
      } 
      // dispatch(reset());
    }
  }, [status]);

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center py-5">
      {
        status === "cargando" && <Loader />
        // AQUI HAY QUE VER COMO HACER PARA QUE ESTE LOADER QUEDE BIEN XD
      } 
      <div className="row w-100">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto">
          <form className="card py-3 px-3 p-md-4 shadow" onSubmit={handleSubmit(login)}>
            <div className="text-center">
              <h5 className="card-title">
                Accede a <span className="text-primary">LaburandoAndo</span>
              </h5>
            </div>
            <div className="card-body px-0 px-lg-4">
              <Link to={"/*"} className="btn btnLoginGoogle btn-outline-secondary w-100 d-flex align-items-center justify-content-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="me-2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="4" />
                  <line x1="21.17" x2="12" y1="8" y2="8" />
                  <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
                  <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
                </svg>
                Continúa con Google
              </Link>
              <div className="text-center my-3">
                <div className="mb-3">
                  <input
                    type="email"
                    title="Ingresa tu correo electrónico"
                    className="form-control input"
                    placeholder="juanperez@gmail.com"
                    {...register("mail", {
                      required: "El correo es obligatorio",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Ingrese una direccion de correo válida",
                      },
                    })}
                  />
                  <div className="text-danger text-start">
                    {errors.mail?.message}
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    title="Ingresa tu contraseña"
                    className="form-control input"
                    placeholder="Ju4n23!"
                    {...register("password", {
                      required: "La contraseña es obligatoria",
                      minLength: {
                        value: 8,
                        message: "La clave debe tener al menos 8 caracteres",
                      },
                      maxLength: {
                        value: 70,
                        message:
                          "La clave debe tener como máximo 70 caracteres",
                      },
                    })}
                  />
                  <div className="text-danger text-start">
                    {errors.password?.message}
                  </div>
                </div>
                <button className="btn btnLogin w-100 mb-md-3">Ingresar</button>
              </div>
              <div className="text-center">
                <Link to={"/*"} className="text-primary text-decoration-none">
                  ¿No recuerdas tu contraseña?
                </Link>
              </div>
            
            <div className="d-flex align-items-center w-100 my-md-3">
              <hr className="flex-grow-1 border border-secondary border-1" />
              <span className="mx-2">o</span>
              <hr className="flex-grow-1 border border-secondary border-1" />
            </div>
            <div className="text-center">
              <Link
                to={"../register"}
                className="btn btnCreateAccount w-100 mt-2"
              >
                Crear una cuenta nueva
              </Link>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
