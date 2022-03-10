import React from 'react';
import { Link } from 'react-router-dom';
import './NavItem.scss';

function NavItem({ item }) {
  const { url, name } = item;

  return (
    <Link to={url} className="navItem">
      {name}
    </Link>
  );
}

export default NavItem;
