import React, { useEffect, useRef, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useTheme } from '../context/ThemeContext';
import './Contact.css';

export const Contact = () => {
  const [state, handleSubmit] = useForm("xovebqze");
  const [showMsg, setShowMsg] = useState(false);
  const formRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (state.succeeded) {
      setShowMsg(true);
      formRef.current.reset();

      const timer = setTimeout(() => {
        setShowMsg(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <section className={`contacto ${theme === 'light' ? 'light' : 'dark'}`} id="contacto">
      <h2>Contacto</h2>

      <form onSubmit={handleSubmit} ref={formRef}>
        <input type="text" name="nombre" placeholder="Tu nombre" required />
        <input type="email" name="email" placeholder="Tu correo" required />
        <textarea name="message" placeholder="Tu mensaje" required />

        <button type="submit" disabled={state.submitting}>
          Enviar
        </button>

        {showMsg && (
          <p className="mensaje-exito">
            ¡Mensaje enviado correctamente!
          </p>
        )}

        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </form>
      {/* Botón de WhatsApp flotante */}
      <a href="https://wa.me/+59895744084" target="_blank" className="whatsapp-btn" aria-label="Contacta por WhatsApp">
        <img src="https://img.icons8.com/?size=100&id=MW3L3LMSpawR&format=png&color=000000" alt="WhatsApp" className="whatsapp-icon" />
      </a>
    </section>
  );
};
