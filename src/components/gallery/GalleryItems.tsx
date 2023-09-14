import React, { useState } from 'react';
import styled from 'styled-components';
import { db, storage } from '../../utils/firebase.config';
import { getData, getDataByField } from '../../utils/util';

// Component

const GalleryItems: React.FC = () => {
  type Restaurant = {
    restaurant: string;
    location: string;
    category: string;
    photo: string;
  };

  // const data = getDataByField('data-collection', 'fieldName', 'fieldValue');

  const data: Restaurant = {
    restaurant: '김치골',
    location: '경기도 수원',
    category: '한식',
    photo:
      'https://www.hotelrestaurant.co.kr/data/photos/20180205/art_15175330519518_43b250.bmp',
  };

  const [restaurant, setRestaurant] = useState(data);

  // styled-components
  const ItemWrapper = styled.div`
    border: 1px solid black;
    border-radius: 1rem;
    width: 18rem;
    height: 18rem;
    padding: 1rem;
    box-sizing: border-box;
    background-image: url({restaurant.photo});
  `;

  const ItemWrapperHover = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
  `;

  const ButtonWrapper = styled.div`
    display: flex;
    gap: 0.3rem;
    position: absolute;
    top: 0;
    right: 0;
  `;

  const Button = styled.button`
    border: none;
    border-radius: 1rem;
    outline: none;
    background-color: var(--color-primary);
    cursor: pointer;
    padding: 0.2rem 0.5rem;
    font-size: 0.5rem;
  `;

  const ContentWrapper = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  `;

  const Title = styled.h1`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  `;

  const Content = styled.p`
    font-size: 1rem;
  `;

  return (
    <ItemWrapper>
      <ItemWrapperHover>
        <ButtonWrapper>
          <Button>
            {/* 나중에 react-icons 설치하고 공유 */}
            {/* <MdPublishedWithChanges /> */}
            변경
          </Button>
          <Button>
            {/* <TiDeleteOutline /> */}
            {/* <RiDeleteBin2Line /> */}
            삭제
          </Button>
        </ButtonWrapper>
        <ContentWrapper>
          <Title>{restaurant.restaurant}</Title>
          <Content>{restaurant.location}</Content>
        </ContentWrapper>
      </ItemWrapperHover>
    </ItemWrapper>
  );
};

export default GalleryItems;
