import React from 'react';
import GalleryListing from '../components/gallery/GalleryListing';

export interface Root {
  id: string;
}

const Japanese = (): JSX.Element => {
  return <GalleryListing />;
};

export default Japanese;
