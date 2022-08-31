import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { propTypes } from 'react-bootstrap/esm/Image';
import Modal from 'react-bootstrap/Modal';

const ModalJF = ({visible, handleClose, winner}) => {
  const [show, setShow] = useState(false);

  return (
    <>

      <Modal show={visible} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>WINNER!!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>{winner} Won!!!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalJF;