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
  updateModalID: string | null;
  openUpdateModal: (id: string) => void;
  closeUpdateModal: () => void;
  deleteModalID: string | null;
  openDeleteModal: (id: string) => void;
  closeDeleteModal: () => void;
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
  updateModalID,
  openUpdateModal,
  closeUpdateModal,
  deleteModalID,
  openDeleteModal,
  closeDeleteModal,
}) => {
  return (
    <ButtonWrapper>
      <Button
        onClick={() => {
          return openUpdateModal(id);
        }}
      >
        <img
          src={UpdateIconSvg}
          alt="UpdateIcon"
        />
        변경
      </Button>
      {updateModalID === id && (
        <UpdateModal
          id={id}
          restaurant={restaurant}
          location={location}
          photo={photo}
          category={category}
          closeUpdateModal={closeUpdateModal}
        />
      )}
      <Button
        onClick={() => {
          return openDeleteModal(id);
        }}
      >
        <img
          src={DeleteIconSvg}
          alt="DeleteIcon"
        />
        삭제
      </Button>
      {deleteModalID === id && (
        <DeleteModal
          id={id}
          category={category}
          handleDelete={handleDelete}
          closeDeleteModal={closeDeleteModal}
        />
      )}
    </ButtonWrapper>
  );
};

export default GalleryButton;
