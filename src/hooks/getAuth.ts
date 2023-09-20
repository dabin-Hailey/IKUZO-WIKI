import { signIn } from '../utils/util';

const loginFunciton = async (
  email: string,
  password: string,
  from: string,
  callback: (props: any) => void,
  callback2: (props: string) => void,
) => {
  try {
    const { uid } = await signIn(email, password);
    callback(uid);
    callback2(from);
    const obj = {
      value: uid,
      expire: Date.now() + 1000 * 60 * 60 * 24 * 7,
    };
    sessionStorage.setItem('invalidToken', JSON.stringify(obj));
    localStorage.setItem('accessToken', JSON.stringify(obj));
  } catch (error) {
    callback2('/login');
  }
};

const logoutFunction = (callback: (props: string) => void) => {
  sessionStorage.removeItem('invalidToken');
  callback('/login');
};

export { loginFunciton, logoutFunction };
