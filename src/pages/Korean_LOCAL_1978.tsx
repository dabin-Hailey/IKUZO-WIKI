import React from 'react';
import Header from '../components/common/Header';
import GalleryListing from '../components/gallery';

const Korean = (): JSX.Element => {
  return (
    <>
      <Header transparent={false} />
      <GalleryListing />
    </>
  );
};

export default Korean;
