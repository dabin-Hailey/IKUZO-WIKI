import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import SidebarWiki from '../SidebarWiki';
import HeaderComponent from '../Header';
import Footer from '../Footer';

const Wiki = styled.div`
  width: 90%;
  margin: 8rem auto 0;
`;

const WikiWrapper = styled.div`
  display: flex;
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
      <HeaderComponent transparent={false} />
      <Wiki>
        <WikiWrapper>
          <SidebarWiki />
          <ContentWrapper>
            <Outlet />
          </ContentWrapper>
        </WikiWrapper>
      </Wiki>
      <Footer />
    </>
  );
};

export default WikiLayout;
