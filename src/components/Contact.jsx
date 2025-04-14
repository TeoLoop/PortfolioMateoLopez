import React, { useEffect, useRef, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';

export const Contact = () => {
  const [state, handleSubmit] = useForm("xovebqze");
  const [showMsg, setShowMsg] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (state.succeeded) {
      setShowMsg(true);
      formRef.current.reset(); // limpia campos

      const timer = setTimeout(() => {
        setShowMsg(false);
      }, 3000); // oculta luego de 3s

      return () => clearTimeout(timer); // limpieza
    }
  }, [state.succeeded]);

  return (
    <section className="contacto" id="contacto">
      <h2>Contacto</h2>

      <form onSubmit={handleSubmit} ref={formRef}>
        <input type="text" name="nombre" placeholder="Tu nombre" required />
        <input type="email" name="email" placeholder="Tu correo" required />
        <textarea name="message" placeholder="Tu mensaje" required />

        <button type="submit" disabled={state.submitting}>
          Enviar
        </button>

        {showMsg && (
          <p className={`mensaje-exito ${!showMsg ? 'oculto' : ''}`}>
            ¡Mensaje enviado correctamente!
          </p>
        )}

        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </form>
    </section>
  );
};
