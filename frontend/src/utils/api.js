import {
    API_TOKEN,
    POSTS_ENDPOINT,
    COMMENTS_ENDPOINT,
    CATEGORIES_ENDPOINT,
    NEW_COMMENT_ENDPOINT
} from './constants';

export function fetchCategories() {
  return fetch(CATEGORIES_ENDPOINT, { headers: { 'Authorization': API_TOKEN }})
         .then(res => res.json());
}

export function fetchAllPosts() {
  return fetch(POSTS_ENDPOINT, { headers: { 'Authorization': API_TOKEN }})
         .then(res => res.json())
         .then(res => transformData(res));
}

export function fetchCommentsByPost(postId) {
  return fetch(COMMENTS_ENDPOINT.replace('%s', postId), { headers: { 'Authorization': API_TOKEN }})
         .then(res => res.json())
         .then(res => transformData(res));
}

export function createNewPost(post) {
  return fetch(POSTS_ENDPOINT, {
          method: 'POST',
          headers: { 'Authorization': API_TOKEN,'Accept': 'application/json, text/plain, */*', 'Content-Type': 'application/json' },
          body: JSON.stringify(post)
        }).then(res => res.json());
}

export function createNewComment(comment) {
  return fetch(NEW_COMMENT_ENDPOINT, {
          method: 'POST',
          headers: { 'Authorization': API_TOKEN,'Accept': 'application/json, text/plain, */*', 'Content-Type': 'application/json' },
          body: JSON.stringify(comment)
        }).then(res => res.json());
}

function transformData(postsObj) {
  const posts = postsObj.reduce((result, item)  => {
    result[item.id] = item;
    return result; }, {}
  );
  return posts;
}
