import React from 'react';
import styled from 'styled-components';

export interface WithProps {
  title: string;
  contents: string;
  location: string;
  people: number;
  time: number;
}

const WithContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 70%;
  height: 10rem;

  gap: 1rem;

  margin: 0 auto;
  background-color: #fffef2;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const WithTitle = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 3rem;
`;

const WithTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 3rem;

  padding: 0 1rem;
  box-sizing: border-box;
  border-bottom: 1px solid #000;
`;

const WithItem = ({ title, contents, location, people, time }: WithProps) => {
  const currentTime = Math.floor(Date.now() / 1000);
  const lastTime = Math.floor(time / 1000);
  const leftTime = Math.floor((currentTime - lastTime) / 3600);

  return (
    <WithContainer>
      <WithTop>
        <WithTitle>{title}</WithTitle>
        <div>{leftTime}시간 전</div>
      </WithTop>
      <p>내용 : {contents}</p>
      <p>위치 : {location}</p>
    </WithContainer>
  );
};

export default WithItem;
