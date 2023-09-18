import React from 'react';
import Header from '../components/common/Header';
import Notice from '../components/wiki/Notice/Notice';

const NoticePage = () => {
  return (
    <>
      <Header transparent={false} />
      <Notice />
    </>
  );
};

export default NoticePage;
