import "../../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchWorkers } from "../../slice/workersSlice";
import { loginUser } from "../../slice/authSlice";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const workers = useSelector((state)=> state.workers.workers);
  const workersStatus = useSelector((state)=> state.workers.status)

  const navigate = useNavigate();
  
  useEffect(() => {
    if (workersStatus === 'idle') {
      dispatch(fetchWorkers());
    }
  }, []);

  const login = async (usuario) => {

    const trabajadorBuscado = workers.find(
      (w) => w.mail === usuario.mail
    ); 

    
    if(trabajadorBuscado){

      dispatch(loginUser(usuario))
      navigate("/mi-perfil");
      Swal.fire({
        icon: 'success',
        title: 'Bienvenido'
      });
    }else{
      Swal.fire({
        icon: 'error',
        title: 'No se pudo iniciar sesión',
        text: 'Los datos ingresados no son correctos.',
      });
    }
  };

  return (
        <div className="container d-flex flex-column align-items-center justify-content-center py-4">
        
        <div className="row w-100">
          
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto">
            <form className="card p-4" onSubmit={handleSubmit(login)}>
              <div className="text-center">
                <h5 className="card-title">
                  Accede a <span className="text-primary">LaburandoAndo</span>
                </h5>
              </div>
              <div className="card-body">
                <button className="btn btn-LoginGoogle btn-outline-secondary w-100 d-flex align-items-center justify-content-center mb-4">
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
                </button>
                <div className="text-center my-3">
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control input"
                      placeholder="juanperez@gmail.com"
                      {...register("mail", {
                        required: 'El correo es obligatorio',
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
                      className="form-control input"
                      placeholder="Ju4n23!"
                      {...register("password", {
                        required: 'La contraseña es obligatoria',
                        minLength: {
                          value: 8,
                          message: 'La clave debe tener al menos 8 caracteres',
                        },
                        maxLength: {
                          value: 70,
                          message: 'La clave debe tener como máximo 70 caracteres',
                        },
                      })}
                    />
                     <div className="text-danger text-start">
                      {errors.password?.message}
                    </div>
                  </div>
                  <button className="btn btn-danger w-100 mb-3">Ingresar</button>
                </div>
                <div className="text-center">
                  <Link to={"/*"} className="text-primary text-decoration-none">
                    ¿No recuerdas tu contraseña?
                  </Link>
                </div>
              </div>
              <div className="d-flex align-items-center w-100 my-3">
                <hr className="flex-grow-1 border border-secondary border-1" />
                <span className="mx-2">o</span>
                <hr className="flex-grow-1 border border-secondary border-1" />
              </div>
              <div className="text-center">
                <Link
                  to={"../register"}
                  className="btn btn-outline-secondary btn-Registrarse w-100 mt-2 text-dark"
                >
                  Crear una cuenta nueva
                </Link>
              </div>
            </form>
          
          </div>
        </div>
      </div>  
  );
}
