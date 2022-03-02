import React from 'react';
import './Signup.scss';

function Signup() {
  return (
    <>
      <div className="signup">
        <div className="titleArea">
          <h2>JOIN US</h2>
        </div>
        {/* <div></div> */}
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
                        name="memberId"
                        className="inputTypeText"
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
                        name="memberPw"
                        className="inputTypeText"
                        // disabled={0}
                        maxLength={16}
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
                        type="password"
                        name="userPwConfirm"
                        className="inputTypeText"
                        autoComplete="off"
                        // disabled={0}
                        maxLength={16}
                      />
                      <span className="pwConfirmMsg"></span>
                      (영문 대소문자/숫자 조합, 10자~16자)
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="nameTitle">
                      이름
                      <img />
                    </th>
                    <td>
                      <input
                        type="text"
                        name="userName"
                        className="inputTypeText"
                        maxLength={20}
                      />
                      <span className="pwMsg"></span>
                      (영문소문자/숫자, 4~16자)
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="tel">
                      전화번호
                      <img />
                    </th>
                    <td>
                      <select
                        name="mobile[]"
                        fw-filter="isNumber"
                        maxLength={4}
                      />
                      -
                      <input
                        name="mobile[]"
                        fw-filter="isNumber"
                        maxLength={4}
                      />
                      -
                      <input
                        name="mobile[]"
                        fw-filter="isNumber"
                        maxLength={4}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </form>
        ;
      </div>
    </>
  );
}

export default Signup;
