import { atom } from 'recoil';

const authState = atom({
  key: 'authState',
  default: {
    isLoggedIn: false,
    token: '',
  },
});
