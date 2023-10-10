import React, { useState } from 'react';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey('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'); // Reemplaza con tu propia API Key de SendGrid

function ContactForm() {
  const [formData, setFormData] = useState({
    to: 'sandovalagustin989@gmail.com', // Cambia esto al destinatario real
    from: '', // Agregamos un campo para la dirección de correo del remitente
    subject: '',
    text: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const msg = {
        to: formData.to,
        from: formData.from, // Usamos el valor ingresado por el usuario como remitente
        subject: formData.subject,
        text: formData.text,
      };

      await sgMail.send(msg);
      console.log('Correo electrónico enviado con éxito');
    } catch (error) {
      console.error('Error al enviar el correo electrónico:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="from">Tu Correo:</label>
        <input
          type="email"
          id="from"
          name="from"
          value={formData.from}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="subject">Asunto:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="text">Mensaje:</label>
        <textarea
          id="text"
          name="text"
          value={formData.text}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit">Enviar Correo</button>
    </form>
  );
}

export default ContactForm;

