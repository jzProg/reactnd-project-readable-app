import React from 'react';
import EditControl from './EditControl';
import Moment from 'react-moment';

function Comment({ commentInfo }) {

  return (
      <div className="commentBody">
       <h4><span style={{ color: 'orange' }}>{ commentInfo.author }</span> says: </h4>
       <span>
        <i style={{ color: 'gray', fontSize: '60%' }}><Moment format="MMMM Do YYYY, h:mm:ss a">{ commentInfo.timestamp }</Moment></i>
       </span>
       <div>{ commentInfo.body }</div>
       <span style={{ fontSize: '80%'}} className='commentDiv'>{ commentInfo.voteScore} votes</span>
       <EditControl/>
      </div>
    )
}

export default Comment;
