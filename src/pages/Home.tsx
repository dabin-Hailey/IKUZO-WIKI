import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Header from '../components/common/Header';
import bcImg from '../assets/Home-bcimage.jpg';
import slide1 from '../assets/slide_1.jpg';
import slide2 from '../assets/slide_2.jpg';
import slide3 from '../assets/slide_3.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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
        <div className="homeSwiper">
          <div className="homeSwiper__frame"> </div>
          <Carousel
            showThumbs={false} // 미리보기 사진 비활성화
            autoPlay={true as boolean}
            interval={2000}
            infiniteLoop={true as boolean}
            renderArrowPrev={(onClickHandler, hasPrev) => {
              if (hasPrev) {
                return (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title="<"
                    style={{
                      width: '2rem',
                      height: '2rem',
                      position: 'absolute',
                      top: '50%',
                      left: '0.2rem',
                      zIndex: 2,
                      transform: 'translateY(-50%)',
                      background: 'transparent',
                      border: '1px solid white',
                      borderRadius: '50%',
                      color: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    &lt;
                  </button>
                );
              }
              return null;
            }}
            renderArrowNext={(onClickHandler, hasNext) => {
              if (hasNext) {
                return (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title=">"
                    style={{
                      width: '2rem',
                      height: '2rem',
                      position: 'absolute',
                      top: '50%',
                      right: '.2rem',
                      zIndex: 2,
                      transform: 'translateY(-50%)',
                      background: 'transparent',
                      border: '1px solid white',
                      borderRadius: '50%',
                      color: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    &gt;
                  </button>
                );
              }
              return null;
            }}
          >
            <div>
              <img
                src={slide1}
                alt="Slide 1"
              />
            </div>
            <div>
              <img
                src={slide2}
                alt="Slide 2"
              />
            </div>
            <div>
              <img
                src={slide3}
                alt="Slide 3"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
