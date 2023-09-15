import React, { useState, useEffect } from 'react';
import MarkdownViewer from '../../markdown/MarkdownViewer';
import MarkdownEditor from '../../markdown/MarkdownEditor';
import { getData } from '../../../utils/util';

const Notice = () => {
  const wiki = '공지사항';
  const collection = 'notice-collection';
  const dataID = 'notice';
  const [status, setStatus] = useState('수정하기');
  const [html, setHtml] = useState('');
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const docs = await getData(collection);
    setHtml(docs[0].html as string);
    setMarkdown(docs[0].markdown as string);
    setLoading(false);
  };

  const handleStatus = () => {
    if (status === '수정하기') {
      setStatus('저장하기');
    } else {
      setStatus('수정하기');
    }
    setLoading(true);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (status === '수정하기') {
    return (
      <MarkdownViewer
        wiki={wiki}
        onChange={handleStatus}
        content={html}
        status={status}
      />
    );
  }
  return (
    <MarkdownEditor
      wiki={wiki}
      onChange={handleStatus}
      collection={collection}
      dataID={dataID}
      content={markdown}
      status={status}
    />
  );
};

export default Notice;
