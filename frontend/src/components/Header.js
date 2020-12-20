import React from 'react';
import { withRouter } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import NewPost from './modals/NewPost';

function Header({ categories, onSelect, onHome, onAdd, category, history }) {

  const [show, setShow] = React.useState(false);

  function toCategory(category) {
    history.push(`/${category.path}`);
  }

  function toHome() {
    history.push('/');
  }

  return (
      <>
      <NavigationBar items={categories} onSelect={toCategory} onHome={toHome} onToggle={() => setShow(true)} selected={category}/>
      <NewPost show={show} onHide={() => setShow(false)}/>
      </>
    )

}

export default withRouter(Header);
