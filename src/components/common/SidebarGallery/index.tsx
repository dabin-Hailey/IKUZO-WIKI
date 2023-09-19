import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import AddModal from './AddModal';
import sidebar from '../../../assets/sidebar.svg';

const GallerySidebar = styled.div`
  position: relative;
  width: 12rem;
  min-height: 20rem;
  height: 100%;
  padding: 2rem;

  background-color: var(--color-beige);
  border-radius: 1rem;
  box-shadow: 0 0.2rem 0.2rem 0 #c3c3c3;

  color: var(--color-black);
  white-space: nowrap;
  overflow: visible;

  .sidebarHeader {
    display: flex;
    gap: 0.5rem;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 1.2rem;

    .sidebarHeaderIcon {
      width: 2rem;
    }

    h2 {
      font-size: 1.2rem;
    }
  }

  a {
    text-decoration: none;
    color: var(--color-black);
  }

  ul {
    font-size: 0.8rem;
  }

  li {
    margin-bottom: 0.7rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: var(--color-black);
  display: block;
  padding: 0.8rem 1.5rem;
  border-radius: 0.7rem;
  transition: 0.5s;

  &:hover {
    text-decoration: none;
    background-color: #fff0b8;
    box-shadow: inset 0 0.1rem 0.1rem 0 #f6e6ac;
  }

  &.active {
    font-weight: 700;
    color: #ffa800;
    text-decoration: none;
    background-color: #fff0b8;
    box-shadow: inset 0 0.1rem 0.1rem 0 #f6e6ac;
  }
`;

const AddButton = styled.button`
  position: absolute;
  bottom: 2rem;

  width: 75%;
  height: 2.5rem;
  background-color: var(--color-primary);

  border: none;
  border-radius: 30px;
  box-shadow: 0 2px 4px #9c9c9c;
  cursor: pointer;
  /* transition: 0.5s; */

  &:hover {
    font-weight: 700;
    box-shadow: inset 0 0.1rem 0.1rem 0 #9c9c9c;
  }
`;

const SidebarGallery = () => {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <GallerySidebar>
      <div className="sidebarHeader">
        <img
          className="sidebarHeaderIcon"
          src={sidebar}
          alt="sidebar"
        />
        <h2>맛집 추천</h2>
      </div>
      <nav>
        <ul>
          <li>
            <StyledNavLink to="/gallery/korean">한식</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/gallery/chinese">중식</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/gallery/japanese">일식</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/gallery/western">양식</StyledNavLink>
          </li>
        </ul>
      </nav>
      <AddButton onClick={handleModal}>맛집 추가하기</AddButton>
      {modal === true ? <AddModal onChange={handleModal} /> : null}
    </GallerySidebar>
  );
};

export default SidebarGallery;
