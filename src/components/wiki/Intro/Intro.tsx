import React, { useState, useEffect } from 'react';
import MarkdownViewer from '../../markdown/MarkdownViewer';
import MarkdownEditor from '../../markdown/MarkdownEditor';
import { getData } from '../../../utils/util';

const Intro = () => {
  const wiki = '소개';
  const collection = 'intro-collection';
  const dataID = 'intro';
  const [status, setStatus] = useState('edit');
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
    if (status === 'edit') {
      setStatus('save');
    } else {
      setStatus('edit');
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
  if (status === 'edit') {
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

export default Intro;
