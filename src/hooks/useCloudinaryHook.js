export const useCloudinary = () => {
    /* Hagan aquí la lógica del Cloudinary, es una sugerencia del loco GPT, pruebenlo. */
    
    const uploadImage = async (file) => {
        const data = new FormData()
        data.append('file', file)
        data.append('upload_preset', 'laburandoando')
        const res = await fetch('https://api.cloudinary.com/v1_1/dz9z4rj5b/image/upload', {
            method: 'POST',
            body: data
        })
        const image = await res.json()
        return image.secure_url
    }

    
    return {
        uploadImage
    }
}