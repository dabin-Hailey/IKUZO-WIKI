// SidebarGallery.js
import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import Korean from '../../../pages/Korean';
import Chinese from '../../../pages/Chinese';
import Japanese from '../../../pages/Japanese';
import Western from '../../../pages/Western';

const SidebarGallery = () => {
  return (
    <div>
      <h2>맛집 추천</h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/gallery">한식</NavLink>
          </li>
          <li>
            <NavLink to="/gallery/chinese">중식</NavLink>
          </li>
          <li>
            <NavLink to="/gallery/japanese">일식</NavLink>
          </li>
          <li>
            <NavLink to="/gallery/western">양식</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/"
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
  );
};

export default SidebarGallery;
