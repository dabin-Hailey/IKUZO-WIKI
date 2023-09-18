import React from 'react';
import styled from 'styled-components';
import { updateDataByNumber } from '../../../../utils/util';

type Props = {
  id: string;
  joined: number;
  people: number;
};

const WithBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem 1.5rem;

  font-size: 1.5rem;
  background-color: #ffd337;
  border: none;
  border-radius: 3rem;
  cursor: ${props => {
    return props.disabled ? 'not-allowed' : 'pointer';
  }};
  color: ${props => {
    return props.disabled ? '#888' : '#fff';
  }};

  &:hover {
    background-color: ${props => {
      return props.disabled ? '#393939' : '#ffda4f';
    }};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;

  font-size: 1rem;
  font-weight: 700;
`;

const WithButton: React.FC<Props> = ({ id, joined, people }) => {
  const onClick = async () => {
    await updateDataByNumber('with-collection', id, 'joined');
  };

  const isFull = joined === people;

  return (
    <ButtonContainer>
      <em>같이 먹을래요?</em>
      <WithBtn
        type="button"
        onClick={onClick}
        disabled={isFull}
      >
        {joined} / {people}
      </WithBtn>
    </ButtonContainer>
  );
};

export default WithButton;
