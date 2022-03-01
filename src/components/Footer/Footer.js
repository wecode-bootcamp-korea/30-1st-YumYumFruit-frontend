import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="inner">
        <div className="guide">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="">Guide</Link>
            </li>
            <li>
              <Link to="">Member</Link>
            </li>
          </ul>
        </div>
        <div className="callCenter">
          <h3>CALL CENTER</h3>
          <div>
            <ul>
              <li>
                <span>TEL</span>
                '010.7365.4553 (wecode)'
              </li>
              <li>
                <span>OPERATING TIME</span>
                '월요일-금요일 AM10:00 - PM07:00 (주말 및 공휴일 휴무)'
              </li>
            </ul>
          </div>
        </div>
        <div className="companyInfo">
          <h3>COMPANY INFO</h3>
          <div>
            <ul>
              <li>
                <span>COMPANY</span>
                '냠냠프룻'
              </li>
              <li>
                <span>MEMBER</span>
                '프론트엔드: 김혜진 노유정 정건희 / 백엔드: 박건우 윤명국
                이예솔'
              </li>
              <li>
                <span>TEL</span>
                '010.7365.4553 (wecode)'
              </li>
              <li>
                <span>ADRESS</span>
                '서울특별시 강남구 테헤란로 427, 위워크타워 (wecode)'
              </li>
            </ul>
          </div>
        </div>
        <div />
      </div>
    </footer>
  );
}

export default Footer;
