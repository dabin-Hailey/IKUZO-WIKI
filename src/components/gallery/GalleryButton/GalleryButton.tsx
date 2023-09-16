import React, { useState, SetStateAction } from 'react';
import styled from 'styled-components';
import DeleteModal from '../Modal/DeleteModal';
import ReplaceIconSvg from '../../../assets/galleryReplaceIcon.svg';
import DeleteIconSvg from '../../../assets/galleryDeleteIcon.svg';

// type
export interface Root {
  id: string;
}

export interface OwnProps {
  id: string;
  category: string;
  handleDelete: (id: string, category: string) => void;
}

const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.3rem;

  position: absolute;
  top: 0;
  right: 0;

  margin: 0.5rem;
`;

const Button = styled.button`
  vertical-align: middle;

  font-size: 0.5rem;
  font-weight: 700;
  border: none;
  border-radius: 1rem;
  outline: none;
  background-color: var(--color-primary);
  cursor: pointer;
  padding: 0.2rem 0.5rem;
`;

const GalleryButton: React.FC<OwnProps> = ({ id, category, handleDelete }) => {
  const [modal, setModal] = useState<boolean>(false);

  const handleModal = () => {
    setModal(!modal);
  };
  // const handleReplace = async () => {
  //   // await
  //   // 모달 나오면 생성하기
  // };

  return (
    <ButtonWrapper>
      <Button>
        <img
          src={ReplaceIconSvg}
          alt="ReplaceIcon"
        />
        변경
      </Button>
      <Button
        onClick={() => {
          handleModal();
        }}
      >
        <img
          src={DeleteIconSvg}
          alt="DeleteIcon"
        />
        삭제
      </Button>
      {modal && (
        <DeleteModal
          modal={modal}
          setModal={setModal}
          id={id}
          category={category}
          handleDelete={handleDelete}
        />
      )}
    </ButtonWrapper>
  );
};

export default GalleryButton;
