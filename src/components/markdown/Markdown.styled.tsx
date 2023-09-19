import styled from 'styled-components';

const MarkdownContainer = styled.div`
  width: 850px;
  height: 79vh;
  /* position: relative; */
  /* margin-left: 5rem; */
  /* margin-top: 2rem; */

  .markdown-header {
    display: flex;
    justify-content: space-between;

    height: 50px;
    border-bottom: 3px solid var(--color-orange);
  }

  .title {
    font-family: 'IBMPlexSansKR-Regular';
    font-size: 2rem;
    font-weight: 700;
  }

  .primary {
    color: var(--color-orange);
  }

  .markdown-button {
    font-family: 'SBAggroB';
    width: 5rem;
    height: 2.5rem;
    background-color: var(--color-primary);
    color: var(--color-white);

    border: none;
    border-radius: 30px;
    cursor: pointer;

    transform: translateY(1px);
    transition: 0.2s;

    &:hover {
      transform: translateY(3px);
      background-color: var(--color-btn);
    }
  }

  .viewer-wrapper {
    width: 790px;
    height: 60vh;
    margin-top: 50px;
    padding: 20px 30px 40px;

    border-radius: 15px;
    background-color: #f2f2f2;
    overflow: auto;
  }
`;

export default MarkdownContainer;
