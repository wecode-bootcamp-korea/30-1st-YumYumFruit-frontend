import React from 'react';

function FooterList({ item }) {
  const { name, content } = item;
  return (
    <li>
      <span>{name}</span>
      {content}
    </li>
  );
}

export default FooterList;
