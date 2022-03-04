import React, { useState } from 'react';
import './Signup.scss';

function Signup() {
  const [signupValue, setSignupValue] = useState({
    email: '',
    password: '',
    repassword: '',
    name: '',
    phone_number: '',
  });

  // const { email, password, repassword, name, phone_number } = signupValue;
  const isValidEmail =
    signupValue.email.includes('@') && signupValue.email.includes('.');

  const handlesetSignupValue = e => {
    const { name, value } = e.target;
    setSignupValue({ ...signupValue, [name]: value });
    console.log(e.target, value);
  };

  // const sendJoinInfo = e => {

  // };

  // const inJoin = ({}) => {

  // }

  return (
    <div className="signup">
      <div className="titleArea">
        <h2>JOIN US</h2>
      </div>
      <form className="joinForm">
        <div className="memberJoin">
          <div className="boardWriteTop">
            <h3>기본정보</h3>
          </div>
          <p className="required">
            <img src="" />
            필수 입력사항
          </p>
          <div className="boardWrite">
            <table>
              {/* <caption>회원 기본정보</caption> */}
              <tbody>
                <tr>
                  <th scope="row">
                    아이디(EMAIL)
                    <img />
                  </th>
                  <td>
                    <input
                      type="text"
                      name="email"
                      className="inputTypeText"
                      onChange={handlesetSignupValue}
                    />
                    <span className="idMsg"></span>
                    (영문소문자/숫자, 4~16자)
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    비밀번호
                    <img />
                  </th>
                  <td>
                    <input
                      type="password"
                      name="password"
                      className="inputTypeText"
                      // disabled={0}s
                      maxLength={16}
                      onChange={handlesetSignupValue}
                    />
                    (영문 대소문자/숫자 조합, 10자~16자)
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    비밀번호 확인
                    <img />
                  </th>
                  <td>
                    <input
                      type="repassword"
                      name="repassword"
                      className="inputTypeText"
                      autoComplete="off"
                      // disabled={0}
                      maxLength={16}
                      onChange={handlesetSignupValue}
                    />
                    <span className="pwConfirmMsg"></span>
                    (영문 대소문자/숫자 조합, 8자~16자)
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="nameTitle" id="name">
                    이름
                    <img />
                  </th>
                  <td>
                    <input
                      type="text"
                      name="name"
                      className="inputTypeText"
                      maxLength={21}
                      onChange={handlesetSignupValue}
                    />
                    <span className="pwMsg"></span>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="tel">
                    전화번호
                    <img />
                  </th>
                  <td>
                    <select
                      name="phone_number[]"
                      fw-filter="isNumber"
                      onChange={handlesetSignupValue}
                    >
                      <option>010</option>
                      <option>011</option>
                      <option>016</option>
                      <option>017</option>
                      <option>018</option>
                      <option>019</option>
                    </select>
                    -
                    <input
                      name="phone_number[]"
                      fw-filter="isNumber"
                      maxLength={4}
                      onChange={handlesetSignupValue}
                    />
                    -
                    <input
                      name="phone_number[]"
                      fw-filter="isNumber"
                      maxLength={4}
                      onChange={handlesetSignupValue}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <button
              onClick={inJoin} // onSubmit={sendJoinInfo}
            ></button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
