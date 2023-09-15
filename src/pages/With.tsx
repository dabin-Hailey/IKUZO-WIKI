import React, { useEffect, useState } from 'react';
import { getDataBySnapshot, getDataByTimestamp } from '../utils/util';
import WithComponent from '../components/wiki/With';

export interface Root {
  id: string;
}

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

    // 실시간 요청
    getDataBySnapshot('with-collection', setDatas);
  }, []);

  return <WithComponent data={datas} />;
};

export default With;
