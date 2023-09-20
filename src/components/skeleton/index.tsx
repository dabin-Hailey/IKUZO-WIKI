import React from 'react';
import styled from 'styled-components';

// styled-components
const Skeleton = styled.div`
  background-color: #e7e7e7;
  border-radius: 4px;

  &.title {
    width: 50%;
    height: 50px;
  }

  &.button {
    width: 5rem;
    height: 2.5rem;
    border-radius: 30px;
  }

  &.viewer {
    width: 790px;
    height: 60vh;
    margin-top: 50px;
    padding: 20px 30px 40px;
    border-radius: 15px;
  }
`;

const SkeletonElement = ({ type }: { type: string }) => {
  const classes = `skeleton ${type}`;

  return <Skeleton className={classes} />;
};

export default SkeletonElement;
