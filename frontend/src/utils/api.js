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

export function voteForPost(postId, vote) {
  return fetch(`${POSTS_ENDPOINT}\\${postId}`, {
          method: 'POST',
          headers: { 'Authorization': API_TOKEN,'Accept': 'application/json, text/plain, */*', 'Content-Type': 'application/json' },
          body: JSON.stringify({ option: vote })
        }).then(res => res.json());
}

export function voteForComment(commentId, vote) {
  return fetch(`${NEW_COMMENT_ENDPOINT}\\${commentId}`, {
          method: 'POST',
          headers: { 'Authorization': API_TOKEN,'Accept': 'application/json, text/plain, */*', 'Content-Type': 'application/json' },
          body: JSON.stringify({ option: vote })
        }).then(res => res.json());
}

export function deleteExistingPost(postId) {
  return fetch(`${POSTS_ENDPOINT}\\${postId}`, {
          method: 'DELETE',
          headers: { 'Authorization': API_TOKEN,'Accept': 'application/json, text/plain, */*', 'Content-Type': 'application/json' },
        }).then(res => res.json());
}

export function deleteExistingComment(commentId) {
  return fetch(`${NEW_COMMENT_ENDPOINT}\\${commentId}`, {
          method: 'DELETE',
          headers: { 'Authorization': API_TOKEN,'Accept': 'application/json, text/plain, */*', 'Content-Type': 'application/json' },
        }).then(res => res.json());
}

export function editExistingPost(post) {
  const { id, title, body } = post;
  return fetch(`${POSTS_ENDPOINT}\\${id}`, {
          method: 'PUT',
          headers: { 'Authorization': API_TOKEN,'Accept': 'application/json, text/plain, */*', 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, body })
        }).then(res => res.json());
}

export function editExistingComment(comment) {
  const { id, timestamp, body } = comment;
  return fetch(`${NEW_COMMENT_ENDPOINT}\\${id}`, {
          method: 'PUT',
          headers: { 'Authorization': API_TOKEN,'Accept': 'application/json, text/plain, */*', 'Content-Type': 'application/json' },
          body: JSON.stringify({ timestamp, body })
        }).then(res => res.json());
}

function transformData(postsObj) {
  const posts = postsObj.reduce((result, item)  => {
    result[item.id] = item;
    return result; }, {}
  );
  return posts;
}
