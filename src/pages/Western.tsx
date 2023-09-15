import React from 'react';
import GalleryListing from '../components/gallery/GalleryListing';

// type
export interface Root {
  id: string;
}

const Western = (): JSX.Element => {
  return <GalleryListing />;
};

export default Western;
