import React from 'react';
import { useNavigate } from 'react-router-dom';

function PagingItem() {
  const navigate = useNavigate();
  const handleClickItem = () => {};
  return (
    <ol className="pagingItem">
      <li className="link">1</li>
    </ol>
  );
}

export default PagingItem;
