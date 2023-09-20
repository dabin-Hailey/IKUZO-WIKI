import React, { ReactEventHandler } from 'react';

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import getLoginAuth from '../../../hooks/getLoginAuth';

const LoginButtons = styled(NavLink)`
  font-size: 1rem;
  color: var(--color-white);
  background-color: var(--color-primary);
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

const LoginButton = () => {
  const isLogin = getLoginAuth();

  if (isLogin) {
    return <LoginButtons to="/">로그아웃</LoginButtons>;
  }
  return <LoginButtons to="/login">로그인</LoginButtons>;
};

export default LoginButton;
