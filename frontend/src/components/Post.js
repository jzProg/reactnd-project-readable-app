import React from 'react';
import Moment from 'react-moment';

function Post({ post }) {

  return (
    <div>
      <h2> { post.title } </h2>
      <h4><i> by <span style={{ color: 'red' }}>{ post.author }</span>, <Moment fromNow>{post.timestamp}</Moment></i></h4>
      <div className='commentDiv'>{ post.commentCount} comments</div>
      <div className='scoreDiv'>{ post.voteScore} votes</div>
    </div>
    )
}

export default Post;
