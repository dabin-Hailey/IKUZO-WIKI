import React from 'react';
import { recoilPersist } from 'recoil-persist';
import { atom, selector } from 'recoil';

const { persistAtom } = recoilPersist({
  storage: sessionStorage,
});

const countState = atom({
  key: 'countState',
  default: 0,

  effects_UNSTABLE: [persistAtom],
});

const isCountSelector = selector({
  key: 'isCountSelector',
  get: ({ get }) => {
    const count = get(countState);
    return count > 0;
  },
});

export { countState, isCountSelector };
