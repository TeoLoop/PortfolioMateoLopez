import React, { useState, useRef } from 'react';
import './Contact.css';

export const Contact = () => {
  const [enviado, setEnviado] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(formRef.current);

    fetch("https://formsubmit.co/matelopez2830@gmail.com", {
      method: "POST",
      body: data,
    })
      .then((res) => {
        if (res.ok) {
          setEnviado(true);
          formRef.current.reset(); // limpia los campos
        }
      })
      .catch((err) => console.error("Error al enviar", err));
  };

  return (
    <section className="contacto" id="contacto">
      <h2>Contacto</h2>

      <form ref={formRef} onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Tu nombre" required />
        <input type="email" name="email" placeholder="Tu correo" required />
        <textarea name="mensaje" placeholder="Tu mensaje" required />
        
        <button type="submit">Enviar</button>

        {enviado && <p className="mensaje-exito">¡Mensaje enviado correctamente!</p>}
      </form>
    </section>
  );
};
