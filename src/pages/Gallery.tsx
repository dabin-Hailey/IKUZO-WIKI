import React from 'react';
import Header from '../components/common/Header';
import GalleryListing from '../components/gallery/GalleryListing';

const GalleryPage = () => {
  // 파베 storage 함수 만들어서 사용하고 나중에 util로 빼기

  return (
    <>
      <Header />
      <GalleryListing />
    </>
  );
};

export default GalleryPage;
