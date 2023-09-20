import { signIn } from '../utils/util';

interface LoginData {
  value: string;
  expire: number;
}

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
    sessionStorage.setItem('invalidToken', uid);
    localStorage.setItem('accessToken', JSON.stringify(obj));
  } catch (error) {
    callback2('/login');
  }
};

const logoutFunction = () => {
  sessionStorage.removeItem('invalidToken');
};

const loginDataAlreadyRetrived = (): void => {
  const localStorageData: string | null = localStorage.getItem('accessToken');
  if (typeof localStorageData === 'string') {
    const { value } = JSON.parse(localStorageData) as LoginData;
    sessionStorage.setItem('invalidToken', value);
  }
};

export { loginFunciton, logoutFunction, loginDataAlreadyRetrived };
