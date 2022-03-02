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
                  <Link className="link" to="/">
                    LOGIN
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/">
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
                    ORDER
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="topLogo">
            {/* <h1 className="logo">냠냠프룻 ・ YUMYUM FRUITS</h1> */}
            <img src="/images/logo.png" alt="logo" className="logo" />
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
                    마말랭
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/">
                    마시는 마말랭
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/">
                    냠냠프룻 마말랭 SET
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
