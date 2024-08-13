import { useState } from 'react';

export const useCloudinary = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    const uploadImage = async (file) => {
        setLoading(true);
        setError(null);
        try {
            const data = new FormData();
            data.append('file', file);
            data.append('upload_preset', 'imgUploader');
            const res = await fetch(`https://api.cloudinary.com/v1_1/dh4b6g2ld/image/upload`, {
                method: 'POST',
                body: data
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const image = await res.json();
            setImageUrl(image.secure_url);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            setError(err);
        }
    };

    return {
        uploadImage,
        imageUrl,
        loading,
        error
    };
};