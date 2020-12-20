import { SET_COMMENTS } from '../actions/comments';

export default function comments(state = {}, action) {
  switch(action.type) {
  case SET_COMMENTS: return {
    ...state,
    ...action.comments
  };
  default: return state;
  }
}

// comments Selector
export function getCommentsByPost(comments) {
  return Object.values(comments).filter(comment => !comment.deleted);
}
