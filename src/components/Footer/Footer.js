import React from 'react';
import FooterItem from './FooterItem';
import FooterList from './FooterList';
import { GUIDE_LIST, INFO_LIST } from './FooterData';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="inner">
        <div className="guide">
          <ul>
            {GUIDE_LIST.map(item => (
              <FooterItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
        <div className="callCenter">
          <h3>CALL CENTER</h3>
          <div>
            <ul>
              <li>
                <span>TEL</span>
                010.7365.4553 (wecode)
              </li>
              <li>
                <span>OPERATING TIME</span>
                월요일-금요일 AM10:00 - PM07:00 (30기 취뽀 가자)
              </li>
            </ul>
          </div>
        </div>
        <div className="companyInfo">
          <h3>COMPANY INFO</h3>
          <div>
            <ul>
              {INFO_LIST.map(item => (
                <FooterList key={item.id} item={item} />
              ))}
            </ul>
          </div>
        </div>
        <div />
      </div>
    </footer>
  );
}

export default Footer;
