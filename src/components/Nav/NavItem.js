import React from 'react';
import { NavLink } from 'react-router-dom';

function NavItem({ item }) {
  const { url, name } = item;
  return (
    <li className="item">
      <NavLink to={url} className="link">
        {name}
      </NavLink>
    </li>
  );
}

export default NavItem;
