export const SET_POSTS = 'SET_POSTS';
export const ADD_NEW_POST = 'ADD_NEW_POST';

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
