import React from 'react';
import { atom, selector } from 'recoil';

const countState = atom({
  key: 'countState',
  default: 0,
});

const isCountSelector = selector({
  key: 'isCountSelector',
  get: ({ get }) => {
    const count = get(countState);
    return count > 0;
  },
});

export { countState, isCountSelector };
