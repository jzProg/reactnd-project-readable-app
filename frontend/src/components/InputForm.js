import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function InputForm({ items, onSubmit }) {

  function submit(event) {
    event.preventDefault();
    const title = document.getElementById('titleControl').value;
    const author = document.getElementById('authorControl').value;
    const text = document.getElementById('textControl').value;
    const type = document.getElementById('typeControl')?.value;
    onSubmit(title, author, text, type);
  }

  return (
    <Form>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control id="titleControl" type="text" placeholder="Title" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Author</Form.Label>
        <Form.Control id="authorControl" type="text" placeholder="anonymous" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Text</Form.Label>
        <Form.Control id="textControl" as="textarea" rows={3} />
      </Form.Group>
      { items && (<Form.Group>
        <Form.Label>Type</Form.Label>
        <Form.Control as="select" id="typeControl">
          {items.map(item => <option id={item.name}>{ item.name }</option>)}
        </Form.Control>
      </Form.Group>) }
      <Button variant="primary" type="button" onClick={submit}>
       Submit
      </Button>
   </Form>
  )
}

export default InputForm;
