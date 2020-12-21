export const SET_COMMENTS = 'SET_COMMENTS';
export const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT';

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
