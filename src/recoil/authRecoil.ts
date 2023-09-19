import { atom, selector } from 'recoil';

const authState = atom({
  key: 'authState',
  default: undefined,
});

const isLoginSelector = selector({
  key: 'isLoginSelector',
  get: ({ get }: any) => {
    return !!get(authState);
  },
});

export { authState, isLoginSelector };
