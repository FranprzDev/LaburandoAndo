import React, { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { changePhoto } from "../../slice/registerSlice";
import { useCloudinary } from "../../hooks/useCloudinaryHook";
import Swal from "sweetalert2";

const ImageUploader = () => {
  const [file, setFile] = useState(null);

  const { error, imageUrl, uploadImage } = useCloudinary();

  const dispatch = useDispatch();

  const img = useMemo(() => imageUrl, [imageUrl]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    const file = e.target.files[0];
    
    file ? uploadImage(file) : Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Hubo un error al cargar la imagen. Inténtalo de nuevo',
    })
    
    error !== "" ? dispatch(changePhoto(img)) : Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Hubo un error al cargar la imagen. Inténtalo de nuevo',
    })
  };

  return (
    <div className="d-flex align-items-center justify-content-center position-relative mb-3 flex-column">
      <label
        htmlFor="file-upload"
        className="btn uploadPlusButton rounded-circle d-flex align-items-center justify-content-center"
        style={{ width: "6rem", height: "6rem" }}
      >
        <input id="file-upload" type="file" className={`d-none ${!file ? "uploadButtonDefaultValue" : ""}`} accept="image/jpeg, image/png" onChange={handleFileChange} 
            defaultValue={file ? file.name : ""}
        />
        <div className="position-relative">
          <div className="position-absolute" style={{ top: "0px", left: "0px", transform: "translate(50%, 50%)" }}>
            <div className="uploadButton text-white rounded-circle p-1">
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
                className="bi bi-plus-lg"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </div>
          </div>
        </div>
      </label>
      {file && <div className="mt-2 text-center">{file.name}</div>}
    </div>
  );
};

export default ImageUploader;