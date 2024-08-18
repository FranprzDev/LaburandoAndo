import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { resetPostStatus } from '../slices/postsSlice';

const PostModalComponent = ({ postCreateState }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (postCreateState === "exitoso") {
      Swal.fire({
        icon: 'success',
        title: 'Publicación exitosa',
        text: 'Tu publicación ha sido exitosa',
      });
      dispatch(resetPostStatus());
    } else if (postCreateState === "denegado") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error al crear tu post. Inténtalo de nuevo',
      });
    }
    dispatch(resetPostStatus());
  }, [postCreateState]);

  return null;
};

export default PostModalComponent;