import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import PostList from './PostList';
import { fetchInitialData } from '../actions/shared';
import { getPosts } from '../reducers/posts';

class Root extends Component {

  state = {
    load: false
  }

  componentDidMount() {
    this.props.dispatch(fetchInitialData()).then(() => {
      this.setState({ load: true });
    });
  }

  render() {
    const { categories, posts, match } = this.props;
    const  { category } = match.params;
    const postsByCategory = category? posts.filter(post => post.category === category) : posts;

    return (
       <header className="Root-header">
        { this.state.load && (
          <div className="fullWidthContainer">
            <Header categories={categories} selected={category}/>
            <PostList posts={postsByCategory}/>
          </div>
         )}
      </header>
    )
  }
}

function mapStateToProps({ categories, posts }) {
  return {
    categories: Object.values(categories),
    posts: getPosts(posts)
  }
}

export default connect(mapStateToProps)(Root);
