import React, { useEffect, useState } from 'react';
import { getData } from '../utils/util';
import WithComponent from '../components/wiki/With';

export interface Root {
  id: string;
}

const With = (): JSX.Element => {
  const [datas, setDatas] = useState<Root[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData('with-collection');
      if (data) {
        setDatas(data);
      }
    };
    fetchData();
  }, []);

  return <WithComponent data={datas} />;
};

export default With;
