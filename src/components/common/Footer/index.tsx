import React from 'react';
import './Footer.css';
import github from '../../../assets/github-logo.png';
import fastCampus from '../../../assets/fastcampus.png';

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Developer</h2>
        <div className="company">
          패스트캠퍼스 프론트엔드 개발 1기 토이프로젝트
        </div>
        <div className="developer">
          참여자: 김민섭, 이승현, 한은지, 김다빈, 소유나
        </div>
        <div className="logo">
          <a
            href="https://github.com/dabin-Hailey/IKUZO-WIKI"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="logo__github"
              src={github}
              alt="github"
            />
          </a>
          <a
            href="https://fastcampus.co.kr/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="logo__fastcampus"
              src={fastCampus}
              alt="fastCampus"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
