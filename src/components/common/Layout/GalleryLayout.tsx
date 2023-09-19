import React from 'react';
import styled from 'styled-components';
import SidebarGallery from '../SidebarGallery';
import HeaderComponent from '../Header';
import Footer from '../Footer';
import ProtectedRoute from '../../../utils/ProtectedRoute';

const GalleryWrapper = styled.div`
  display: flex;
`;

const ContentWrapper = styled.div`
  margin-left: 23rem;
  margin-top: 7rem;
`;

const GalleryLayout = () => {
  return (
    <>
      <HeaderComponent transparent={false} />
      <GalleryWrapper>
        <SidebarGallery />
        <ContentWrapper>
          <ProtectedRoute />
        </ContentWrapper>
      </GalleryWrapper>
      <Footer />
    </>
  );
};

export default GalleryLayout;
