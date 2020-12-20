import React from 'react';
import Post from './Post';

function PostList({ posts, onSelect }) {

  return (
    <div className='postListDiv'>
    { posts.map((post,index) => <Post key={post.id} post={post} onSelect={() => onSelect(post)}/>)}
    </div>
    )
}

export default PostList;
