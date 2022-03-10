import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../config.js';
import { SIGNUP_INPUT_DATA } from './SignupData';
import SinupInputList from './SignupInputList';
import JoinButton from './Button/JoinButton';
import CancleButton from './Button/CancleButton';
import './Signup.scss';

// const MESSAGE_TO_ALERT = {
//   INVAILD_EMAIL: '입력하신 이메일이 양식에 맞지 않아요 T_T',
//   INVALID_PASSWORD: '입력하신 비밀번호가 양식에 맞지 않아요. T_T',
//   DUPLICATE_EMAIL: '이미 사용중인 이메일이예요 다른 푸룻🌱한 메일을 써볼까요? T_T',
//   SUCCESS: '냠냠푸룻 회원가입 완료! 🍉'
// }

function Signup() {
  const [signupValue, setSignupValue] = useState({
    email: '',
    password: '',
    repassword: '',
    name: '',
    phone_number: '',
  });

  const navigate = useNavigate();

  const isValidEmail =
    signupValue.email.includes('@') && signupValue.email.includes('.');

  const spacialValue = signupValue.password.search(/[!@#$%^&*]/);

  const checkPw = signupValue.password;
  const checkRePw = signupValue.repassword;

  const isValidPw = signupValue.password.length >= 8 && spacialValue >= 1;

  const rePwcheck = checkPw === checkRePw;

  const lengthValue =
    signupValue.email.length >= 1 &&
    signupValue.name.length >= 1 &&
    signupValue.repassword.length >= 1;

  const handlesetSignupValue = e => {
    const { name, value } = e.target;
    setSignupValue({ ...signupValue, [name]: value });
  };

  const sendJoinInfo = e => {
    e.preventDefault();
    fetch(API.signup, {
      method: 'POST',
      body: JSON.stringify({
        email: signupValue.email,
        password: signupValue.password,
        name: signupValue.name,
        phone_number: signupValue.phone_number,
      }),
    })
      .then(response => response.json())
      .then(result => {
        // alert(MESSAGE_TO_ALERT[result.message]);
        if (result.message === 'INVAILD_EMAIL') {
          alert('입력하신 이메일이 양식에 맞지 않아요 T_T');
        } else if (result.message === 'INVALID_PASSWORD') {
          alert('입력하신 비밀번호가 양식에 맞지 않아요. T_T');
        } else if (result.message === 'DUPLICATE_EMAIL') {
          alert(
            '이미 사용중인 이메일이예요 다른 푸룻🌱한 메일을 써볼까요? T_T'
          );
        } else if (result.message === 'SUCCESS') {
          alert('냠냠푸룻 회원가입 완료! 🍉');
          navigate('/');
        }
      });
  };
  const onBlur = e => {
    if (!signupValue.email.length >= 1) {
      alert('냠냠? 이메일 입력을 해 주셨나요? 💦');
    } else if (!signupValue.password.length >= 1) {
      alert('푸룻? 비밀번호 입력을 해 주셨나요? 💦');
    }
  };

  const goToMain = () => {
    navigate('/');
  };

  return (
    <div className="signup">
      <div className="titleArea">
        <h2>JOIN US</h2>
      </div>
      <div className="joinForm">
        <div className="memberJoin">
          <div className="boardWriteTop">
            <h3>기본정보</h3>
            <p className="required">
              <img alt="checkImg" src="./images/checked.png" />
              필수 입력사항
            </p>
          </div>
          <form id="formInfo" className="boardWrite" onSubmit={sendJoinInfo}>
            <table>
              <tbody>
                {SIGNUP_INPUT_DATA.map(item => (
                  <SinupInputList
                    key={item.id}
                    item={item}
                    onChange={handlesetSignupValue}
                    onBlur={onBlur}
                  />
                ))}
                <tr>
                  <th scope="row" className="nameTitle" id="name">
                    이름
                  </th>
                  <td>
                    <input
                      type="text"
                      name="name"
                      className="inputTypeText"
                      maxLength={21}
                      onChange={handlesetSignupValue}
                    />
                  </td>
                </tr>
                <tr className="phoneNumber">
                  <th scope="row" className="tel">
                    전화번호
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
            <div className="joinButtons">
              <JoinButton form="formInfo" type="submit" />
              <CancleButton onClick={goToMain} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
