import React from 'react';
import Moment from 'react-moment';

function Post({ post, onSelect }) {

  return (
    <div className='postDiv'>
      <span style={{ cursor: 'pointer', color: 'green' }} onClick={onSelect}><b>{ post.title }</b></span>
      <span style={{ fontSize: '80%'}}>
        <i> by <span style={{ color: 'red' }}>{ post.author }</span>, <Moment fromNow>{post.timestamp}</Moment></i>
      </span>
      <br/>
      <span style={{ fontSize: '90%'}} className='commentDiv'>{ post.commentCount} comments | { post.voteScore} votes</span>
    </div>
    )
}

export default Post;
