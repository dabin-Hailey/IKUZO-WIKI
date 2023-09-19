import React from 'react';
import Header from '../components/common/Header';
import Intro from '../components/wiki/Intro/Intro';

const IntroPage = () => {
  return (
    <>
      <Header transparent={false} />
      <Intro />
    </>
  );
};

export default IntroPage;
