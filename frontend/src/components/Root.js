import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import PostList from './PostList';
import { fetchInitialData } from '../actions/shared';

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
    const { categories, posts } = this.props;

    return (<>
    { this.state.load && (
      <div style={{ width: '100%'}}>
        <Header categories={categories} onAdd={() => this.toggleModal(true)}/>
        <PostList posts={posts}/>
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

export default connect(mapStateToProps)(Root);
