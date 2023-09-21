import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import { getDataByField } from '../../utils/util';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from '../common/Header';
import bcImg from '../../assets/Home-bcimage.jpg';

export interface Root {
  id?: string;
  photo?: string;
  category?: string;
}

const HomeWrapper = styled.div`
  position: relative;
`;

const HomeBackground = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  background: url(${bcImg}) center/cover;
`;

const HomeBgImageCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #3f3f3f;
  opacity: 0.6;
`;

const HomeInner = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1500px;
  text-align: center;
  color: white;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const HomeText = styled.div`
  font-family: 'IBMPlexSansKR-Regular';
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70%;
  text-align: left;
  word-break: keep-all;

  @media screen and (max-width: 800px) {
    position: absolute;
    top: -17rem;
    left: 5rem;
  }

  @media screen and (max-width: 600px) {
    position: absolute;
    top: -11rem;
    left: 5rem;
  }
`;

const HomeTextSubtitle = styled.div`
  padding-bottom: 0.7rem;
  font-size: 1.1rem;
  color: var(--color-primary);

  @media screen and (max-width: 1200px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 950px) {
    font-size: 0.6rem;
  }
`;

const HomeTextTitle = styled.div`
  font-family: 'SEBANG_Gothic_Bold';
  padding-bottom: 1rem;
  font-size: 2.6rem;
  font-weight: 700;
  span {
    color: var(--color-primary);
  }

  @media screen and (max-width: 1200px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 950px) {
    font-size: 1.5rem;
  }
`;

const HomeTextDescription = styled.div`
  margin-bottom: 1rem;
  line-height: 1.4;

  @media screen and (max-width: 1200px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 950px) {
    font-size: 0.6rem;
  }
`;

const HomeTextBtn = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HomeTextBtnLeft = styled.button`
  font-family: 'IBMPlexSansKR-Regular';
  padding: 0.6rem 1rem;
  border: 1px solid var(--color-primary);
  border-radius: 2rem;
  background-color: #ffd12c;
  color: var(--color-black);
  font-weight: 700;
  transition: 0.5s;

  @media screen and (max-width: 1200px) {
    font-size: 0.9rem;
    padding: 0.4rem 0.7rem;
  }

  @media screen and (max-width: 950px) {
    font-size: 0.6rem;
    padding: 0.4rem 0.7rem;
  }

  &:hover {
    /* Add hover styles here */
    background-color: #ffe68a;
    color: var(--color-black);
  }
`;

const HomeTextBtnRight = styled.button`
  font-family: 'BMDOHYEON';
  margin-left: 1rem;
  padding: 0.6rem 1rem;
  border: 1px solid var(--color-primary);
  border-radius: 2rem;
  background-color: transparent;
  color: var(--color-primary);
  font-weight: 700;
  transition: 0.5s;

  @media screen and (max-width: 1200px) {
    font-size: 0.9rem;
    padding: 0.4rem 0.7rem;
  }

  @media screen and (max-width: 950px) {
    font-size: 0.6rem;
    padding: 0.4rem 0.7rem;
  }

  &:hover {
    /* Add hover styles here */
    background-color: #ffe68a;
    color: var(--color-black);
  }
`;

const HomeSwiper = styled.div`
  width: 50%;
  margin-left: 5rem;
  position: relative;
  padding: 0.2rem;
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid white;

  @media screen and (max-width: 800px) {
    position: absolute;
    top: 1rem;
    left: 0;
    right: 0;
  }

  @media screen and (max-width: 600px) {
    position: absolute;
    top: 4rem;
    left: 0;
    right: 0;
  }
`;

const HomeSwiperFrame = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  border: none;
  z-index: 1;
`;

const StyledCarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute; /* 컨테이너 내에서 위치 조정을 위해 */
  top: 0;
  left: 0;
`;

const Home = () => {
  const handleJoinClick = () => {
    window.location.href = '/wiki/with';
  };

  const handleMoreClick = () => {
    window.location.href = '/gallery';
  };

  const [list, setList] = useState<Root[]>([]);

  const fetchData = async (category: string) => {
    const data: Root[] = await getDataByField(
      `data-collection/best-restaurant-collection/${category}-food`,
      'category',
      category,
    );
    setList(prevList => {
      return [...prevList, ...data];
    });
  };

  useEffect(() => {
    fetchData('korean');
    fetchData('japanese');
    fetchData('western');
  }, []);

  const getRandomImage = (category: string) => {
    const filteredList = list.filter(item => {
      return item.category === category;
    });
    if (filteredList.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredList.length);
      return filteredList[randomIndex].photo;
    }
    return '';
  };

  const koreanRandomImage = getRandomImage('korean');
  const japaneseRandomImage = getRandomImage('japanese');
  const westernRandomImage = getRandomImage('western');

  return (
    <HomeWrapper className="home">
      <Header transparent="true" />
      <HomeBackground className="home__background">
        <HomeBgImageCover className="home__bgImg--cover" />
      </HomeBackground>
      <HomeInner className="home__inner">
        <HomeText className="homeText">
          <HomeTextSubtitle className="homeText__subtitle">
            SWAL MAIN NEWS
          </HomeTextSubtitle>
          <HomeTextTitle className="homeText__title">
            2023 <span>가을 맛집 탐방 </span> 정모
          </HomeTextTitle>
          <HomeTextDescription className="homeText__description">
            2023년 9월 11일일 강남 패스트캠퍼스에서 진행된 가을 야유회로 모든
            팀원들이 만나는 만남의 장이 열렸다. 해당 만남의 장에서 많은 팀들은
            자유롭게 주제를 정하고 기획을 하였으며 신나게 놀았다.
          </HomeTextDescription>
          <HomeTextBtn className="homeText__btn">
            <HomeTextBtnLeft
              className="homeText__btn--left"
              onClick={handleJoinClick}
            >
              참여하기
            </HomeTextBtnLeft>
            <HomeTextBtnRight
              className="homeText__btn--right"
              onClick={handleMoreClick}
            >
              more
            </HomeTextBtnRight>
          </HomeTextBtn>
        </HomeText>
        <HomeSwiper className="homeSwiper">
          <HomeSwiperFrame className="homeSwiper__frame" />
          <StyledCarouselContainer>
            <Carousel
              showThumbs={false}
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
                {koreanRandomImage && (
                  <div>
                    <img
                      src={koreanRandomImage}
                      alt="Korean Food"
                    />
                  </div>
                )}
              </div>
              <div>
                {japaneseRandomImage && (
                  <div>
                    <CarouselImage
                      src={japaneseRandomImage}
                      alt="Japanese Food"
                    />
                  </div>
                )}
              </div>
              <div>
                {westernRandomImage && (
                  <div>
                    <CarouselImage
                      src={westernRandomImage}
                      alt="Western Food"
                    />
                  </div>
                )}
              </div>
            </Carousel>
          </StyledCarouselContainer>
        </HomeSwiper>
      </HomeInner>
    </HomeWrapper>
  );
};
export default Home;
