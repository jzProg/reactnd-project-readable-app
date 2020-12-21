import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputForm from '../InputForm';
import { connect } from 'react-redux';
import { addNewCommentAction } from '../../actions/shared';


function AddComment({ items, onHide, dispatch, postId, ...props }) {

  function submit(author, text) {
    dispatch(addNewCommentAction(author, text, postId)).then(() => {
      onHide();
    });
  }

  return (
    <Modal {...props} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <b>New Comment</b>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <InputForm items={items} onSubmit={submit} disableTitle="true"/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
  </Modal>
  )
}

export default connect()(AddComment);
