import { SET_COMMENTS, ADD_NEW_COMMENT } from '../actions/comments';

export default function comments(state = {}, action) {
  switch(action.type) {
  case SET_COMMENTS: return {
    ...action.comments // replace comments
  };
  case ADD_NEW_COMMENT: return {
    ...state,
    [action.comment.id]: {
      ...action.comment
    }
  };
  default: return state;
  }
}

// comments Selector
export function getCommentsByPost(comments) {
  return Object.values(comments).filter(comment => !comment.deleted);
}
