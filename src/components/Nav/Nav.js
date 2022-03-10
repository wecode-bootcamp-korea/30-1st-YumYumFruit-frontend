import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavItem from './NavItem';
import { NAV_LIST_DATA } from './navdata.js';
import './Nav.scss';

function Nav() {
  const navigate = useNavigate();
  const ref = useRef();

  const updateCategory = id => {
    const queryString = `?category=${
      id === 1 ? 'all' : id - 1
    }&sort=price&page=1`;
    navigate(`/products${queryString}`);
  };

  useEffect(() => {
    const menu = ref.current;
    const menuTop = ref.current.offsetTop;

    const fixMenu = () => {
      window.scrollY >= menuTop
        ? menu.classList.add('fixed')
        : menu.classList.remove('fixed');
    };

    window.addEventListener('scroll', fixMenu);

    return () => {
      window.removeEventListener('scroll', fixMenu);
    };
  }, []);

  const token = localStorage.getItem('token');

  return (
    <nav className="nav">
      <div className="top">
        <div className="topInner">
          <div className="menuList">
            <ul className="leftMenu">
              <li className="item">(+) ADD BOOKMARK</li>
            </ul>
            <ul className="rightMenu">
              {NAV_LIST_DATA.userPageLinks.map(item =>
                (token && item.name !== 'LOGIN' && item.name !== 'JOIN') ||
                (!token && item.name !== 'LOGOUT') ? (
                  <NavItem key={item.id} item={item} />
                ) : (
                  ''
                )
              )}
            </ul>
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
            <ul className="leftMenu">
              {NAV_LIST_DATA.productPageLinks.map(item => (
                <li
                  key={item.id}
                  className="navItem"
                  onClick={() => updateCategory(item.id)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
            <ul className="rightMenu">
              {NAV_LIST_DATA.boardPageLinks.map(item => (
                <NavItem key={item.id} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
