import { useMemo, useState } from 'react';
import axios from 'axios';
import useAlert from './useAlertHook';

const preset_key = "imgUploader"
const cloudname = "dh4b6g2ld"

export const useCloudinary = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    const { autoCloseAlert } = useAlert();

    const uploadImage = async (file, folderName) => {
        setError(null);
        let url;

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', preset_key);
        formData.append('folder', folderName);

        try {
            const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloudname}/upload`, formData);
            url = response.data.secure_url;
        } catch (error) {
            setError(error);
            console.log(error);
        }

        return url;
    };

    const readImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        if (!file.type.startsWith('image/')) {
            autoCloseAlert('Archivo no válido', 'error');
            return;
        }

        reader.onload = (e) => {
            const previewImage = e.target.result;
            setPreviewImage(previewImage);
        };
        reader.readAsDataURL(file);
    };

    return {
        uploadImage,
        readImage,
        loading,
        setLoading,
        error,
        previewImage
    };
};