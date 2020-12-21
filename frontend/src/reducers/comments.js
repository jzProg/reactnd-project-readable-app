import { SET_COMMENTS, ADD_NEW_COMMENT, VOTE_COMMENT, DELETE_COMMENT } from '../actions/comments';

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
  case VOTE_COMMENT: return {
    ...state,
    [action.commentId]: {
      ...state[action.commentId],
      voteScore: action.vote === 'upVote' ? state[action.commentId].voteScore + 1 : state[action.commentId].voteScore - 1
    }
  };
  case DELETE_COMMENT: return {
    ...state,
    [action.commentId]: {
      ...state[action.commentId],
      deleted: true
    }
  };
  default: return state;
  }
}

// comments Selector
export function getCommentsByPost(comments) {
  return Object.values(comments).filter(comment => !comment.deleted);
}
