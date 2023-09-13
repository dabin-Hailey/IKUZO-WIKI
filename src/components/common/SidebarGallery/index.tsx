import React from 'react';
import { Link } from 'react-router-dom';

const SidebarGallery = () => {
  return (
    <div>
      <h3>Wiki Sidebar</h3>
      <ul>
        <li>
          <Link to="/wiki/intro">소개</Link>
        </li>
        <li>
          <Link to="/wiki/with">같이 먹을 사람 구해요</Link>
        </li>
        {/* Add more links for subpages */}
      </ul>
    </div>
  );
};

export default SidebarGallery;
