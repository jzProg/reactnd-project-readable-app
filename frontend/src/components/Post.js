import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { votePostAction, deletePostAction } from '../actions/shared';
import EditControl from './EditControl';
import NewPost from './modals/NewPost';

function Post({ post, fullDate, dispatch, onSelect }) {

  const [show, setShow] = React.useState(false);

  function vote(option) {
    dispatch(votePostAction(post.id, option));
  }

  function remove() {
    dispatch(deletePostAction(post.id));
  }

  return (
      <div className='postDiv'>
          <span style={{ cursor: 'pointer', color: '#2196F3' }} onClick={onSelect}><b>{ post.title }</b></span>
          <span style={{ fontSize: '80%'}}>
            <i> by <span style={{ color: 'orange' }}>{ post.author }</span>
             <br/>
             <span style={{ color: 'gray', fontSize: '80%'}}>
              { fullDate ? (<Moment format="MMMM Do YYYY, h:mm:ss a">{post.timestamp}</Moment>) : (<Moment fromNow>{post.timestamp}</Moment>) }
             </span>
            </i>
          </span>
          <br/>
          <span style={{ fontSize: '80%'}} className='commentDiv'>{ post.commentCount} comments | { post.voteScore} votes</span>
          <EditControl onVote={vote} onDelete={remove} onEdit={() => setShow(true)}/>
          <NewPost show={show} onHide={() => setShow(false)} post={post}/>
      </div>
  )
}

export default connect()(Post);
