import React from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { emailState, uidState } from '../../recoil/authRecoil';

const ChooseEmailButtons = styled.a`
  font-size: 1rem;
  color: var(--color-white);
  background-color: var(--color-primary);
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

const getParsedData = (id: string) => {
  const data = localStorage.getItem(id);
  if (!data) return null;
  return JSON.parse(data);
};

type ChooseEmailButtonProps = {
  id: string;
};

const ChooseEmailButton = ({ id }: ChooseEmailButtonProps) => {
  const { enrollEmail, value } = getParsedData(id);
  const setEnrollEmail = useSetRecoilState(emailState);
  const setValue = useSetRecoilState(uidState);
  const navigate = useNavigate();

  const handleLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    setEnrollEmail(enrollEmail);
    setValue(value);
    navigate('/');
  };

  return (
    <ChooseEmailButtons onClick={handleLogin}>
      {enrollEmail}로 접속하기!!
    </ChooseEmailButtons>
  );
};

export default ChooseEmailButton;
