import React from 'react';
import Moment from 'react-moment';
import EditControl from './EditControl';

function Post({ post, onSelect }) {

  return (
    <div className='postDiv'>
      <span style={{ cursor: 'pointer', color: '#2196F3' }} onClick={onSelect}><b>{ post.title }</b></span>
      <span style={{ fontSize: '80%'}}>
        <i> by <span style={{ color: 'orange' }}>{ post.author }</span>, <Moment fromNow>{post.timestamp}</Moment></i>
      </span>
      <br/>
      <span style={{ fontSize: '80%'}} className='commentDiv'>{ post.commentCount} comments | { post.voteScore} votes</span>
      <EditControl/>
    </div>
    )
}

export default Post;
