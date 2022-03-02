import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

function Login() {
  return (
    <>
      <div className="main">
        <div className="titleArea">
          <h2>
            <span>MEMBERSHIP</span>
          </h2>
        </div>
        <div className="loginWarp">
          {/* <form>
            <input></input>
            <input></input>
          </form> */}
          <div className="login">
            <h3>MEMBER LOGIN</h3>
            <div className="loginBox">
              <p className="id">
                <span>ID</span>
                <input id-label="memberId" />
              </p>
              <p className="password">
                <span>PASSWORD</span>
                <input fw-label="memberPassword" />
              </p>
              <div className="securityCheck">
                <span>보안접속</span>
                {/* <span className="idSave"></span> */}
              </div>
              <div className="loginButton">
                <span>
                  <button>LOGIN</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
