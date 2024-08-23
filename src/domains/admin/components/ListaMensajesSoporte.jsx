import ItemMensaje from "./ItemMensaje";

const ListaMensajesSoporte = () => {
  return (
    <div className="gap-3 align-items-start d-flex flex-column containerMessages w-100 mt-2">
      <ItemMensaje></ItemMensaje>
      <ItemMensaje></ItemMensaje>
      <ItemMensaje></ItemMensaje>
      <ItemMensaje></ItemMensaje>
      <ItemMensaje></ItemMensaje>
      {/* <div className="mt-5 text-center border px-3 py-5 p-md-5 rounded-2 shadow">
        <p className="mb-4">No tienes mensajes!</p>
      </div> */}
    </div>
  );
};

export default ListaMensajesSoporte;
