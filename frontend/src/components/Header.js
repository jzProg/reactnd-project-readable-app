import React from 'react';

function Header({ categories, onSelect }) {

  console.log(categories)

  return (
      <ul>
      { categories.map(category => <li key={category.name} style={{ cursor: 'pointer' }} onClick={() => onSelect(category)}> { category.name } </li>)}
      </ul>
    )

}

export default Header;
