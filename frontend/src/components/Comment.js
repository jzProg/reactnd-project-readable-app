import React from 'react';
import { connect } from 'react-redux';
import { voteCommentAction, deleteCommentAction } from '../actions/shared';
import EditControl from './EditControl';
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';

function Comment({ commentInfo, dispatch }) {

  function vote(option) {
    dispatch(voteCommentAction(commentInfo.id, option));
  }

  function remove() {
    dispatch(deleteCommentAction(commentInfo.id));
  }

  return (
      <div className="commentBody">
       <FontAwesomeIcon icon={faReply} size="sm" style={{ alignSelf: 'flex-start' }}/>
       <h4>
        <span style={{ color: 'orange' }}>{ commentInfo.author } </span>
         says:
       </h4>
       <span>
        <i style={{ color: 'gray', fontSize: '60%' }}>
         <Moment format="MMMM Do YYYY, h:mm:ss a">{ commentInfo.timestamp }</Moment>
        </i>
       </span>
       <div>{ commentInfo.body }</div>
       <span style={{ fontSize: '80%'}} className='commentDiv'>{ commentInfo.voteScore} votes </span>
       <EditControl onVote={vote} onDelete={remove}/>
      </div>
    )
}

export default connect()(Comment);
