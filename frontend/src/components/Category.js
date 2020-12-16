import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

class Category extends Component {

  state = {

  }

  render() {
    return (
      <Route exact path='/:category'>Category</Route>
    )
  }

}

export default withRouter(Category);
