import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Notice from '../../../pages/Notice';
import Intro from '../../../pages/Intro';
import With from '../../../pages/With';

const SidebarWiki = () => {
  return (
    <div>
      <h2>Wiki</h2>
      <nav>
        <ul>
          <li>
            <Link to="/wiki">공지사항</Link>
          </li>
          <li>
            <Link to="/wiki/intro">소개</Link>
          </li>
          <li>
            <Link to="/wiki/with">같이 먹을 사람 구해요</Link>
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
