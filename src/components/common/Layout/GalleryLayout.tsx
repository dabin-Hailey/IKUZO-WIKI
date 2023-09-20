import React from 'react';
import styled from 'styled-components';
import SidebarGallery from '../SidebarGallery';
import HeaderComponent from '../Header';
import Footer from '../Footer';
import ProtectedRoute from '../../../utils/ProtectedRoute';

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
  width: calc(100vw - 20rem);
`;

const GalleryLayout = () => {
  return (
    <>
      <HeaderComponent transparent={false} />
      <GalleryWrapper>
        <Gallery>
          <SidebarGallery />
          <ContentWrapper>
            <ProtectedRoute />
          </ContentWrapper>
        </Gallery>
      </GalleryWrapper>
      <Footer />
    </>
  );
};

export default GalleryLayout;
