import FormularioContacto from "./components/FormularioContacto";

const Contacto = () => {
  return (
    <section className="mainSection container py-3 py-lg-5">
      <div className="text-center mb-md-4">
        <h1>¿En qué podemos ayudarte?</h1>
        <h2 className="my-3">Hablemos por email</h2>
      </div>
      <div className="d-flex justify-content-center w-100">
        <FormularioContacto />
      </div>
    </section>
  );
};

export default Contacto;
