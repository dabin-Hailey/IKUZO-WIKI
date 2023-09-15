import React from 'react';
import { Viewer } from '@toast-ui/react-editor';
import MarkdownContainer from './Markdown.styled';

const MarkdownViewer = ({
  wiki,
  onChange,
  content,
  status,
}: {
  wiki: string;
  onChange: () => void;
  content: string;
  status: string;
}) => {
  return (
    <MarkdownContainer>
      <div className="markdown-header">
        <div className="title">
          <span className="primary">IKUZO</span> {wiki}
        </div>
        <button
          className="markdown-button"
          type="button"
          onClick={() => {
            onChange();
          }}
        >
          {status}
        </button>
      </div>
      <div className="viewer-wrapper">
        <Viewer initialValue={content} />
      </div>
    </MarkdownContainer>
  );
};

export default MarkdownViewer;
