import React from 'react';
import { useRecoilValue } from 'recoil';
import { isLoginSelector } from '../recoil/authRecoil';
import getLocalData from './getLocalData';

const getLoginAuth = () => {
  const isLogin = useRecoilValue(isLoginSelector);
  const isAuth = getLocalData(); // ture

  if (isLogin || isAuth) {
    return true;
  }

  return false;
};

export default getLoginAuth;
