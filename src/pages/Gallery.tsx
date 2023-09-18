import React from 'react';
import Header from '../components/common/Header';
import SidebarGallery from '../components/common/SidebarGallery';
import Footer from '../components/common/Footer';

const Gallery = (): JSX.Element => {
  return (
    <>
      <Header transparent={false} />
      <SidebarGallery />

      <Footer />
    </>
  );
};

export default Gallery;
