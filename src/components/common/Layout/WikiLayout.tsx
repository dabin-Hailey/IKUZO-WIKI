import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import SidebarWiki from '../SidebarWiki';
import HeaderComponent from '../Header';
import Footer from '../Footer';

const WikiWrapper = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  padding: 0 5%;
`;

const Wiki = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  max-width: 1500px;
  min-width: 1300px;
  height: 100%;
  margin: auto;
  padding: 8rem 0;

  @media screen and (min-width: 1500px) {
    justify-content: space-evenly;
    gap: 90px;
  }
`;

const WikiLayout = () => {
  return (
    <>
      <HeaderComponent transparent={false} />
      <WikiWrapper>
        <Wiki>
          <SidebarWiki />
          <Outlet />
        </Wiki>
      </WikiWrapper>
      <Footer />
    </>
  );
};

export default WikiLayout;
