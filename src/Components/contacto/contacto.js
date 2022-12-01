import React, { useRef } from 'react';
import "./contacto.css";
import { Container } from "react-bootstrap";
import emailjs from 'emailjs-com';
import Enviado from './enviadocon.js'

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dy9buyd', 'template_iqozldp', e.target, 'f4Lf9VKH78FLlY98I')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

    return (
      <Container fluid className="contenedor">
        <form ref={form} onSubmit={sendEmail} className="formRegistro">
        <h2>Ponete en contacto con <span style={{ color: 'orchid' }}>Inter</span><span style={{ color: 'darkmagenta' }}>Lingua</span></h2>
          <input
            type="text"
            placeholder="Nombre"
            className="input"
            name="nombre"
            required />
          <input
            type="text"
            placeholder="Apellido"
            className="input"
            name="apellido"
            required />
          <input
            type="email"
            placeholder="E-mail"
            className="input"
            name="email"
            required />
          <textarea
            type="text"
            placeholder="Mensaje"
            className="input"
            name="mensaje"
            cols="40"
            rows="5"
            required />
        </form>
        <Enviado />
      </Container>
    );
  };
export default Contacto;