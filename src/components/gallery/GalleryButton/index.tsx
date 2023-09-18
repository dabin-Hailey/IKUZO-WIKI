import React from 'react';
import styled from 'styled-components';
import DeleteModal from '../Modal/DeleteModal';
import UpdateModal from '../Modal/UpdateModal';
import UpdateIconSvg from '../../../assets/UpdateIcon.svg';
import DeleteIconSvg from '../../../assets/DeleteIcon.svg';

// type
export interface Root {
  id: string;
}

export interface OwnProps {
  id: string;
  restaurant: string;
  location: string;
  photo: string;
  category: string;
  handleDelete: (id: string, category: string) => void;
  deleteModal: boolean;
  handleDeleteModal: () => void;
  updateModal: boolean;
  handleUpdateModal: () => void;
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

const GalleryButton: React.FC<OwnProps> = ({
  id,
  restaurant,
  location,
  photo,
  category,
  handleDelete,
  deleteModal,
  handleDeleteModal,
  updateModal,
  handleUpdateModal,
}) => {
  return (
    <ButtonWrapper>
      <Button
        onClick={() => {
          handleUpdateModal();
        }}
      >
        <img
          src={UpdateIconSvg}
          alt="UpdateIcon"
        />
        변경
      </Button>
      {updateModal && (
        <UpdateModal
          id={id}
          restaurant={restaurant}
          location={location}
          photo={photo}
          category={category}
          handleUpdateModal={handleUpdateModal}
        />
      )}
      <Button
        onClick={() => {
          handleDeleteModal();
        }}
      >
        <img
          src={DeleteIconSvg}
          alt="DeleteIcon"
        />
        삭제
      </Button>
      {deleteModal && (
        <DeleteModal
          id={id}
          category={category}
          handleDelete={handleDelete}
          handleDeleteModal={handleDeleteModal}
        />
      )}
    </ButtonWrapper>
  );
};

export default GalleryButton;
