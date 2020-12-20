import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import PostList from './PostList';
import NewPost from './modals/NewPost';
import Button from 'react-bootstrap/Button';
import { fetchInitialData } from '../actions/shared';

class Root extends Component {

  state = {
    showNewPostModal: false,
    load: false
  }

  componentDidMount() {
    this.props.dispatch(fetchInitialData()).then(() => {
      this.setState({ load: true });
    });
  }

  toggleModal = (flag) => {
    this.setState({ showNewPostModal: flag });
  }

  toCategory = (category) => {
    this.props.history.push(`/${category.path}`);
  }

  toPost = (post) => {
    const { category, id } = post;
    this.props.history.push(`/${category}/${id}`);
  }

  render() {
    const { categories, posts } = this.props;

    return (<>
    { this.state.load && (
      <div style={{ width: '100%'}}>
        <Header categories={categories} onSelect={this.toCategory}/>
        <PostList posts={posts} onSelect={this.toPost}/>
        <NewPost show={this.state.showNewPostModal} onHide={() => this.toggleModal(false)}/>
        <Button variant="primary" onClick={() => this.toggleModal(true)}>ADD NEW POST</Button>
      </div>
     )}
   </>)
  }
}

function mapStateToProps({ categories, posts }) {
  return {
    categories: Object.values(categories),
    posts: Object.values(posts)
  }
}

export default connect(mapStateToProps)(withRouter(Root));
