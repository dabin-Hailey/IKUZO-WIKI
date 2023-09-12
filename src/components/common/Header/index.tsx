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
      <ul className="header__right">
        <li className="header__right--item">
          <NavLink to="/">HOME</NavLink>
        </li>
        <li className="header__right--item">
          <NavLink to="/wiki">WIKI</NavLink>
        </li>
        <li className="header__right--item">
          <NavLink to="/gallery">GALLERY</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
