import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000",
});

const getCategories = async () => {
    try {
        const response = await instance.get('/category/');
        return response.data; // Asegúrate de que esta es la estructura de los datos esperados
    } catch (error) {
        console.error('Error al solicitar las categorías', error);
        throw error;
    }
};

export default instance;
export {getCategories}