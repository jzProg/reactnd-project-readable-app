import React from 'react';
import Post from './Post';

function PostList({ posts, onSelect }) {

  return (
    <ul>
    { posts.map(post => <li key={post.id} style={{ cursor: 'pointer' }} onClick={() => onSelect(post)}>
                          <Post post={post}/>
                         </li>)}
    </ul>
    )
}

export default PostList;
