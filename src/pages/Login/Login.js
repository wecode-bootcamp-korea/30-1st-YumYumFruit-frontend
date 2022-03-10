import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../config.js';
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

  const idCheck = e => {
    if (!loginVlaue.id.length >= 1) {
      alert('냠냠? 이메일 입력을 해 주셨나요? 💦');
    }
  };

  const pwCheck = e => {
    if (!loginVlaue.pw.length >= 1) {
      alert('푸룻? 비밀번호 입력을 해 주셨나요? 💦');
    }
  };

  const sendLoginInfo = e => {
    e.preventDefault();
    fetch(`${API.signIn}`, {
      method: 'POST',
      body: JSON.stringify({
        email: loginVlaue.id,
        password: loginVlaue.pw,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          alert('냠냠푸룻! 환영합니다! :) ');
          navigate('/');
        } else {
          alert('아이디와 비밀번호를 확인해 주세요');
        }
      })
      .catch(error => {
        alert('아이디와 비밀번호를 확인해 주세요');
      });
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
                onBlur={idCheck}
                onChange={handleInputValue}
              />
            </div>
            <div className="password">
              <span>PASSWORD</span>
              <input
                type="password"
                className="memberPassword"
                name="pw"
                onBlur={pwCheck}
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
