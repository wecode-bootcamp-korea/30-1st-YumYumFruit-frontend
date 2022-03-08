import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavItem.scss';

function NavItem({ item }) {
  const { id, name } = item;
  const navigate = useNavigate();

  const updateCategory = id => {
    const queryString =
      id === 1
        ? `?category=all&sort=price&page=1`
        : `?category=${id - 1}&sort=price&page=1`;
    navigate(`/products${queryString}`);
  };

  return (
    <li className="navItem" onClick={() => updateCategory(id)}>
      {name}
    </li>
  );
}

export default NavItem;
