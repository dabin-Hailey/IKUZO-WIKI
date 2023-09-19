import React, { useState } from 'react';
import styled from 'styled-components';
import WithItem from './WIthItem';
import Modal from './Modal';

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

  width: 80%;

  gap: 1rem;
`;

const Title = styled.h1`
  display: flex;
  justify-content: space-between;

  width: 90%;

  font-size: 4rem;
  font-weight: 700;
  line-height: 7rem;
  border-bottom: 0.2rem solid #ffa800;

  .non__highlight {
    color: black;
  }
`;

const Highlight = styled.em`
  color: #ffa800;
`;

const EnrollButton = styled.button`
  font-size: 2rem;
  font-weight: 700;
  color: white;

  margin: auto 0;
  padding: 1rem 2rem;
  white-space: nowrap;
  border-radius: 1rem;
  border: none;
  background-color: #ffa800;
  cursor: pointer;

  &:hover {
    background-color: #ff9b00;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90%;

  gap: 2rem;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

const index: React.FC<Props> = ({ data }): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [modalData, setModalData] = useState({
    restaurantLocation: '',
    title: '',
    contents: '',
    recruitmentTime: '',
    maxPeople: 0,
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setModalData({
      ...modalData,
      restaurantLocation: event.target.value,
    });
  };

  const handleInputTextChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setModalData({
      ...modalData,
      title: event.target.value,
    });
  };

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setModalData({
      ...modalData,
      contents: event.target.value,
    });
  };

  const handleRecruitmentTimeChange = (
    event: React.ChangeEvent<HTMLButtonElement>,
  ) => {
    setModalData({
      ...modalData,
      recruitmentTime: event.target.value,
    });
  };

  const handleMaxPeopleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setModalData({
      ...modalData,
      maxPeople: parseInt(event.target.value, 10),
    });
  };

  return (
    <Container>
      <Title>
        <Highlight>
          같이 먹을사람 <em className="non__highlight">구해요</em>
        </Highlight>
        <EnrollButton
          type="button"
          onClick={() => {
            openModal();
          }}
        >
          Open Modal
        </EnrollButton>{' '}
      </Title>
      <ItemContainer>
        {data &&
          data.map((item: Root) => {
            const { id } = item;
            const { title, joined, contents, location, people, time } =
              item as WithProp;
            return (
              <ItemWrapper key={id}>
                <WithItem
                  id={id}
                  title={title}
                  contents={contents}
                  location={location}
                  people={people}
                  time={time}
                  joined={joined}
                />
              </ItemWrapper>
            );
          })}
      </ItemContainer>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onLocationChange={handleLocationChange}
        onTitleChange={handleInputTextChange}
        onContentsChange={handleTextareaChange}
        onRecruitmentTimeChange={handleRecruitmentTimeChange}
        onMaxPeopleChange={handleMaxPeopleChange}
      />
    </Container>
  );
};

export default index;
