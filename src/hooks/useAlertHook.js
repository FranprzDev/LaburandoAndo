import Swal from "sweetalert2";

const useAlert = () => {
    const customAlert = (title, action = null) => {
        Swal.fire({
            title: `<div><span class="text-custom-modal">${title}</span></div>`,
            showCancelButton: true,
            confirmButtonColor: "#3085D6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancelar",
            confirmButtonText: "Aceptar",
            buttonsStyling: false,
            customClass: {
                container: "custom-container",
                popup: "alert-custom",
                confirmButton: "custom-confirm-button",
                cancelButton: "custom-cancel-button"
            },
        }).then((result) => {
            if (result.isConfirmed) {
                if (typeof action === "function") {
                    action();
                }
            }
        });
    };

    const autoCloseAlert = (title, type) => {
        Swal.fire({
            position: "bottom",
            title: `<div class="text-modal-container"><span class="text-modal">${title}</span></div>`,
            color: "black",
            icon: type,
            showConfirmButton: false,
            toast: true,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            },
            customClass: {
                container: "alert-container",
                popup: type,
            },
        });
    };

    return { customAlert, autoCloseAlert };
};

export default useAlert;