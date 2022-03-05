import React, { useState } from 'react';
import './Signup.scss';

function Signup() {
  const [signupValue, setSignupValue] = useState({
    email: '',
    password: '',
    repassword: '',
    username: '',
    phone_number: '',
  });

  //이메일 @, . 포함
  const isValidEmail =
    signupValue.email.includes('@') && signupValue.email.includes('.') === true;

  //비밀번호 특수문자 포함
  const spacialValue = signupValue.password.search(/[!@#$%^&*]/);

  //비밀번호 8자 이상 포함 & 특수문자 포함
  const isValidPw = signupValue.password.length >= 8 && spacialValue >= 1;

  //비밀번호 === 비밀번호 확인
  const checkPw = signupValue.password === signupValue.repassword;

  //length 문자열 1 이상(폰번호 제외)
  const lengthValue =
    signupValue.email.length >= 1 && signupValue.username.length >= 1;
  // const isValidPhone = signupValue.phone_number > 0 === true;

  const handlesetSignupValue = e => {
    const { name, value } = e.target;
    setSignupValue({ ...signupValue, [name]: value });
    console.log(e.target, value);
  };

  const sendJoinInfo = e => {
    e.preventDefault();
    fetch('https://e3a0-61-105-107-145.ngrok.io/users/signu', {
      method: 'POST',
      body: JSON.stringify({
        email: signupValue.email,
        password: signupValue.password,
        username: signupValue.username,
        phone_number: signupValue.phone_number,
        // username: 'testrrr123',
        // email: 'qwer12555@naver.com',
        // password: 'asdf3456',
        // phone_number: '01022344321',
      }),
    })
      .then(Response => Response.json())
      .then(result => handleJoinButton(result));
  };

  const handleJoinButton = () => {
    if (!isValidEmail || !lengthValue || !isValidPw || !checkPw) {
      alert('양식에 맞게 모두 써 주셨나요?! T_T');
    }
    // } else {
    //   alert('냠냠푸룻 Join 성공!');
    // }
  };
  // const joinRemove = () => {}

  return (
    <div className="signup">
      <div className="titleArea">
        <h2>JOIN US</h2>
      </div>
      <div className="joinForm">
        <div className="memberJoin">
          <div className="boardWriteTop">
            <h3>기본정보</h3>
          </div>
          <p className="required">
            <img src="" />
            필수 입력사항
          </p>
          <form className="boardWrite" onSubmit={sendJoinInfo}>
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
                    (영문 대소문자/숫자 조합, 8자~16자)
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    비밀번호 확인
                    <img />
                  </th>
                  <td>
                    <input
                      type="password"
                      name="repassword"
                      className="inputTypeText"
                      autoComplete="off"
                      // disabled={0}
                      maxLength={16}
                      onChange={handlesetSignupValue}
                    />
                    <span className="pwConfirmMsg"></span>
                    입력하신 비밀번호와 동일하게 입력해주세요
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="nameTitle" id="username">
                    이름
                    <img />
                  </th>
                  <td>
                    <input
                      type="text"
                      name="username"
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
            <button onClick={handleJoinButton}> 회원가입</button>
            {/* <button onClick={handleJoinButton}>취소</button> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
