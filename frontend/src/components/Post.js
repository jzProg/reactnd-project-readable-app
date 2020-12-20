import React from 'react';
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

function Post({ post, onSelect }) {

  return (
    <div className='postDiv'>
      <span style={{ cursor: 'pointer', color: '#2196F3' }} onClick={onSelect}><b>{ post.title }</b></span>
      <span style={{ fontSize: '80%'}}>
        <i> by <span style={{ color: 'orange' }}>{ post.author }</span>, <Moment fromNow>{post.timestamp}</Moment></i>
      </span>
      <br/>
      <span style={{ fontSize: '80%'}} className='commentDiv'>{ post.commentCount} comments | { post.voteScore} votes</span>
      <FontAwesomeIcon icon={faThumbsUp} size="sm" style={{ color: 'green', marginLeft: '1%', cursor: 'pointer'}}/>
      <FontAwesomeIcon icon={faThumbsDown} size="sm" style={{ color: 'red', marginLeft: '1%', cursor: 'pointer'}}/>
      <FontAwesomeIcon icon={faEdit} size="sm" style={{ color: 'white', marginLeft: '1%', cursor: 'pointer'}}/>
      <FontAwesomeIcon icon={faTrashAlt} size="sm" style={{ color: 'red', marginLeft: '1%', cursor: 'pointer'}}/>
    </div>
    )
}

export default Post;
