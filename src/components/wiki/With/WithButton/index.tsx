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

  width: 6rem;
  height: 3rem;

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
      return props.disabled ? '#393938' : '#ffda4f';
    }};
  }
`;

const WithButton: React.FC<Props> = ({ id, joined, people }) => {
  const onClick = async () => {
    await updateDataByNumber('with-collection', id, 'joined');
  };

  const isFull = joined === people;

  return (
    <WithBtn
      type="button"
      onClick={onClick}
      disabled={isFull}
    >
      {joined} / {people}
    </WithBtn>
  );
};

export default WithButton;
