import React from 'react';
import { Link } from 'react-router-dom';
import './NavItem.scss';

function NavItem({ item }) {
  const { url, name } = item;
  return { name } === 'LOGOUT' ? (
    <Link
      to={url}
      className="navItem"
      onClick={() => localStorage.removeItem('token')}
    >
      {name}
    </Link>
  ) : (
    <Link to={url} className="navItem">
      {name}
    </Link>
  );
}

export default NavItem;
