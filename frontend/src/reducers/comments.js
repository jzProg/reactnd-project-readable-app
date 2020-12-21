import { SET_COMMENTS, ADD_NEW_COMMENT, VOTE_COMMENT, DELETE_COMMENT, EDIT_COMMENT } from '../actions/comments';
import { DELETE_POST } from '../actions/posts';

export default function comments(state = {}, action) {
  console.log(action);
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
  case EDIT_COMMENT: return {
    ...state,
    [action.comment.id]: {
      ...state[action.comment.id],
      body: action.comment.body
    }
  };
  case DELETE_POST: return {
    ...Object.values(state).map(comment => { return { ...comment, parentDeleted: comment.parentId === action.post.id }; })
  };
  default: return state;
  }
}

// comments Selector
export function getCommentsByPost(comments) {
  return Object.values(comments).filter(comment => !comment.deleted);
}
