import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputForm from '../InputForm';

function AddComment({ items, onHide, onSubmit, ...props }) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <b>New Comment</b>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <InputForm tems={items} onSubmit={onSubmit}/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
  </Modal>
  )
}

export default AddComment;
