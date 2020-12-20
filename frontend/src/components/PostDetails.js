import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import AddComment from './modals/AddComment';
import Post from './Post';

class PostDetails extends Component {

  state = {
    modalShow : false
  }

  setModalShow = (flag) => {
    this.setState({ modalShow: flag });
  }

  render() {
    const { posts, match } = this.props;
    const { modalShow } = this.state;
    const  { postId, category } = match.params;
    const post = posts.filter(post => post.id === postId && post.category === category)?.[0];

    return (
      <>
       { post && (<Post post={post} />) }
       <AddComment show={modalShow} onHide={() => this.setModalShow(false)}/>
       <Button variant="primary" onClick={() => this.setModalShow(true)}>ADD NEW COMMENT</Button>
      </>
    )
  }
}

function mapStateToProps({ posts }) {
  return {
    posts: Object.values(posts)
  }
}

export default connect(mapStateToProps)(withRouter(PostDetails));
