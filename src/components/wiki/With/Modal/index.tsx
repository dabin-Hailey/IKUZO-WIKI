import React, { useState } from 'react';
import styled from 'styled-components';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../../../utils/firebase.config';
import WikiModal from '../../../../assets/wiki-modal.png';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLocationChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onContentsChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onRecruitmentTimeChange: (
    event: React.ChangeEvent<HTMLButtonElement>,
  ) => void;
  onMaxPeopleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  position: relative;
  top: 0;
  left: 0;
  z-index: 3;

  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  width: 60rem;
  height: 80%;

  border-radius: 2rem;
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const ModalInput = styled.input`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ModalTextarea = styled.textarea`
  width: 100%;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ModalImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 30%;

  background-image: url(${WikiModal});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const StringLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;
`;

const ButtonLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1rem;
`;

const setData = async (collectionName: string, props: any): Promise<void> => {
  const date = new Date();
  const dataId = `${collectionName}-${date.getTime()}`;

  await setDoc(doc(db, collectionName, dataId), props);
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onLocationChange,
  onTitleChange,
  onContentsChange,
  onRecruitmentTimeChange,
  onMaxPeopleChange,
}) => {
  if (!isOpen) return null;

  const [location, setLocation] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [recruitmentTime, setRecruitmentTime] = useState(0);
  const [maxPeople, setMaxPeople] = useState(0);

  const handleRegister = async () => {
    try {
      await setData('with-collection', {
        contents,
        joined: 1,
        location,
        people: maxPeople,
        time: Math.floor(Date.now() / 1000) + recruitmentTime * 60,
        title,
      });

      onClose();
    } catch (error) {
      console.error('Firestore 데이터 추가 중 오류 발생:', error);
    }
  };

  const modalClose = () => {
    onClose();
  };

  return (
    <ModalWrapper>
      <ModalContent>
        <ModalImageContainer />
        <StringLabel htmlFor="title">
          제목:
          <ModalInput
            type="text"
            id="title"
            value={title}
            onChange={e => {
              setTitle(e.target.value);
              onTitleChange(e);
            }}
          />
        </StringLabel>

        <StringLabel htmlFor="content">
          내용:
          <ModalTextarea
            id="content"
            value={contents}
            onChange={e => {
              setContents(e.target.value);
              onContentsChange(e);
            }}
          />
        </StringLabel>

        <StringLabel htmlFor="location">
          위치:
          <ModalInput
            type="text"
            id="location"
            value={location}
            onChange={e => {
              setLocation(e.target.value);
              onLocationChange(e);
            }}
          />
        </StringLabel>

        <ButtonLabel htmlFor="recruitmentTime">
          모집 시간:
          <button
            type="button"
            onClick={() => {
              setRecruitmentTime(10);
            }}
          >
            10
          </button>
          <button
            type="button"
            onClick={() => {
              setRecruitmentTime(20);
            }}
          >
            20
          </button>
          <button
            type="button"
            onClick={() => {
              setRecruitmentTime(30);
            }}
          >
            30
          </button>
        </ButtonLabel>

        <StringLabel htmlFor="maxPeople">
          최대 인원:
          <ModalInput
            type="number"
            id="maxPeople"
            value={maxPeople}
            onChange={e => {
              setMaxPeople(Number(e.target.value));
              onMaxPeopleChange(e);
            }}
          />
        </StringLabel>

        <button
          type="button"
          onClick={handleRegister}
        >
          등록
        </button>

        <button
          type="button"
          onClick={modalClose}
        >
          닫기
        </button>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
