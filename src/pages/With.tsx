import React, { useEffect, useState } from 'react';
import { getDataBySnapshot, getDataByTimestamp, setData } from '../utils/util';
import WithComponent from '../components/wiki/With';

export interface Root {
  id: string;
}

const currentUnixTime = Math.floor(new Date().getTime() / 1000);
const MockupData = {
  title: '여기산 맛집 가실분?',
  contents: '수원에서 제일 맛있는 곳인데 같이 가실 분 구해요',
  location: '수원시 팔달구',
  time: currentUnixTime,
  joined: 1,
  people: 3,
};

const With = (): JSX.Element => {
  const [datas, setDatas] = useState<Root[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDataByTimestamp('with-collection', 'time');
      if (data) {
        setDatas(data);
      }
    };

    fetchData();

    setData('with-collection', MockupData);
    getDataBySnapshot('with-collection', setDatas);
  }, []);

  return <WithComponent data={datas} />;
};

export default With;
