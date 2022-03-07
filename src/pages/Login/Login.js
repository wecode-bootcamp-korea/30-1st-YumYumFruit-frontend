import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { config } from '../../config.js';
import './Login.scss';

function Login() {
  const [loginVlaue, setloginVlaue] = useState({
    id: '',
    pw: '',
  });

  const navigate = useNavigate();
  const checkInput = loginVlaue.id.length >= 1 && loginVlaue.pw.length >= 1;

  const handleInputValue = e => {
    const { name, value } = e.target;
    setloginVlaue({ ...loginVlaue, [name]: value });
  };

  const idCheck = e => {
    if (!loginVlaue.id.length >= 1) {
      console.log('입력해주세요');
    } else {
      console.log('ok');
    }
  };

  const pwCheck = e => {
    if (!loginVlaue.pw.length >= 1) {
      console.log('입력해주세요');
    } else {
      console.log('ok');
    }
  };

  const sendLoginInfo = e => {
    e.preventDefault();
    fetch(`${config.api}/users/signin`, {
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
    } else if (!checkInput) {
      alert('어라? 입력을 해 주셨나요? (ㅇ0ㅇ)');
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
            {/* <div className="checkText"> */}
            {/* <span>어라? 입력을 해 주셨나요? 💦</span> */}
            {/* </div> */}
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
