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
        <Highlight>같이 먹을사람</Highlight> 구해요
        <button
          type="button"
          onClick={() => {
            openModal();
          }}
        >
          Open Modal
        </button>{' '}
      </Title>
      <div style={{ width: '100%' }}>
        {data &&
          data.map((item: Root) => {
            const { id } = item;
            const { title, joined, contents, location, people, time } =
              item as WithProp;
            return (
              <div key={id}>
                <WithItem
                  id={id}
                  title={title}
                  contents={contents}
                  location={location}
                  people={people}
                  time={time}
                  joined={joined}
                />
              </div>
            );
          })}
      </div>
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
