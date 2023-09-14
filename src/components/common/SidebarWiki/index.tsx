import React from 'react';
import { Route, Routes, NavLink, useLocation } from 'react-router-dom';
import Notice from '../../../pages/Notice';
import Intro from '../../../pages/Intro';
import With from '../../../pages/With';
import sidebar from '../../../assets/sidebar.svg';
import './SidebarWiki.css';

const SidebarWiki = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="Wiki">
      <div className="sidebar__wiki">
        <div className="sidebar__wiki--header">
          <img
            className="sidebar__wiki--icon"
            src={sidebar}
            alt="sidebar"
          />
          <h2>Wiki</h2>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/wiki/notice"
                className={`sidebar__wiki--items ${
                  isActive('/wiki') ? 'active' : ''
                }`}
              >
                공지사항
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/wiki/intro"
                className={`sidebar__wiki--items ${
                  isActive('/wiki/intro') ? 'active' : ''
                }`}
              >
                소개
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/wiki/with"
                className={`sidebar__wiki--items ${
                  isActive('/wiki/with') ? 'active' : ''
                }`}
              >
                같이 먹을 사람 구해요
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="content">
        <Routes>
          <Route
            path="/"
            element={<Notice />}
          />
          <Route
            path="notice"
            element={<Notice />}
          />
          <Route
            path="intro"
            element={<Intro />}
          />
          <Route
            path="with"
            element={<With />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default SidebarWiki;
