import React, { useState } from 'react';
import styled from 'styled-components';
import { db, storage } from '../../utils/firebase.config';
import { getData, getDataByField } from '../../utils/util';
import ReplaceIconSvg from '../../assets/galleryReplaceIcon.svg';
import DeleteIconSvg from '../../assets/galleryDeleteIcon.svg';

// styled-components

// image div
const Item = styled.div`
  width: 15rem;
  height: 15rem;
`;

// img
const ItemImage = styled.img`
  width: 100%;
  height: 100%;

  content: url('https://www.hotelrestaurant.co.kr/data/photos/20180205/art_15175330519518_43b250.bmp');
  object-fit: cover;

  transition: all 0.3s;
`;

// text div
const ItemHover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;

  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.5);
  /* visibility: hidden; */
`;

// container
const ItemWrapper = styled.div`
  --length: 15rem;
  width: var(--length);
  height: var(--length);

  position: relative;

  border-radius: 1rem;
  box-shadow: 2px 3px 5px 0 gray;
  box-sizing: border-box;
  margin: 3rem;
  overflow: hidden;

  &:hover ${ItemHover} {
    visibility: visible;
  }

  &:hover ${ItemImage} {
    transform: scale(1.1);
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.3rem;

  position: absolute;
  top: 0;
  right: 0;

  margin: 0.5rem;
`;

const Button = styled.button`
  vertical-align: middle;

  font-size: 0.5rem;
  font-weight: 700;
  border: none;
  border-radius: 1rem;
  outline: none;
  background-color: var(--color-primary);
  cursor: pointer;
  padding: 0.2rem 0.5rem;
`;

const ContentWrapper = styled.div`
  width: 100%;

  position: absolute;
  bottom: 0;
  left: 0;

  margin: 1rem;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  color: var(--color-white);
  margin-bottom: 0.8rem;
`;

const Content = styled.p`
  font-size: 0.9rem;
  color: #d0d0d0;
  margin-bottom: 0.5rem;
`;

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

  return (
    <ItemWrapper>
      <Item>
        <ItemImage />
      </Item>
      <ItemHover>
        <ButtonWrapper>
          <Button>
            {/* 나중에 react-icons 설치하고 공유 */}
            {/* <MdPublishedWithChanges /> */}
            <img
              src={ReplaceIconSvg}
              alt="ReplaceIcon"
            />
            변경
          </Button>
          <Button>
            {/* <TiDeleteOutline /> */}
            {/* <RiDeleteBin2Line /> */}
            <img
              src={DeleteIconSvg}
              alt="ReplaceIcon"
            />
            삭제
          </Button>
        </ButtonWrapper>
        <ContentWrapper>
          <Title>{restaurant.restaurant}</Title>
          <Content>{restaurant.location}</Content>
        </ContentWrapper>
      </ItemHover>
    </ItemWrapper>
  );
};

export default GalleryItems;
