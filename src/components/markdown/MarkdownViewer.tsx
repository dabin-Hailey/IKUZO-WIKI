import React from 'react';
import swal from 'sweetalert';
import { Viewer } from '@toast-ui/react-editor';
import { useRecoilValue } from 'recoil';
import { isLoginSelector } from '../../recoil/authRecoil';
import * as S from './Markdown.styled';

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
    <S.MarkdownContainer>
      <S.MarkdownHeader>
        <S.Title>
          <S.Primary>SWAL</S.Primary> {wiki}
        </S.Title>
        <S.MarkdownButton
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
        </S.MarkdownButton>
      </S.MarkdownHeader>
      <S.ViewerWrapper>
        <Viewer initialValue={content} />
      </S.ViewerWrapper>
    </S.MarkdownContainer>
  );
};

export default MarkdownViewer;
