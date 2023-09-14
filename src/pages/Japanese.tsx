import React, { useState, useEffect } from 'react';
import { getDataByField } from '../utils/util';
import GalleryListing from '../components/gallery/GalleryListing';

export interface Root {
  id: string;
}

const Japanese = (): JSX.Element => {
  const [restaurantList, setRestaurantList] = useState<Root[]>([]);

  useEffect(() => {
    const fetchData = async (category: string) => {
      const data = await getDataByField(
        'data-collection/best-restaurant-collection/japanese-food',
        'category',
        category,
      );

      if (data) {
        setRestaurantList(data);
      }
    };

    fetchData('일식');
  }, []);

  return <GalleryListing restaurantList={restaurantList} />;
};

export default Japanese;
