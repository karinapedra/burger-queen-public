import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { Menu } from 'antd';
import './style.css';
import useAuth from '../../hooks/useAuth';
import Menu from './Menu'


function Navigate() {
  const { signout } = useAuth();
  const navigate = useNavigate();

  const handleMenuClick = (key) => {
    if (key === 'signout') {
      signout();
    } else {
      navigate(key);
    }
  };

  const menuItems = [
    { label: 'Home', key: '/Home' },
    { label: 'Breakfast', key: '/Breakfast' },
    { label: 'Burger & Appetizer', key: '/Burger' },
    { label: 'Drinks', key: '/Drinks' },
    { label: 'Signout', key: 'signout' }
  ];

  return (
  <div id="menuBar">
  <Menu items={menuItems} onItemClick={handleMenuClick} />
  </div>
  );
  }
  
  export default Navigate;