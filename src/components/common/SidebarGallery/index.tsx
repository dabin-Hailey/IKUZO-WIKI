import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Korean from '../../../pages/Korean';
import Chinese from '../../../pages/Chinese';
import Japanese from '../../../pages/Japanese';
import Western from '../../../pages/Western';
import sidebar from '../../../assets/sidebar.svg';

const WikiWrapper = styled.div`
  display: flex;
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
  display: flex;
  flex-direction: column;
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1.2rem;
`;

const SidebarIcon = styled.img`
  width: 2rem;
  color: #ffa800;
`;

const SidebarNav = styled.nav`
  flex-grow: 1;
`;

const SidebarNavLink = styled(NavLink)`
  display: block;
  padding: 0.8rem 1.5rem;
  border-radius: 0.7rem;
  font-size: 0.8rem;
  text-decoration: none;
  color: var(--color-black);
  transition: 0.5s;

  &.active {
    font-weight: bold;
    color: #ffa800;
  }

  &:hover {
    background-color: #fff0b8;
    box-shadow: inset 0 0.1rem 0.1rem 0 #f6e6ac;
  }
`;

const AddButton = styled.button`
  width: 190px;
  height: 35px;
  background-color: var(--color-primary);

  border: none;
  border-radius: 30px;
  box-shadow: 0 2px 4px #9c9c9c;
  cursor: pointer;
`;

const ContentWrapper = styled.div`
  margin-left: 23rem;
  margin-top: 7rem;
`;

const SidebarGallery = () => {
  return (
    <WikiWrapper>
      <SidebarWikiWrapper>
        <SidebarHeader>
          <SidebarIcon
            src={sidebar}
            alt="sidebar"
          />
          <h2>맛집 추천</h2>
        </SidebarHeader>
        <SidebarNav>
          <ul>
            <li>
              <SidebarNavLink to="/gallery/korean">한식</SidebarNavLink>
            </li>
            <li>
              <SidebarNavLink to="/gallery/chinese">중식</SidebarNavLink>
            </li>
            <li>
              <SidebarNavLink to="/gallery/japanese">일식</SidebarNavLink>
            </li>
            <li>
              <SidebarNavLink to="/gallery/western">양식</SidebarNavLink>
            </li>
          </ul>
        </SidebarNav>
        <AddButton>맛집 추가하기</AddButton>
      </SidebarWikiWrapper>
      <ContentWrapper>
        <Routes>
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
          <Route
            path="/"
            element={<Korean />}
          />
        </Routes>
      </ContentWrapper>
    </WikiWrapper>
  );
};

export default SidebarGallery;
