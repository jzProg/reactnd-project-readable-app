import { SET_POSTS, ADD_NEW_POST } from '../actions/posts';

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
  default: return state;
  }
}

// posts Selector
export function getPosts(posts) {
  return Object.values(posts).filter(post => !post.deleted);
}
