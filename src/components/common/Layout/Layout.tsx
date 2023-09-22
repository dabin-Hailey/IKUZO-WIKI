import React from 'react';
import styled from 'styled-components';
import { Outlet, useLocation } from 'react-router-dom';
import SidebarGallery from '../SidebarGallery';
import SidebarWiki from '../SidebarWiki';
import HeaderComponent from '../Header';
import Footer from '../Footer';

const LayoutContainer = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  padding: 0 5%;

  display: flex;
  justify-content: center;
`;

const Inner = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 1500px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 1560px) {
    padding: 0 5%;
    justify-content: center;
  }
`;

const Layout = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;

  width: 100%;
  max-width: 1500px;
  height: 100%;
  padding: 8rem 0;
`;

const LayoutComponent = () => {
  const location = useLocation();
  const renderSidebar = () => {
    if (location.pathname.includes('/wiki')) {
      return <SidebarWiki />;
    }
    if (location.pathname.includes('/gallery')) {
      return <SidebarGallery />;
    }
    return null;
  };
  return (
    <>
      <HeaderComponent transparent="false" />
      <LayoutContainer>
        <Inner>
          <Layout>
            {renderSidebar()}
            <Outlet />
          </Layout>
        </Inner>
      </LayoutContainer>
      <Footer />
    </>
  );
};

export default LayoutComponent;
