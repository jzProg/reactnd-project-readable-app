import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Header from './Header';
import PostList from './PostList';
import Button from 'react-bootstrap/Button';

class Root extends Component {

  state = {
    categories: ['react', 'reactNative', 'redux'],
    posts: [{ id: '1', category: 'react'}, { id: '2', category: 'reactNative'}, { id: '3', category: 'redux'}, { id: '4', category: 'react'}]
  }

  toAddNewPostScreen = () => {
    this.props.history.push('/addNewPost');
  }

  toCategory = (category) => {
    this.props.history.push(`/${category}`);
  }

  toPost = (post) => {
    const { category, id } = post;
    this.props.history.push(`/${category}/${id}`);
  }

  render() {
    return (
      <Route exact path="/">
        <Header categories={this.state.categories} onSelect={this.toCategory}/>
        <PostList posts={this.state.posts} onSelect={this.toPost}/>
        <Button variant="primary" onClick={() => this.toAddNewPostScreen()}>ADD NEW POST</Button>
      </Route>
    )
  }

}

export default withRouter(Root);
