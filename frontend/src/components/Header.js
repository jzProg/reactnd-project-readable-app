import React from 'react';
import { withRouter } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import NewPost from './modals/NewPost';
import AddComment from './modals/AddComment';

function Header({ categories, onSelect, onHome, onAdd, category, isPost, history }) {

  const [show, setShow] = React.useState(false);

  function toCategory(category) {
    history.push(`/${category.path}`);
  }

  function toHome() {
    history.push('/');
  }

  return (
      <>
      <NavigationBar items={categories} onSelect={toCategory} onHome={toHome} onToggle={() => setShow(true)} selected={category} isPost={isPost}/>
      { isPost ? (
        <AddComment show={show} onHide={() => setShow(false)}/>
      ) : (
        <NewPost show={show} onHide={() => setShow(false)} items={categories}/>
      ) }
      </>
    )

}

export default withRouter(Header);
