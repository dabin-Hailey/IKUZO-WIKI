import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import SidebarGallery from '../SidebarGallery';
import HeaderComponent from '../Header';
import Footer from '../Footer';
import GalleryListing from '../../gallery';

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
          <Outlet />
        </ContentWrapper>
      </GalleryWrapper>
      <Footer />
    </>
  );
};

export default GalleryLayout;
