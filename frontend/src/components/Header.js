import React from 'react';

function Header({ categories, onSelect }) {

  return (
      <ul>
      { categories.map(category => <li key={category} style={{ cursor: 'pointer' }} onClick={() => onSelect(category)}> { category } </li>)}
      </ul>
    )

}

export default Header;
