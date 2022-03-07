import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const [loginVlaue, setloginVlaue] = useState({
    id: '',
    pw: '',
  });

  const navigate = useNavigate();

  const handleInputValue = e => {
    const { name, value } = e.target;
    setloginVlaue({ ...loginVlaue, [name]: value });
  };

  const sendLoginInfo = e => {
    e.preventDefault();
    fetch('https://3364-61-105-107-145.ngrok.io/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: loginVlaue.id,
        password: loginVlaue.pw,
      }),
    })
      .then(response => response.json())
      .then(result => {
        inLogin(result);
      });
  };

  const inLogin = ({ token, message }) => {
    if (token) {
      localStorage.setItem('token', token);
      alert('냠냠푸룻! 환영합니다! :) ');
      navigate('/');
    } else if (message === 'INVALID_USER') {
      alert('앗! 아이디 또는 비밀번호를 확인해주세요! :( ');
    }
  };

  return (
    <div className="login">
      <div className="titleArea">
        <h2> MEMBERSHIP</h2>
      </div>
      <div className="loginWarp">
        <div className="login">
          <h3>MEMBER LOGIN</h3>
          <form className="loginBox" onSubmit={sendLoginInfo}>
            <div className="id">
              <span>ID</span>
              <input
                type="text"
                className="memberId"
                name="id"
                onChange={handleInputValue}
              />
            </div>
            <div className="password">
              <span>PASSWORD</span>
              <input
                type="password"
                className="memberPassword"
                name="pw"
                onChange={handleInputValue}
              />
            </div>
            <div className="loginButton">
              <button>LOGIN </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
