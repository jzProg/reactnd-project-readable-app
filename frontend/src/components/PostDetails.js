import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Post from './Post';
import Header from './Header';

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
      <div className="postDetailsContainer">
       <div className="fullWidthContainer">
         <Header isPost='false'/>
         { post && (<Post post={post} />) }
         <div className="postBody">{ post.body }</div>
       </div>
      </div>
    )
  }
}

function mapStateToProps({ posts }) {
  return {
    posts: Object.values(posts)
  }
}

export default connect(mapStateToProps)(withRouter(PostDetails));
