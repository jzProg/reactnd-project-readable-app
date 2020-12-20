import {
    API_TOKEN,
    POSTS_ENDPOINT,
    COMMENTS_ENDPOINT,
    CATEGORIES_ENDPOINT
} from './constants';

export function fetchCategories() {
  return fetch(CATEGORIES_ENDPOINT, { headers: { 'Authorization': API_TOKEN }})
         .then(res => res.json());
}

export function fetchAllPosts() {
  return fetch(POSTS_ENDPOINT, { headers: { 'Authorization': API_TOKEN }})
         .then(res => res.json());
}

export function fetchCommentsByPost(postId) {
  return fetch(COMMENTS_ENDPOINT.replace('%s', postId), { headers: { 'Authorization': API_TOKEN }})
         .then(res => res.json());
}
