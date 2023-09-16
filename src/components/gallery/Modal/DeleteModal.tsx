import React, { useRef } from 'react';
import styled from 'styled-components';

// type
export interface Root {
  id: string;
}

export interface OwnProps {
  id: string;
  category: string;
  handleDelete: (id: string, category: string) => void;
  handleDeleteModal: () => void;
}

// styled components
const ModalBackground = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalWindow = styled.div`
  width: 400px;
  height: 250px;
  background-color: var(--color-beige);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  border-radius: 20px;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.h1`
  width: 80%;
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
`;

const Content = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Button = styled.button`
  width: 100px;
  padding: auto 0.8rem;
  background-color: var(--color-primary);
  font-size: 1.3rem;
  color: var(--color-black);
  border: 2px solid var(--color-primary);
  border-radius: 20px;
  box-sizing: border-box;
  transition: all 0.2s linear;

  &:hover {
    background-color: var(--color-white);
    color: var(--color-black);
    cursor: pointer;
  }
`;

const DeleteModal: React.FC<OwnProps> = ({
  id,
  category,
  handleDelete,
  handleDeleteModal,
}) => {
  const outside = useRef<HTMLDivElement>(null);

  return (
    <ModalBackground
      ref={outside}
      onClick={e => {
        if (e.target === outside.current) handleDeleteModal();
      }}
    >
      <ModalWindow>
        <Title>정말 삭제하시겠습니까?</Title>
        <Content>
          <Button
            onClick={() => {
              handleDeleteModal();
            }}
          >
            취소
          </Button>
          <Button
            onClick={() => {
              handleDelete(id, category);
            }}
          >
            삭제
          </Button>
        </Content>
      </ModalWindow>
    </ModalBackground>
  );
};

export default DeleteModal;
