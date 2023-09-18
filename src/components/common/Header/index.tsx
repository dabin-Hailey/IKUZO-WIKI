import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import headerIconSvg from '../../../assets/headerIcon.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          className="header__left--icon"
          src={headerIconSvg}
          alt="headerIcon"
        />
        <h1 className="header__left-title">IKUZO</h1>
      </div>
      <div className="header__right">
        <ul className="header__right--wrapper">
          <li className="header__right--item">
            <NavLink
              className={({ isActive }) => {
                return isActive ? 'nav__active' : 'nav__defualt';
              }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="header__right--item">
            <NavLink
              className={({ isActive }) => {
                return isActive ? 'nav__active' : 'nav__default';
              }}
              to="/wiki"
            >
              Wiki
            </NavLink>
          </li>
          <li className="header__right--item">
            <NavLink
              className={({ isActive }) => {
                return isActive ? 'nav__active' : 'nav__default';
              }}
              to="/gallery"
            >
              Gallery
            </NavLink>
          </li>
        </ul>
        {/* Mypage보기 버튼 주석처리
        <button
          className="btn btn-primary"
          type="button"
        >
          MYPAGE보기
        </button> */}
      </div>
    </div>
  );
};

export default Header;
