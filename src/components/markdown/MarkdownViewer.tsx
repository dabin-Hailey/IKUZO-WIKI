import React from 'react';
import swal from 'sweetalert';
import { Viewer } from '@toast-ui/react-editor';
import { useRecoilValue } from 'recoil';
import { isLoginSelector } from '../../recoil/authRecoil';
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
  const isCount = useRecoilValue(isLoginSelector);

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
            if (isCount) {
              onChange();
            } else {
              swal({
                title: '로그인이 필요합니다.',
                text: '로그인이 필요합니다. 😥',
                icon: 'warning',
              });
            }
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
