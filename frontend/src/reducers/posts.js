import { SET_POSTS, ADD_NEW_POST, VOTE_POST, DELETE_POST } from '../actions/posts';
import { ADD_NEW_COMMENT } from '../actions/comments';

export default function posts(state = {}, action) {
  switch(action.type) {
  case SET_POSTS: return {
    ...state,
    ...action.posts
  };
  case ADD_NEW_POST: return {
    ...state,
    [action.post.id]: {
      ...action.post
    }
  };
  case ADD_NEW_COMMENT: return {
     ...state,
     [action.comment.parentId]: {
       ...state[action.comment.parentId],
       commentCount: state[action.comment.parentId].commentCount + 1
     }
  };
  case VOTE_POST: return {
    ...state,
    [action.postId]: {
      ...state[action.postId],
      voteScore: action.vote === 'upVote' ? state[action.postId].voteScore + 1 : state[action.postId].voteScore - 1
    }
  };
  case DELETE_POST: return {
    ...state,
    [action.postId]: {
      ...state[action.postId],
      deleted: true
    }
  };
  default: return state;
  }
}

// posts Selector
export function getPosts(posts) {
  return Object.values(posts).filter(post => !post.deleted);
}
