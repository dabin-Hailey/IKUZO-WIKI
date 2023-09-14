import React from 'react';
import styled from 'styled-components';
import Header from '../components/common/Header';
import SidebarGallery from '../components/common/SidebarGallery';
import GalleryListing from '../components/gallery/GalleryListing';

const ContentWrapper = styled.div`
  display: flex;
`;

const Gallery = () => {
  return (
    <>
      <Header />
      <ContentWrapper>
        <SidebarGallery />
        <GalleryListing />
      </ContentWrapper>
    </>
  );
};

export default Gallery;
