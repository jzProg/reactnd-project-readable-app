import { fetchCategories, fetchAllPosts, fetchCommentsByPost } from '../utils/api';
import { setPosts } from '../actions/posts';
import { setCategories } from '../actions/categories';
import { setComments } from '../actions/comments';
import { showLoading, hideLoading } from 'react-redux-loading';

export function fetchInitialData() {
  return (dispatch, getState) => {
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
  return (dispatch, getState) => {
    dispatch(showLoading());
    return fetchCommentsByPost(postId)
           .then(comments => {
            dispatch(hideLoading());
            dispatch(setComments(comments));
          });
    }
}
