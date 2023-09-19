import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getDataByField, deleteData } from '../../utils/util';
import GalleryItems from './GalleryItem/index';

// type
export interface Root {
  id: string;
}

export type Props = {
  list: Root[];
};

type State = {
  category: string;
};

export interface OwnProps {
  id: string;
  restaurant: string;
  location: string;
  photo: string;
  category: string;
  initialValue: string;
}

// styled-components
const GalleryListWrapper = styled.div`
  /* width를 지정하지 않으면 아이템 정렬이 망가져서 일단 px로 고정해놓음 */
  width: calc(100vw - 23rem);
  /* width: 900px; */
`;

const GalleryList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem 3%;
`;

// Component
const GalleryListing = ({ category }: State): JSX.Element => {
  const [list, setList] = useState<Root[]>([]);
  const [updateModalID, setUpdateModalID] = useState<string | null>(null);
  const [deleteModalID, setDeleteModalID] = useState<string | null>(null);

  const openUpdateModal = (id: string) => {
    setUpdateModalID(id);
  };

  const closeUpdateModal = () => {
    setUpdateModalID(null);
  };

  const openDeleteModal = (id: string) => {
    setDeleteModalID(id);
  };

  const closeDeleteModal = () => {
    setDeleteModalID(null);
  };

  // 모달에서 사용할 삭제 버튼
  const handleDelete = async (id: string, category: string) => {
    const newList = list.filter(item => {
      return item.id !== id;
    });
    setList(newList);

    await deleteData(
      `data-collection/best-restaurant-collection/${category}-food`,
      id,
    );
  };

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
            const { restaurant, location, photo, category } = item as OwnProps;
            const initialValue = restaurant;
            return (
              <GalleryItems
                key={id}
                id={id}
                restaurant={restaurant}
                location={location}
                photo={photo}
                category={category}
                handleDelete={handleDelete}
                updateModalID={updateModalID}
                openUpdateModal={openUpdateModal}
                closeUpdateModal={closeUpdateModal}
                deleteModalID={deleteModalID}
                openDeleteModal={openDeleteModal}
                closeDeleteModal={closeDeleteModal}
                initialValue={initialValue}
              />
            );
          })}
      </GalleryList>
    </GalleryListWrapper>
  );
};

export default GalleryListing;
