import React from 'react';
import styled from 'styled-components';

// styled-components
const Skeleton = styled.div`
  &.skeleton {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    background-color: #e7e7e7;
  }

  &.skeleton::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0)
    );
    transform: translateX(-100%);
    animation: skeleton-loader 2s infinite;
  }

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

  &.item {
    width: 15rem;
    height: 15rem;
    border-radius: 1rem;
  }

  @keyframes skeleton-loader {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

const SkeletonElement = ({ type }: { type: string }) => {
  const classes = `skeleton ${type}`;

  return <Skeleton className={classes} />;
};

export default SkeletonElement;
