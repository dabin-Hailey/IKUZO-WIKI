import React from 'react';
import styled from 'styled-components';
import GalleryItems from './GalleryItems';

// styled-components

const GalleryListingContent = styled.div`
  display: flex;
  gap: 1rem;
`;

// Component

const GalleryListing = () => {
  return (
    <GalleryListingContent>
      {/* 아이템은 나중에 map해서 출력하기 */}
      <GalleryItems />
      <GalleryItems />
      <GalleryItems />
    </GalleryListingContent>
  );
};

export default GalleryListing;
