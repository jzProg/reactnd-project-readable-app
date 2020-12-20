import React from 'react';
import NavigationBar from './NavigationBar';

function Header({ categories, onSelect }) {

  console.log(categories)

  return (
      <NavigationBar items={categories} onSelect={onSelect}/>
    )

}

export default Header;
