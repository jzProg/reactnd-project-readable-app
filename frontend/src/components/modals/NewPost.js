import React from 'react';
import { connect } from 'react-redux';
import { addNewPostAction } from '../../actions/shared';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputForm from '../InputForm';

function NewPost({ items, onHide, dispatch, ...props }) {

  function submit(author, text, title, type) {
    dispatch(addNewPostAction(title, author, text, type)).then(() => {
      onHide();
    });
  }

  return (
    <Modal {...props} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <b>New Post</b>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <InputForm items={items} onSubmit={submit}/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )

}

export default connect()(NewPost);
