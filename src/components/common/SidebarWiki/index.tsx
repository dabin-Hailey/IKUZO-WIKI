import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import Notice from '../../../pages/Notice';
import Intro from '../../../pages/Intro';
import With from '../../../pages/With';

const SidebarWiki = () => {
  return (
    <div>
      <h2>위키</h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/wiki">공지사항</NavLink>
          </li>
          <li>
            <NavLink to="/wiki/intro">소개</NavLink>
          </li>
          <li>
            <NavLink to="/wiki/with">같이 먹을 사람 구해요</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/"
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
  );
};

export default SidebarWiki;
