import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

function EditControl({ onVoteUp, onVoteDown, onEdit, onDelete}) {

  return (
      <>
       <FontAwesomeIcon icon={faThumbsUp} size="sm" className="control-icon" style={{ color: 'green' }} onClick={onVoteUp}/>
       <FontAwesomeIcon icon={faThumbsDown} size="sm" className="control-icon" style={{ color: 'red' }} onClick={onVoteDown}/>
       <FontAwesomeIcon icon={faEdit} size="sm" className="control-icon" style={{ color: 'white' }} onClick={onEdit}/>
       <FontAwesomeIcon icon={faTrashAlt} size="sm" className="control-icon" style={{ color: 'red' }} onClick={onDelete}/>
      </>
    )

}

export default EditControl;
