import React, { useState } from 'react';
import styled from 'styled-components';
import WithButton from '../WithButton';
import WithTime from '../WithTime';

export interface WithProps {
  title: string;
  contents: string;
  location: string;
  people: number;
  time: number;
  joined: number;
  id: string;
}

const WithContainer = styled.div<{ $nowOnView: boolean }>`
  display: ${({ $nowOnView }) => {
    return $nowOnView ? 'flex' : 'none';
  }};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 70%;
  height: 10rem;

  gap: 1rem;

  margin: 0 auto;
  background-color: #fffef2;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const WithWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 80%;
`;

const WithTitle = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 3rem;

  font-size: 1.5rem;
  font-weight: 700;
`;

const WithTop = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 3rem;

  box-sizing: border-box;
`;

const WithLocation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  with: 30%;

  padding: 0.5rem 1rem;
  color: #000;
  background-color: #ffd337;
  border-radius: 0.5rem;
`;

const WithBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WithBottomLeft = styled.div`
  display: flex;
  flex-direction: column;

  width: 70%;
  height: 100%;

  box-sizing: border-box;
`;

const WithItem = ({
  id,
  title,
  joined,
  contents,
  location,
  people,
  time,
}: WithProps) => {
  const [nowOnView, setNowOnView] = useState(true);

  const unLoadItem = () => {
    setNowOnView(!nowOnView);
  };

  return (
    <WithContainer $nowOnView={nowOnView}>
      <WithWrapper>
        <WithTop>
          <WithLocation>{location}</WithLocation>
          <WithTime
            time={time}
            unLoadItem={unLoadItem}
          />
        </WithTop>
        <WithBottom>
          <WithBottomLeft>
            <WithTitle>{title}</WithTitle>
            <p>{contents}</p>
          </WithBottomLeft>
          <WithButton
            id={id}
            joined={joined}
            people={people}
          />
        </WithBottom>
      </WithWrapper>
    </WithContainer>
  );
};

export default WithItem;
