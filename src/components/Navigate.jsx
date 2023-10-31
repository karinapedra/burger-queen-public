import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import '../styles/global'
import useAuth from '../hooks/useAuth';


function Navigate() {
  const { signout } = useAuth();
  const navigate = useNavigate()

  return (
  <div id='menuBar'>
    <Menu
      onClick={({ key }) => {
        if (key === 'signout') {
          signout();
        } else {
          navigate(key)
        }

      }}
      items={[
        { label: 'Home', key: '/Home' },
        { label: 'Breakfast', key: '/Breakfast' },
        { label: 'Burger & Appetizer', key: '/Burger' },
        { label: 'Drinks', key: '/Drinks' },
        { label: 'Notification', key: '/Notification' },
        { label: 'Signout', key: 'signout' }
      ]}

    ></Menu>
  </div>
  )
}

export default Navigate;