import React from 'react';
import styled from 'styled-components';
import GalleryItems from './GalleryItems';

// type
export interface Root {
  id: string;
}

export type Props = {
  restaurantList: Root[];
};

export interface WithProp {
  id: string;
  restaurant: string;
  location: string;
  photo: string;
  category: string;
}

// styled-components
const GalleryListWrapper = styled.div`
  width: auto;

  background-color: #ddeef8;
  margin-left: 20rem;
`;

const GalleryList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 2%;
`;

// Component

const GalleryListing: React.FC<Props> = ({ restaurantList }) => {
  return (
    <GalleryListWrapper>
      <GalleryList>
        {restaurantList &&
          restaurantList.map((item: Root) => {
            const { id } = item;
            const { restaurant, location, photo } = item as WithProp;
            return (
              <GalleryItems
                key={id}
                restaurant={restaurant}
                location={location}
                photo={photo}
              />
            );
          })}
      </GalleryList>
    </GalleryListWrapper>
  );
};

export default GalleryListing;
