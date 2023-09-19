import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm, SubmitHandler, set } from 'react-hook-form';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { createUser, signIn } from '../../utils/util';
import { authState } from '../../recoil/authRecoil';

type Inputs = {
  email: string;
  password: string;
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  width: 100%;
  height: 100%;

  border: 1px solid #ccc;
  background-color: #fff000;
  gap: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  width: 60%;
  height: 100%;
`;

const Input = styled.input`
  width: 100%;
  height: 3rem;

  font-size: 1.3rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitInput = styled.button`
  font-size: 1.3rem;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:hover {
    background-color: #ccc;
  }
`;

const loginFunciton = async (
  email: string,
  password: string,
  callback: (props: any) => void,
  callback2: (props: string) => void,
) => {
  try {
    const { uid } = await signIn(email, password);
    callback(uid);
    callback2('/');
  } catch (error) {
    callback2('/login');
  }
};

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accessToken, setAccessToken] = useRecoilState(authState);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data, e) => {
    e?.preventDefault();
    const { email, password } = data;
    setEmail(email);
    setPassword(password);

    loginFunciton(email, password, setAccessToken, navigate);
  };

  return (
    <InputWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('email', { required: '이메일을 입력하세요' })}
          placeholder="Write your email"
          type="email"
        />
        <p>{errors.email?.message}</p>
        <Input
          {...register('password', {
            required: '패스워드를 입력하세요',
            minLength: {
              value: 8,
              message: '패스워드는 8자리 이상이어야 합니다',
            },
          })}
          type="password"
        />
        <p>{errors.password?.message}</p>
        <SubmitInput type="submit">제출</SubmitInput>
        <button
          type="button"
          onClick={() => {
            return console.log(accessToken);
          }}
        >
          토큰확인
        </button>
      </Form>
    </InputWrapper>
  );
};

export default LoginComponent;
