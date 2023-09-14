import React from 'react';
import styled from 'styled-components';
import WithItem from './WIthItem';

export interface Root {
  id: string;
}

export type Props = {
  data: Root[];
};

export interface WithProp {
  title: string;
  id: string;
  contents: string;
  location: string;
  people: number;
  time: number;
  joined: number;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 200%;

  gap: 1rem;

  background-color: #ddeef8;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #000;
`;

const Highlight = styled.em`
  color: #ffa800;
`;

const index: React.FC<Props> = ({ data }): JSX.Element => {
  return (
    <Container>
      <Title>
        <Highlight>같이 먹을사람</Highlight> 구해요
      </Title>
      {data &&
        data.map((item: Root) => {
          const { id } = item;
          const { title, joined, contents, location, people, time } =
            item as WithProp;
          return (
            <WithItem
              key={id}
              id={id}
              title={title}
              contents={contents}
              location={location}
              people={people}
              time={time}
              joined={joined}
            />
          );
        })}
    </Container>
  );
};

export default index;
