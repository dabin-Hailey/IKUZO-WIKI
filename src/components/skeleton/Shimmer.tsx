import React from 'react';
import styled from 'styled-components';

const Shimmer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: loading 2.5s infinite;

  &.shimmer {
    width: 50%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    transform: skewX(-20deg);
  }

  @keyframes loading {
    0% {
      transform: translateX(-150%);
    }
    50% {
      transform: translateX(-60%);
    }
    100% {
      transform: translateX(150%);
    }
  }
`;

const ShimmerElement = () => {
  return <Shimmer className="shimmer" />;
};

export default ShimmerElement;
