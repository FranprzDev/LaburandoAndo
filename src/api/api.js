import axios from "axios";
const url = import.meta.env.VITE_URL_BACK;

const instance = axios.create({
    baseURL: url,
});

const getCategories = async () => {
    try {
        const response = await instance.get('/category/');
        return response.data;
    } catch (error) {
        console.error('Error al solicitar las categorías', error);
        throw error;
    }
};

export default instance;
export {getCategories}