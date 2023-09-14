import React from 'react';
import { Route, Routes, NavLink, useLocation } from 'react-router-dom';
import Korean from '../../../pages/Korean';
import Chinese from '../../../pages/Chinese';
import Japanese from '../../../pages/Japanese';
import Western from '../../../pages/Western';
import sidebar from '../../../assets/sidebar.svg';
import './SidebarGallery.css';

const SidebarGallery = () => {
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
          <h2>맛집 추천</h2>
        </div>

        <nav>
          <ul>
            <li>
              <NavLink
                to="/gallery/korean"
                className={`sidebar__wiki--items ${
                  isActive('/gallery') ? 'active' : ''
                }`}
              >
                한식
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery/chinese"
                className={`sidebar__wiki--items ${
                  isActive('/gallery/chinese') ? 'active' : ''
                }`}
              >
                중식
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery/japanese"
                className={`sidebar__wiki--items ${
                  isActive('/gallery/japanese') ? 'active' : ''
                }`}
              >
                일식
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery/western"
                className={`sidebar__wiki--items ${
                  isActive('/gallery/western') ? 'active' : ''
                }`}
              >
                양식
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="content">
        <Routes>
          <Route
            path="/"
            element={<Korean />}
          />
          <Route
            path="korean"
            element={<Korean />}
          />
          <Route
            path="chinese"
            element={<Chinese />}
          />
          <Route
            path="japanese"
            element={<Japanese />}
          />
          <Route
            path="western"
            element={<Western />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default SidebarGallery;
