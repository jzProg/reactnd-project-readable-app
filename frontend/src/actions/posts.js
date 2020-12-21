export const SET_POSTS = 'SET_POSTS';
export const ADD_NEW_POST = 'ADD_NEW_POST';
export const VOTE_POST = 'VOTE_POST';
export const DELETE_POST = 'DELETE_POST';

export function setPosts(posts) {
  return {
    type: SET_POSTS,
    posts: posts
  }
}

export function addNewPost(post) {
  return {
    type: ADD_NEW_POST,
    post
  }
}

export function votePost(postId, vote) {
  return {
    type: VOTE_POST,
    postId,
    vote
  }
}

export function deletePost(postId) {
  return {
    type: DELETE_POST,
    postId
  }
}
