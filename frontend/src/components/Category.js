import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PostList from './PostList';

class Category extends Component {

  state = {

  }

  render() {
    const { posts, match } = this.props;
    const  { category } = match.params;
    const postsByCategory = posts.filter(post => post.category === category);

    return (
      <div>
        <PostList posts={postsByCategory} onSelect={this.toPost}/>
      </div>
    )
  }

}

function mapStateToProps({ posts }) {
  return {
    posts: Object.values(posts)
  }
}

export default connect(mapStateToProps)(withRouter(Category));
