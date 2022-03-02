import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';
import { NAV_LIST01, NAV_LIST02, NAV_LIST03 } from './navdata.js';
import './Nav.scss';

function Nav() {
  const ref = useRef();

  useEffect(() => {
    const menuTop = ref.current.offsetTop;

    const fixMenu = () => {
      window.scrollY >= menuTop
        ? ref.current.classList.add('fixed')
        : ref.current.classList.remove('fixed');
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
                <li className="item">(+) ADD BOOKMARK</li>
              </ul>
            </div>
            <div className="halfBox">
              <ul className="rightBox">
                {NAV_LIST01.map(item => (
                  <NavItem key={item.id} item={item} />
                ))}
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
      <div className="menu" ref={ref}>
        <div className="menuInner">
          <div className="menuList">
            <div className="halfBox">
              <ul className="leftBox">
                {NAV_LIST02.map(item => (
                  <NavItem key={item.id} item={item} />
                ))}
              </ul>
            </div>
            <div className="halfBox">
              <ul className="rightBox">
                {NAV_LIST03.map(item => (
                  <NavItem key={item.id} item={item} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
