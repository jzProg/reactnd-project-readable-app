import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import PostList from './PostList';
import { fetchInitialData } from '../actions/shared';
import { getPosts } from '../reducers/posts';

class Root extends Component {

  state = {
    load: false,
    sortByDate: true,
  }

  componentDidMount() {
    this.props.dispatch(fetchInitialData()).then(() => {
      this.setState({ load: true });
    });
  }

  sort = (byDate) => {
    this.setState({ sortByDate: byDate });
  }

  render() {
    const { categories, posts, match } = this.props;
    const { sortByDate, load } = this.state;
    const  { category } = match.params;
    const postsByCategory = category? posts.filter(post => post.category === category) : posts;
    const sortedList = postsByCategory.sort((item1, item2) => sortByDate ? item1.timestamp - item2.timestamp : item2.voteScore - item1.voteScore);

    return (
       <header className="Root-header">
        { load && (
          <div className="fullWidthContainer">
            <Header categories={categories} selected={category}/>
            <PostList posts={postsByCategory} onSort={this.sort}/>
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
