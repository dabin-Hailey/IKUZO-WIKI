import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import NoticePage from '../../../pages/Notice';
import IntroPage from '../../../pages/Intro';
import With from '../../../pages/With';
import sidebar from '../../../assets/sidebar.svg';

const WikiWrapper = styled.div`
  display: flex;

  width: 100%;
`;

const SidebarWikiWrapper = styled.div`
  position: fixed;
  top: 6.5rem;
  left: 2rem;
  width: 12rem;
  height: 65%;
  padding: 2rem;
  background-color: var(--color-beige);
  border-radius: 1rem;
  color: var(--color-black);
  box-shadow: 0 0.2rem 0.4rem 0 #c3c3c3;

  .sidebar__wiki--header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 1.2rem;

    .sidebar__wiki--icon {
      width: 2rem;
      color: #ffa800;
    }

    a {
      text-decoration: none;
      color: var(--color-black);
    }

    h2 {
      margin-left: 0.5rem;
      font-size: 1.2rem;
    }
  }

  ul {
    font-size: 0.8rem;
  }

  li {
    margin-bottom: 0.7rem;
  }

  .sidebar__wiki--items.active {
    font-weight: bold;
    color: #ffa800;
  }

  .sidebar__wiki--items:hover {
    background-color: #fff0b8;
    box-shadow: inset 0 0.1rem 0.1rem 0 #f6e6ac;
    padding: 0.8rem 1.5rem; /* hover 시에 padding 추가 */
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: var(--color-black);
  display: block;
  padding: 0.8rem 1.5rem;
  border-radius: 0.7rem;
  transition: 0.5s;

  &:hover {
    text-decoration: none;
    background-color: #fff0b8;
    box-shadow: inset 0 0.1rem 0.1rem 0 #f6e6ac;
  }

  &.active {
    font-weight: bold;
    color: #ffa800;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: calc(100% - 20rem);
  margin: 6.5rem 0 0 20rem;
`;

const SidebarWiki = () => {
  return (
    <WikiWrapper>
      <SidebarWikiWrapper>
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
              <StyledNavLink to="/wiki/notice">공지사항</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/wiki/intro">소개</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/wiki/with">
                같이 먹을 사람 구해요
              </StyledNavLink>
            </li>
          </ul>
        </nav>
      </SidebarWikiWrapper>
      <ContentWrapper>
        <Routes>
          <Route
            path="notice"
            element={<NoticePage />}
          />
          <Route
            path="intro"
            element={<IntroPage />}
          />
          <Route
            path="with"
            element={<With />}
          />
          <Route
            path="/"
            element={<NoticePage />}
          />
        </Routes>
      </ContentWrapper>
    </WikiWrapper>
  );
};

export default SidebarWiki;
