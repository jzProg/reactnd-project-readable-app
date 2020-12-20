import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostList from './PostList';
import Header from './Header';

class Category extends Component {

  render() {
    const { posts, categories, match } = this.props;
    const  { category } = match.params;
    const postsByCategory = posts.filter(post => post.category === category);

    return (
      <div style={{ width: '100%' }}>
        <Header categories={categories}/>
        <PostList posts={postsByCategory} onSelect={this.toPost}/>
      </div>
    )
  }

}

function mapStateToProps({ posts, categories }) {
  return {
    categories: Object.values(categories),
    posts: Object.values(posts)
  }
}

export default connect(mapStateToProps)(Category);
