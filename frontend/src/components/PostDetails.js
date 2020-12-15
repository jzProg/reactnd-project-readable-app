import React from 'react';
import Button from 'react-bootstrap/Button';
import AddComment from './modals/AddComment';

function PostDetails() {

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>Post Details
     <AddComment show={modalShow} onHide={() => setModalShow(false)}/>
     <Button variant="primary" onClick={() => setModalShow(true)}>ADD NEW POST</Button>
    </div>
  )
}

export default PostDetails;
