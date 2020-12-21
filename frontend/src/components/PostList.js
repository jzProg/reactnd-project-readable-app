import React from 'react';
import { withRouter } from 'react-router-dom';
import Post from './Post';
import Sort from './Sort';

function PostList({ posts, onSort, activeSorting, history }) {

  function toPost(post) {
    const { category, id } = post;
    history.push(`/${category}/${id}`);
  }

  return (
    <div className='postListDiv'>
     { posts.length ?
       (<Sort onSort={onSort} activeSorting={activeSorting}/>)
        :
       (<h4 style={{ margin: '1%'}}> No posts for this category...</h4>) }
     { posts.map((post,index) => <Post key={post.id} post={post} onSelect={() => toPost(post)}/>)}
    </div>
    )
}

export default withRouter(PostList);
