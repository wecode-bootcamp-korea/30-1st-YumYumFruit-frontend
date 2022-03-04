import React from 'react';
import { Link } from 'react-router-dom';

function FooterItem({ item }) {
  const { url, name } = item;
  return (
    <li>
      <Link to={url}>{name}</Link>
    </li>
  );
}

export default FooterItem;
