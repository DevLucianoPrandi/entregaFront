import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './contacto.css'

function Enviado() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" type="submit" value="Enviar" className='submit w-10' onClick={handleShow}>
        Enviá tu mensaje!
    </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Aviso de confirmación</Modal.Title>
        </Modal.Header>
        <Modal.Body>Muchas gracias! Tu mensaje se envió con éxito</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Enviado