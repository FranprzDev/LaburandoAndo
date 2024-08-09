import { createContext, useEffect, useState } from "react";

const INITIAL_STATE = {
    name: "",
    email: "",
    password: "",
    phone: "",
    location: "",
    photo: "",
    type: "",
    authMethod: "",
};

const createRegisterContext = createContext(INITIAL_STATE);
const Provider = createRegisterContext.Provider;

const RegisterProvider = ({ children }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [retryPassword, setRetryPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");
    const [photo, setPhoto] = useState("");
    const [type, setType] = useState("");
    const [authMethod, setAuthMethod] = useState("");

    return (
        <Provider
            value={{
                name,
                setName,
                email,
                setEmail,
                password,
                retryPassword,
                setPassword,
                setRetryPassword,
                phone,
                setPhone,
                location,
                setLocation,
                photo,
                setPhoto,
                type,
                setType,
                authMethod,
                setAuthMethod,
            }}
        >
            {children}
        </Provider>
    );
}

export { createRegisterContext, RegisterProvider };