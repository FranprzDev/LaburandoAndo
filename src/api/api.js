import axios from "axios";

const instance = axios.create({
    baseURL: "https://laburandoando-back.onrender.com/",
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