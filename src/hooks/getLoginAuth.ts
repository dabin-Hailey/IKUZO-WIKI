import React from 'react';
import { getLocalData, getSessionData } from './getStorageAuthData';

const getLoginAuth = () => {
  const isAuth = getSessionData(); // ture

  if (isAuth) {
    return true;
  }

  return false;
};

export default getLoginAuth;
