import React from 'react';
import { faThumbsUp, faThumbsDown, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import ControlIcon from './ControlIcon';

function EditControl({ onVote, onEdit, onDelete}) {

  return (
      <div style={{ width: '100%', selfAlign: 'auto' }}>
       <ControlIcon faIcon={faThumbsUp} color={'green'} action={() => onVote('upVote')} tooltipText={'upvote!'}/>
       <ControlIcon faIcon={faThumbsDown} color={'red'} action={() => onVote('downVote')} tooltipText={'downvote!'}/>
       <ControlIcon faIcon={faEdit} color={'white'} action={onEdit} tooltipText={'Edit!'}/>
       <ControlIcon faIcon={faTrashAlt} color={'red'} action={onDelete} tooltipText={'Delete!'}/>
      </div>
    )

}

export default EditControl;
