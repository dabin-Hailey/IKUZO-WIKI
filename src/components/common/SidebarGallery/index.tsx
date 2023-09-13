// SidebarGallery.js
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
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
            <Link to="/gallery">한식</Link>
          </li>
          <li>
            <Link to="/gallery/chinese">중식</Link>
          </li>
          <li>
            <Link to="/gallery/japanese">일식</Link>
          </li>
          <li>
            <Link to="/gallery/western">양식</Link>
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
