import React from 'react';
import './JoinButton.scss';

function JoinButton({ onSubmit }) {
  return (
    <div className="joinBtn">
      <button type="submit" onSubmit={onSubmit}>
        회원가입
      </button>
    </div>
  );
}

export default JoinButton;
