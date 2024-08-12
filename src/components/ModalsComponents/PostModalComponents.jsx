import { useEffect } from 'react';
import Swal from 'sweetalert2';

const PostModalComponent = ({ postCreateState }) => {
  useEffect(() => {
    if (postCreateState === "exitoso") {
      Swal.fire({
        icon: 'success',
        title: 'Publicación exitosa',
        text: 'Tu publicación ha sido exitosa',
      });
    } else if (postCreateState === "denegado") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error al crear tu post. Inténtalo de nuevo',
      });
    }
  }, [postCreateState]);

  return null;
};

export default PostModalComponent;