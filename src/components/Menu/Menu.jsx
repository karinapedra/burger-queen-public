import React, { useState } from 'react';
import image from '../../assets/brand/burger queen.png'


function Menu({ items, onItemClick }) {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (key) => {
    setActiveItem(key);
    onItemClick(key);
  };


  return (
    <ul className="custom-menu">

      <img className="logo-item" src={image} alt="Logo" />

      <p className='category'>Waiter</p>

      <input className="search-item" placeholder='search' />

      {items.map((item) => (
        <li
          key={item.key}
          className={`menu-item ${activeItem === item.key ? 'active' : ''}`}
          onClick={() => handleItemClick(item.key)}
        >
          {item.label}
        </li>
      ))}
        </ul>
      );
}

      export default Menu;