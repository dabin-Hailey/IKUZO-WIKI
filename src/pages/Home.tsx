import React from 'react';

import Header from '../components/common/Header';
import bcImg from '../assets/Home-bcimage.jpg';
import './Home.css';

const HomePage = () => {
  return (
    <div className="home">
      <Header />
      <div className="home__background">
        <img
          className="home__bgImg"
          src={bcImg}
          alt="bcImg"
        />
        <div className="home__bgImg--cover"> </div>
      </div>
      <div className="home__inner">
        <div className="homeText">
          <div className="homeText__subtitle">IKUZO MAIN NEWS</div>
          <div className="homeText__title">
            2023 <span>가을 맛집 탐방 </span> 정모
          </div>
          <div className="homeText__description">
            2023년 9월 11일일 강남 페스트캠퍼스에서 진행된 가을 야유회로 모든
            팀원들이 만나는 만남의 장이 열렸다. 해당 만남의 장에서 많은 팀들은
            자유롭게 주제를 정하고 기획을 하였으며 신나게 놀았다.
          </div>
          <div className="homeText__btn">
            <button
              type="button"
              className="homeText__btn--left"
            >
              참여하기
            </button>
            <button
              type="button"
              className="homeText__btn--right"
            >
              more
            </button>
          </div>
        </div>
        <div className="homeSwiper">캐로셀</div>
      </div>
    </div>
  );
};

export default HomePage;
