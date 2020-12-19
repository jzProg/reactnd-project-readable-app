import React from 'react';

function Post({ post }) {

  return (
    <div>
      <h2> { post.title } </h2>
      <h4><i> by { post.author }</i></h4>
      <div className='commentDiv'>{ post.commentCount} comments</div>
      <div className='scoreDiv'>{ post.voteScore} votes</div>
    </div>
    )
}

export default Post;
