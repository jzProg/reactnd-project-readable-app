import React from 'react';
import { withRouter } from 'react-router-dom';
import NavigationBar from './NavigationBar';

function Header({ categories, onSelect, onHome, history }) {

  function toCategory(category) {
    history.push(`/${category.path}`);
  }

  function toHome() {
    history.push('/');
  }

  return (
      <NavigationBar items={categories} onSelect={toCategory} onHome={toHome}/>
    )

}

export default withRouter(Header);
