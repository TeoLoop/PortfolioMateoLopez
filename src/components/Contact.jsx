import React, { useEffect, useRef, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useTheme } from '../context/ThemeContext'; // Importar el hook de tema
import './Contact.css';

export const Contact = () => {
  const [state, handleSubmit] = useForm("xovebqze");
  const [showMsg, setShowMsg] = useState(false);
  const formRef = useRef(null);
  const { theme } = useTheme(); // Obtener el tema actual

  useEffect(() => {
    if (state.succeeded) {
      setShowMsg(true);
      formRef.current.reset(); // Limpia los campos

      const timer = setTimeout(() => {
        setShowMsg(false);
      }, 3000); // Oculta el mensaje después de 3 segundos

      return () => clearTimeout(timer); // Limpieza
    }
  }, [state.succeeded]);

  return (
    <section className={`contacto ${theme === 'light' ? 'light' : ''}`} id="contacto">
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
