import { useNavigate } from "react-router-dom"
import useAlert from "../hooks/useAlertHook"
import { useEffect } from "react"


const ProtectedWorkerRoutes = ({children}) => {
    const usuario = JSON.parse(sessionStorage.getItem('usuarioLogeado')) || null
    const {autoCloseAlert} = useAlert()
    const navigate = useNavigate()
    useEffect(() => {
        if (!usuario || usuario.role !== "worker") {
            autoCloseAlert("No estas logueado o no eres un profesional para acceder a esta página", "error")
            navigate('/')
        }
    }, [usuario, navigate, autoCloseAlert])

    if(usuario && usuario.role === "worker")
    {
        return children
    }
    else{
        return null
    }
}

export default ProtectedWorkerRoutes