import React from 'react';
import styled from 'styled-components';
import SkeletonElement from './Skeleton';

const SkeletonWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const GallerySkeleton = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem 3%;

  width: 1030px;
  margin-top: 20px;

  @media screen and (min-width: 1600px) {
    width: 1200px;
  }
`;

const SkeletonGallery = () => {
  return (
    <SkeletonWrapper>
      <GallerySkeleton>
        <SkeletonElement type="item" />
        <SkeletonElement type="item" />
        <SkeletonElement type="item" />
        <SkeletonElement type="item" />
        <SkeletonElement type="item" />
        <SkeletonElement type="item" />
        <SkeletonElement type="item" />
        <SkeletonElement type="item" />
      </GallerySkeleton>
    </SkeletonWrapper>
  );
};

export default SkeletonGallery;
