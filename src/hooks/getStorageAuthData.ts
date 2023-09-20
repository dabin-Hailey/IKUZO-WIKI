import React from 'react';

const getLocalData = (): Boolean => {
  const isLocalStorage = localStorage.getItem('accessToken');
  if (!isLocalStorage) {
    return false;
  }
  const obj = JSON.parse(isLocalStorage);
  if (Date.now() > obj.expiry) {
    localStorage.removeItem('accessToken');
    return false;
  }

  return true;
};

const getSessionData = (): Boolean => {
  const isSessionStorage = sessionStorage.getItem('invalidToken');
  if (!isSessionStorage) {
    return false;
  }
  return true;
};

export { getLocalData, getSessionData };
