import React from 'react';
import { connect } from 'react-redux';
import { addNewPostAction, editPostAction } from '../../actions/shared';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputForm from '../InputForm';

function NewPost({ items, onHide, dispatch, post, ...props }) {

  function submit(author, text, title, type) {
    if (post) {
      dispatch(editPostAction(post.id, title, text)).then(() => {
        onHide();
      });
    } else {
      dispatch(addNewPostAction(title, author, text, type)).then(() => {
        onHide();
      });
    }
  }

  return (
    <Modal {...props} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <b>{ post ? 'Edit Post' : 'New Post' }</b>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <InputForm items={items} onSubmit={submit} disableAuthor={!!post} prepopulatedItem={post}/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )

}

export default connect()(NewPost);
