export const SET_COMMENTS = 'SET_COMMENTS';
export const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT';
export const VOTE_COMMENT = 'VOTE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export function setComments(comments) {
  return {
    type: SET_COMMENTS,
    comments
  }
}

export function addNewComment(comment) {
  return {
    type: ADD_NEW_COMMENT,
    comment
  }
}

export function voteComment(commentId, vote) {
  return {
    type: VOTE_COMMENT,
    commentId,
    vote
  }
}

export function deleteComment(commentId) {
  return {
    type: DELETE_COMMENT,
    commentId
  }
}
