import React from 'react';
import Form from 'react-bootstrap/Form';

function InputForm(props) {
  return (
    <Form>
      <Form.Group controlId="commentForm.ControlInput">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" placeholder="anonymous" />
      </Form.Group>
      <Form.Group controlId="commentForm.ControlTextarea">
        <Form.Label>Comment</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
   </Form>
  )
}

export default InputForm;
