import {
  fetchCategories,
  fetchAllPosts,
  fetchCommentsByPost,
  createNewPost,
  createNewComment
} from '../utils/api';
import { setPosts, addNewPost } from '../actions/posts';
import { setCategories } from '../actions/categories';
import { setComments, addNewComment } from '../actions/comments';
import { showLoading, hideLoading } from 'react-redux-loading';

export function fetchInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return Promise.all([
            fetchCategories(),
            fetchAllPosts(),
         ]).then(([categoriesObj, posts]) => {
            dispatch(hideLoading());
            dispatch(setPosts(posts));
            dispatch(setCategories(categoriesObj.categories));
          });
    }
}

export function fetchCommentData(postId) {
  return (dispatch) => {
    dispatch(showLoading());
    return fetchCommentsByPost(postId)
           .then(comments => {
            dispatch(hideLoading());
            dispatch(setComments(comments));
          });
    }
}

export function addNewPostAction(title, author, text, type) {
  return (dispatch) => {
    dispatch(showLoading());
    const newPost = { id: generateUID(), timestamp: new Date().getTime(), title, author, category: type, body: text };
    return createNewPost(newPost)
           .then(({ commentCount, deleted, voteScore }) => {
            dispatch(hideLoading());
            dispatch(addNewPost({ ...newPost, commentCount, deleted, voteScore }));
          });
    }
}

export function addNewCommentAction(author, text, postId) {
  return (dispatch) => {
    dispatch(showLoading());
    const newComment = { id: generateUID(), timestamp: new Date().getTime(), author, parentId: postId, body: text };
    return createNewComment(newComment)
           .then(comment => {
            dispatch(hideLoading());
            dispatch(addNewComment(comment));
          });
    }
}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
