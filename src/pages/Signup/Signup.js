import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JoinButton from './Button/JoinButton';
import CancButton from './Button/CancButton';
import './Signup.scss';

function Signup() {
  const [signupValue, setSignupValue] = useState({
    email: '',
    password: '',
    repassword: '',
    username: '',
    phone_number: '',
  });
  // const [emailMessage, setEmailMessage] = useState('');
  // const [passwordMessage, setPasswordMessage] = useState('');
  // const [repasswordMessage, setRepasswordMessage] = useState('');

  const navigate = useNavigate();

  //이메일 @, . 포함
  const isValidEmail =
    signupValue.email.includes('@') && signupValue.email.includes('.') === true;

  //비밀번호 특수문자 포함
  const spacialValue = signupValue.password.search(/[!@#$%^&*]/);

  //비밀번호 === 비밀번호 확인
  const checkPw = signupValue.password;
  const checkRePw = signupValue.repassword;

  //비밀번호 8자 이상 포함 & 특수문자 포함
  const isValidPw = signupValue.password.length >= 8 && spacialValue >= 1;

  //비밀번호 확인
  const rePwcheck = checkPw === checkRePw;

  //length 문자열 1 이상(폰번호 제외)
  const lengthValue =
    signupValue.email.length >= 1 && signupValue.username.length >= 1;
  // const isValidPhone = signupValue.phone_number > 0 === true;

  const handlesetSignupValue = e => {
    // const handlesetSignupValue = useCallback(e => {
    const { name, value } = e.target;
    setSignupValue({ ...signupValue, [name]: value });
    console.log(e.target, value);
  };
  // );

  // const isValidEmail = useCallback(e => {
  //   const emailcheck =
  //     signupValue.email.includes('@') && signupValue.email.includes('.');
  //   const emailcurrent = e.target.value;
  //   setSignupValue.email(emailcurrent);
  //   if (!emailcheck.test(emailcurrent)) {
  //     setEmailMessage('이메일을 바르게 써 주세요');
  //     setSignupValue.email(false);
  //   } else {
  //     setEmailMessage('이메일을 바르게 써 주세요');
  //     setSignupValue.email(true);
  //   }
  // }, []);

  const sendJoinInfo = e => {
    e.preventDefault();
    fetch('https://e3a0-61-105-107-145.ngrok.io/users/signup', {
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
    if (!isValidEmail || !lengthValue || !isValidPw || !checkPw || !rePwcheck) {
      alert('양식에 맞게 모두 써 주셨나요?! T_T');
      return false;
    } else {
      // 회원가입 완료 창으로 추후에 수정하기!
      navigate('/');
    }
  };
  console.log('이메일 @,.있음? >>', isValidEmail);
  console.log('pw8자이상+특문있음?/비번같 >>', isValidPw);
  console.log('문자열 1 이상? >>', lengthValue);
  console.log('비번 재확인', rePwcheck);

  const CancleButton = () => {
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
          <form className="boardWrite" onSubmit={sendJoinInfo}>
            <table>
              <tbody>
                <tr>
                  <th scope="row">
                    아이디(EMAIL)
                    <img alt="checkImg" src="./images/checked.png" />
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
                    <img alt="checkImg" src="./images/checked.png" />
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
                    <img alt="checkImg" src="./images/checked.png" />
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
                    <img alt="checkImg" src="./images/checked.png" />
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
              <JoinButton
                className="joinBtn"
                type="button"
                onClick={handleJoinButton}
              >
                회원가입
              </JoinButton>
              <CancButton
                className="cancleBtn"
                type="button"
                onClick={CancleButton}
              >
                취소
              </CancButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
