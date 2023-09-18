import styled from 'styled-components';

const MarkdownContainer = styled.div`
  width: 850px;
  height: 79vh;
  position: relative;
  margin-left: 5rem;

  .markdown-header {
    display: flex;
    justify-content: space-between;

    height: 50px;
    border-bottom: 3px solid var(--color-orange);
  }

  .title {
    font-size: 40px;
  }

  .primary {
    color: var(--color-orange);
  }

  .markdown-button {
    width: 200px;
    height: 35px;
    background-color: var(--color-primary);

    border: none;
    border-radius: 30px;
    box-shadow: 0 2px 4px #9c9c9c;
    cursor: pointer;
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
