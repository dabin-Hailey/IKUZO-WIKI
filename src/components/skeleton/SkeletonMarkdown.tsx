import React from 'react';
import styled from 'styled-components';
import SkeletonElement from './index';

const SkeletonWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const MarkdownSkeleton = styled.div`
  width: 850px;
  height: 79vh;
  display: flex;
  flex-direction: column;

  .HeaderWrapper {
    display: flex;
    justify-content: space-between;
  }
`;

const SkeletonMarkdown = () => {
  return (
    <SkeletonWrapper>
      <MarkdownSkeleton>
        <div className="HeaderWrapper">
          <SkeletonElement type="title" />
          <SkeletonElement type="button" />
        </div>
        <SkeletonElement type="viewer" />
      </MarkdownSkeleton>
    </SkeletonWrapper>
  );
};

export default SkeletonMarkdown;
