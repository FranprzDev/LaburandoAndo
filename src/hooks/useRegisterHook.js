import { useContext } from "react";
import { createRegisterContext } from "../Context/registerContext";

export const useRegisterHook = () => {
    const {
        name,
        email,
        password,
        phone,
        location,
        photo,
        authMethod,
        type,
        setName,
        setEmail,
        retryPassword,
        setPassword,
        setRetryPassword,
        setPhone,
        setLocation,
        setPhoto,
        setType,
        setAuthMethod,
    } = useContext(createRegisterContext);
    
    const changeName = (name) => {
        setName(name);
    }

    const changeEmail = (email) => {
        setEmail(email);
    }

    const changePassword = (password) => {
        setPassword(password);
    }

    const changeRetryPassword = (retryPassword) => {
        setRetryPassword(retryPassword);
    }


    const changePhone = (phone) => {
        setPhone(phone);
    }

    const changeLocation = (location) => {
        setLocation(location);
    }

    const changePhoto = (photo) => {
        setPhoto(photo);
    }

    const changeType = (type) => {
        setType(type);
    }

    const changeAuthMethod = (authMethod) => {
        setAuthMethod(authMethod);
    }

    const comparePassword = () => {
        if(password === "" && retryPassword === "") return false
        return password === retryPassword
    }

    const createProfessional = () => {
        const professional = {
            name,
            email,
            password,
            phone,
            location,
            photo,
            type,
            authMethod
        }
    }

    return {
        type,
        changeName,
        changeEmail,
        changePassword,
        changeRetryPassword,
        changePhone,
        changeLocation,
        changeType,
        changeAuthMethod,
        comparePassword,
        createProfessional
    }
}