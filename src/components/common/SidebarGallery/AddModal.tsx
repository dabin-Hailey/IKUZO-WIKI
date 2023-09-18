import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import addImg from '../../../assets/add-image.png';
import closeIcon from '../../../assets/close-icon.png';
import { addImage, setGalleryData } from '../../../utils/util';

interface Props {
  src: string;
}

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalWindow = styled.div`
  width: 330px;
  height: 550px;
  background-color: var(--color-white);

  display: flex;
  flex-direction: column;

  border-radius: 20px;
  overflow: hidden;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CloseIcon = styled.img`
  width: 15px;
  height: 15px;

  position: absolute;
  top: 13px;
  right: 13px;
  cursor: pointer;
`;

const ImageLabel = styled.label<Props>`
  display: block;
  width: 100%;
  height: 160px;

  background: url(${props => {
      return props.src || addImg;
    }})
    center/cover;
  cursor: pointer;
`;

const InputFile = styled.input`
  display: none;
`;

const FormContainer = styled.form`
  width: 250px;
  height: 330px;
  margin: 40px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const InputContainer = styled.div`
  width: 240px;
`;

const InputTitle = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const SortContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
`;

const InputField = styled.input`
  width: 240px;
  height: 27px;

  outline: none;
  border: 1px solid #c1c1c1;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  width: 200px;
  height: 45px;
  margin-top: 40px;
  background-color: var(--color-primary);

  border: none;
  border-radius: 30px;
  box-shadow: 0 2px 4px #9c9c9c;

  outline: none;
  cursor: pointer;
`;

const AddModal = ({ onChange }: { onChange: () => void }) => {
  const [imgPath, setImgPath] = useState('');
  const [imgFile, setImgFile] = useState<File>();
  const imgRef = useRef<HTMLInputElement>(null);

  const previewImage = () => {
    if (imgRef.current && imgRef.current.files) {
      const file = imgRef.current.files[0];
      setImgFile(file);

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImgPath(reader.result as string);
      };
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    if (imgFile) {
      const imageURL = await addImage(imgFile as File);

      await setGalleryData(`${form.category.value}`, {
        category: form.category.value,
        location: form.location.value,
        photo: imageURL,
        restaurant: form.restaurant.value,
      });
      window.location.replace('/gallery');
    }
  };

  return (
    <ModalBackground onClick={onChange}>
      <ModalWindow
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <CloseIcon
          src={closeIcon}
          onClick={onChange}
        />
        <ImageLabel src={imgPath}>
          <InputFile
            type="file"
            accept=".png, .jpeg .jpg"
            onChange={previewImage}
            ref={imgRef}
          />
        </ImageLabel>
        <FormContainer onSubmit={handleSubmit}>
          <InputContainer>
            <InputTitle>맛집 종류</InputTitle>
            <SortContainer>
              <label htmlFor="korean">
                <input
                  type="radio"
                  id="korean"
                  name="category"
                  value="korean"
                />
                한식
              </label>
              <label htmlFor="chinese">
                <input
                  type="radio"
                  id="chinese"
                  name="category"
                  value="chinese"
                />
                중식
              </label>
              <label htmlFor="japanese">
                <input
                  type="radio"
                  id="japanese"
                  name="category"
                  value="japanese"
                />
                일식
              </label>
              <label htmlFor="western">
                <input
                  type="radio"
                  id="western"
                  name="category"
                  value="western"
                />
                양식
              </label>
            </SortContainer>
          </InputContainer>
          <InputContainer>
            <InputTitle>맛집 이름</InputTitle>
            <InputField name="restaurant" />
          </InputContainer>
          <InputContainer>
            <InputTitle>맛집 위치</InputTitle>
            <InputField name="location" />
          </InputContainer>
          <SubmitButton type="submit">맛집 등록</SubmitButton>
        </FormContainer>
      </ModalWindow>
    </ModalBackground>
  );
};

export default AddModal;
