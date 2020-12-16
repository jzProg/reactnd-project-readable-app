import React from 'react';
import { Route } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import AddComment from './modals/AddComment';

function PostDetails() {

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Route exact path='/:category/:postId'>Post Details
     <AddComment show={modalShow} onHide={() => setModalShow(false)}/>
     <Button variant="primary" onClick={() => setModalShow(true)}>ADD NEW POST</Button>
    </Route>
  )
}

export default PostDetails;
