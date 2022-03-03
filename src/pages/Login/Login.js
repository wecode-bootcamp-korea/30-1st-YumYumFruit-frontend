import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const [loginVlaue, setloginVlaue] = useState({
    id: '',
    pw: '',
  });

  const handleInputValue = e => {
    const { name, value } = e.target;
    setloginVlaue({ ...loginVlaue, [name]: value });
  };

  const sendLoginInfo = e => {
    e.preventDefault();
    fetch('https://westagram-signup.herokuapp.com/login', {
      method: 'POST',
      body: JSON.stringify({
        email: loginVlaue.id,
        password: loginVlaue.pw,
      }),
    })
      .then(response => response.json())
      .then(result => inLogin(result));
  };

  const inLogin = ({ token, messege }) => {
    if (token) {
      localStorage.setItem('token', token);
      alert('로그인 완료');
      Navigate('/');
    } else if (messege === 'INVALID_USER') {
      alert('로그인 실패');
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
          <div className="loginBox">
            <div className="id">
              <span>ID</span>
              <input
                type="text"
                id="memberId"
                name="id"
                onChange={handleInputValue}
              />
            </div>
            <div className="password">
              <span>PASSWORD</span>
              <input
                type="password"
                id="memberPassword"
                name="pw"
                onChange={handleInputValue}
              />
            </div>
            <div className="securityCheck">
              <span>보안접속</span>
            </div>
            <div className="loginButton">
              <button onSubmit={sendLoginInfo} onClick={inLogin}>
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
