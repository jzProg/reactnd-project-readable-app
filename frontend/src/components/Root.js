import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Header from './Header';
import PostList from './PostList';
import Button from 'react-bootstrap/Button';

class Root extends Component {

  state = {

  }

  toAddNewPostScreen = () => {
    this.props.history.push('/addNewPost');
  }

  render() {
    return (
      <Route exact path="/">
       <Header/>
       <PostList/>
       <Button variant="primary" onClick={() => this.toAddNewPostScreen()}>ADD NEW POST</Button>
      </Route>
    )
  }

}

export default withRouter(Root);
