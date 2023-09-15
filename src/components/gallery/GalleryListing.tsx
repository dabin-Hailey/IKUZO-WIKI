import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getDataByField } from '../../utils/util';
import GalleryItems from './GalleryItems';

// type
export interface Root {
  id: string;
}

export type Props = {
  list: Root[];
};

export interface OwnProps {
  id: string;
  restaurant: string;
  location: string;
  photo: string;
  category: string;
}

// styled-components
const GalleryListWrapper = styled.div`
  width: auto;
`;

const GalleryList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem 3%;
`;

// Component
const GalleryListing = (): JSX.Element => {
  const array = window.location.pathname.split('/');
  const route = array[array.length - 1];
  const category = route === 'gallery' ? 'korean' : route;
  // console.log(category);

  const [list, setList] = useState<Root[]>([]);

  const fetchData = async (category: string) => {
    const data = await getDataByField(
      `data-collection/best-restaurant-collection/${category}-food`,
      'category',
      category,
    );
    setList(data);
  };

  useEffect(() => {
    fetchData(category);
  }, []);

  return (
    <GalleryListWrapper>
      <GalleryList>
        {list &&
          list.map((item: Root) => {
            const { id } = item;
            const { restaurant, location, photo } = item as OwnProps;
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
