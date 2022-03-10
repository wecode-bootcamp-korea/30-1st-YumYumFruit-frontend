import React from 'react';
import './CancleButton.scss';

function CancleButton({ onClick }) {
  return (
    <div className="cancleBtn">
      <button type="button" onClick={onClick}>
        취소
      </button>
    </div>
  );
}

export default CancleButton;
