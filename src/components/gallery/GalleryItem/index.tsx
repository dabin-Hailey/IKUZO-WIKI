import React, { SetStateAction } from 'react';
import styled from 'styled-components';
import GalleryButton from '../GalleryButton/GalleryButton';

// type
export interface Root {
  id: string;
}

export interface OwnProps {
  id: string;
  restaurant: string;
  location: string;
  photo: string;
  category: string;
  handleDelete: (id: string, category: string) => void;
}

// styled-components
const Item = styled.div`
  width: 15rem;
  height: 15rem;
`;

const ItemImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  transition: all 0.3s;
`;

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
  visibility: hidden;
`;

const ItemWrapper = styled.div`
  --length: 15rem;
  width: var(--length);
  height: var(--length);

  position: relative;

  border-radius: 1rem;
  box-shadow: 2px 3px 5px 0 gray;
  box-sizing: border-box;
  /* margin: 1rem; */
  overflow: hidden;

  &:hover ${ItemHover} {
    visibility: visible;
  }

  &:hover ${ItemImage} {
    transform: scale(1.1);
  }
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
const GalleryItems: React.FC<OwnProps> = ({
  id,
  restaurant,
  location,
  photo,
  category,
  handleDelete,
}) => {
  return (
    <ItemWrapper>
      <Item>
        <ItemImage src={photo} />
      </Item>
      <ItemHover>
        <GalleryButton
          id={id}
          category={category}
          handleDelete={handleDelete}
        />
        <ContentWrapper>
          <Title>{restaurant}</Title>
          <Content>{location}</Content>
        </ContentWrapper>
      </ItemHover>
    </ItemWrapper>
  );
};

export default GalleryItems;
