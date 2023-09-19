import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import SidebarGallery from '../SidebarGallery';
import HeaderComponent from '../Header';
import Footer from '../Footer';

const GalleryWrapper = styled.div`
  width: 90%;
  margin: 8rem auto 2rem;
`;

const Gallery = styled.div`
  display: flex;
  gap: 3rem;
  height: 100%;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 20rem;
`;

const GalleryLayout = () => {
  return (
    <>
      <HeaderComponent transparent={false} />
      <GalleryWrapper>
        <Gallery>
          <SidebarGallery />
          <ContentWrapper>
            <Outlet />
          </ContentWrapper>
        </Gallery>
      </GalleryWrapper>
      <Footer />
    </>
  );
};

export default GalleryLayout;
