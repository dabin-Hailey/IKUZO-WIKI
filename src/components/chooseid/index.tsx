import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { findAccesKey } from '../../hooks/getStorageAuthData';
import ChooseEmailButton from './ChooseEmailButton';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 100vh;

  background-color: var(--color-primary);
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 80%;
  padding: 30%;
  background-color: var(--color-white);
  gap: 2rem;
`;

const viewId = () => {
  const ids = [];
  const keys = findAccesKey();
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    const value = localStorage.getItem(key);
    ids.push(value);
  }
  return ids;
};

const index = () => {
  const ids = viewId();

  return (
    <PageContainer>
      <PageWrapper>
        {ids &&
          ids.map((id: string | null) => {
            const data = id as string;
            return (
              <div key={data}>
                <ChooseEmailButton data={data} />
              </div>
            );
          })}
        <NavLink to="/login">다른 아이디로 접속하기</NavLink>
      </PageWrapper>
    </PageContainer>
  );
};

export default index;
