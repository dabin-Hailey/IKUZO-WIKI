import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import SidebarWiki from '../SidebarWiki';
import HeaderComponent from '../Header';
import Footer from '../Footer';

const WikiWrapper = styled.div`
  width: 90%;
  margin: 8rem auto 2rem;
`;

const Wiki = styled.div`
  display: flex;
  gap: 3rem;
  height: 100%;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 20rem;

  margin-bottom: 4rem;
`;

const WikiLayout = () => {
  return (
    <>
      <HeaderComponent transparent="false" />
      <WikiWrapper>
        <Wiki>
          <SidebarWiki />
          <ContentWrapper>
            <Outlet />
          </ContentWrapper>
        </Wiki>
      </WikiWrapper>
      <Footer />
    </>
  );
};

export default WikiLayout;
