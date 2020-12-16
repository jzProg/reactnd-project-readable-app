import React from 'react';

function PostList({ posts, onSelect }) {

  return (
    <ul>
    { posts.map(post => <li key={post.id} style={{ cursor: 'pointer' }} onClick={() => onSelect(post)}> post #{ post.id } </li>)}
    </ul>
    )
}

export default PostList;
