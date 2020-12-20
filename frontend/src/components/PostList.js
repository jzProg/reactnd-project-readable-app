import React from 'react';
import { withRouter } from 'react-router-dom';
import Post from './Post';

function PostList({ posts, history }) {

  function toPost(post) {
    const { category, id } = post;
    history.push(`/${category}/${id}`);
  }

  return (
    <div className='postListDiv'>
    { posts.map((post,index) => <Post key={post.id} post={post} onSelect={() => toPost(post)}/>)}
    </div>
    )
}

export default withRouter(PostList);
