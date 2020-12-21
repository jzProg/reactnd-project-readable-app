import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputForm from '../InputForm';
import { connect } from 'react-redux';
import { addNewCommentAction, editCommentAction } from '../../actions/shared';


function AddComment({ items, onHide, dispatch, postId, comment, ...props }) {

  function submit(author, text) {
    if (comment) {
      dispatch(editCommentAction(comment.id, text)).then(() => {
        onHide();
      });
    } else {
      dispatch(addNewCommentAction(author, text, postId)).then(() => {
        onHide();
      });
    }
  }

  return (
    <Modal {...props} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <b>{ comment ? 'Edit Comment' : 'New Comment' }</b>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <InputForm items={items} onSubmit={submit} disableTitle="true" disableAuthor={!!comment} prepopulatedItem={comment}/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
  </Modal>
  )
}

export default connect()(AddComment);
