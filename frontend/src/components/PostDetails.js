import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCommentsByPost } from '../reducers/comments';
import { getPosts } from '../reducers/posts';
import { fetchCommentData } from '../actions/shared';
import Post from './Post';
import Header from './Header';
import Comment from './Comment';

class PostDetails extends Component {

  state = {
    load: false
  }

  componentDidMount() {
    const { dispatch, match } = this.props;
    const { postId, category } = match.params;
    if (!postId || !this.postExists(postId, category)) this.toHome();
    else {
      dispatch(fetchCommentData(postId)).then(() => {
        this.setState({ load: true });
      });
    }
  }

  postExists(postId, category) {
    const { posts } = this.props;
    return posts.filter(post => post.id === postId && post.category === category).length;
  }

  toHome() {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    const { posts, comments, match } = this.props;
    const { postId, category } = match.params;
    const post = posts.filter(post => post.id === postId && post.category === category)?.[0];
    if (!post) {
      return <Redirect to='/'/>
    }
    
    return (
      <div className="postDetailsContainer">
      { this.state.load && (
       <div className="fullWidthContainer">
         <Header isPost='false' postId={postId}/>
         <Post post={post} fullDate="true"/>
         <div className="postBody">{ post.body }</div>
         <div className="commentContainer">
          {comments.map(comment => <Comment key={comment.id} commentInfo={comment}/>)}
         </div>
       </div>
       ) }
      </div>
    )
  }
}

function mapStateToProps({ posts, comments }) {
  return {
    posts: getPosts(posts),
    comments: getCommentsByPost(comments),
  }
}

export default connect(mapStateToProps)(withRouter(PostDetails));
