import React from 'react';
import styled from 'styled-components';
import SkeletonElement from './Skeleton';

const MarkdownSkeleton = styled.div`
  width: 1030px;
  max-width: 1500px;
  height: 79vh;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1600px) {
    width: 1200px;
  }

  .HeaderWrapper {
    height: 70px;
    padding-top: 10px;

    display: flex;
    justify-content: space-between;
  }
`;

const SkeletonMarkdown = () => {
  return (
    <MarkdownSkeleton>
      <div className="HeaderWrapper">
        <SkeletonElement type="title" />
        <SkeletonElement type="button" />
      </div>
      <SkeletonElement type="viewer" />
    </MarkdownSkeleton>
  );
};

export default SkeletonMarkdown;
