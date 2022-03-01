// hi
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

function Nav() {
  useEffect(() => {
    const menu = document.querySelector('.menu');
    const menuTop = menu.offsetTop;

    const fixMenu = () => {
      window.scrollY >= menuTop
        ? menu.classList.add('fixed')
        : menu.classList.remove('fixed');
    };

    window.addEventListener('scroll', fixMenu);
  }, []);

  return (
    <nav className="nav">
      <div className="top">
        <div className="topInner">
          <div className="menuList">
            <div className="halfBox">
              <ul className="leftBox">
                <li>(+) ADD BOOKMARK</li>
              </ul>
            </div>
            <div className="halfBox">
              <ul className="rightBox">
                <li>
                  <Link className="link" to="/login">
                    LOGIN
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/signup">
                    JOIN
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/">
                    CART (0)
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/">
                    MYPAGE
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="topLogo">
            <Link className="link" to="/">
              <img src="/images/logo.png" alt="logo" className="logo" />
            </Link>
          </div>
        </div>
      </div>
      <div className="menu">
        <div className="menuInner">
          <div className="menuList">
            <div className="halfBox">
              <ul className="leftBox">
                <li>
                  <Link className="link" to="/">
                    상품전체
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/">
                    국산과일
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/">
                    수입과일
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/">
                    냉동과일
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/">
                    과일세트
                  </Link>
                </li>
              </ul>
            </div>
            <div className="halfBox">
              <ul className="rightBox">
                <li>
                  <Link className="link" to="/">
                    NOTICE
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/">
                    Q&A
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/">
                    REVIEW
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/">
                    GUIDE
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
