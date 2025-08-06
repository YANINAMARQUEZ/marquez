const FormContacto = () => {
  return (
    <form className="flex flex-col gap-4 max-w-md mx-auto">
      <input type="text" placeholder="Nombre completo" required className="input" />
      <input type="email" placeholder="Correo electrónico" required className="input" />
      <textarea placeholder="Contanos tu necesidad..." required className="textarea" />
      <button type="submit" className="btn">Enviar consulta</button>
    </form>
  );
};

export default FormContacto;
