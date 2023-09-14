import React, { useState, useEffect } from 'react';
import { getDataByField } from '../utils/util';
import Header from '../components/common/Header';
import SidebarGallery from '../components/common/SidebarGallery';
import GalleryListing from '../components/gallery/GalleryListing';

export interface Root {
  id: string;
}

const Gallery = (): JSX.Element => {
  const [restaurantList, setRestaurantList] = useState<Root[]>([]);

  useEffect(() => {
    const fetchData = async (category: string) => {
      const data = await getDataByField(
        'data-collection/best-restaurant-collection/korean-food',
        'category',
        category,
      );

      if (data) {
        setRestaurantList(data);
      }
    };

    fetchData('한식');
  }, []);

  return (
    <>
      <Header />
      {/* 사이드바와 content 정렬 필요 */}
      <SidebarGallery />
      <GalleryListing restaurantList={restaurantList} />
    </>
  );
};

export default Gallery;
