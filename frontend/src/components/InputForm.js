import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function InputForm({ items, onSubmit, disableTitle }) {

  const [validated, setValidated] = React.useState(false);

  function submit(event) {
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
    if (!event.currentTarget.checkValidity()) return;
    const title = document.getElementById('titleControl')?.value;
    const author = document.getElementById('authorControl').value;
    const text = document.getElementById('textControl').value;
    const type = document.getElementById('typeControl')?.value;
    onSubmit(author, text, title, type);
  }

  return (
    <Form noValidate validated={validated} onSubmit={submit}>
      { !disableTitle && (<Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control id="titleControl" type="text" placeholder="Title" required/>
      </Form.Group>) }
      <Form.Group>
        <Form.Label>Author</Form.Label>
        <Form.Control id="authorControl" type="text" placeholder="anonymous" required/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Text</Form.Label>
        <Form.Control id="textControl" as="textarea" rows={3} required/>
      </Form.Group>
      { items && (<Form.Group>
        <Form.Label>Type</Form.Label>
        <Form.Control as="select" id="typeControl">
          {items.map(item => <option id={item.name}>{ item.name }</option>)}
        </Form.Control>
      </Form.Group>) }
      <Button variant="primary" type="submit">
       Submit
      </Button>
   </Form>
  )
}

export default InputForm;
