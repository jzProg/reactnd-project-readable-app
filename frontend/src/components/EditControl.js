import React from 'react';
import { faThumbsUp, faThumbsDown, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import ControlIcon from './ControlIcon';

function EditControl({ onVoteUp, onVoteDown, onEdit, onDelete}) {

  return (
      <>
       <ControlIcon faIcon={faThumbsUp} color={'green'} action={onVoteUp} tooltipText={'upvote!'}/>
       <ControlIcon faIcon={faThumbsDown} color={'red'} action={onVoteDown} tooltipText={'downVote!'}/>
       <ControlIcon faIcon={faEdit} color={'white'} action={onEdit} tooltipText={'Edit!'}/>
       <ControlIcon faIcon={faTrashAlt} color={'red'} action={onDelete} tooltipText={'Delete!'}/>
      </>
    )

}

export default EditControl;
