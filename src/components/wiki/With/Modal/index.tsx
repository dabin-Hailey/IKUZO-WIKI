import React, { useState } from 'react';
import styled from 'styled-components';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../../../utils/firebase.config';

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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const ModalInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ModalTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
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
        <label htmlFor="location">
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
        </label>

        <label htmlFor="title">
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
        </label>

        <label htmlFor="content">
          내용:
          <ModalTextarea
            id="content"
            value={contents}
            onChange={e => {
              setContents(e.target.value);
              onContentsChange(e);
            }}
          />
        </label>

        <label htmlFor="recruitmentTime">
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
        </label>

        <label htmlFor="maxPeople">
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
        </label>

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
