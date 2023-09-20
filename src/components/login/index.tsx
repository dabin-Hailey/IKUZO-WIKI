import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useForm, SubmitHandler, set } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { useLocation, useNavigate } from 'react-router-dom';
import { createUser, signIn } from '../../utils/util';
import { authState } from '../../recoil/authRecoil';
import { loginFunciton } from '../../hooks/getAuth';
import logoImg from '../../assets/logo.png';
import bcImg from '../../assets/yellowbc.avif';

type Inputs = {
  email: string;
  password: string;
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 90vh;
  margin-top: 4.6rem;

  background-image: url(${bcImg});
  background-size: cover;
  background-repeat: no-repeat;
  gap: 1rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 5rem 0;
  padding: 1.5rem;
  border-radius: 1rem;
  border: 3px solid var(--color-beige);

  background-color: #ffd850;
  max-width: 20rem;
  width: 60%;
  height: 100%;
  z-index: 2;
`;

const FormImg = styled.div`
  width: 5rem;
  padding: 2rem 1.6rem 1.6rem;

  border: 4px solid #414042;
  border-radius: 50%;

  img {
    width: 100%;
  }
`;

const Input = styled.input`
  margin-top: 2rem;
  width: 100%;
  height: 3rem;

  font-size: 1.3rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitInput = styled.button`
  font-family: 'IBMPlexSansKR-Regular';

  padding: 0.5rem 1.5rem;
  margin-top: 2rem;

  font-size: 1.3rem;
  border: none;
  border-radius: 1rem;
  background-color: var(--color-beige);
  transition: 0.1s;
  box-shadow: 0 3px 0 0 #ffae44;

  &:active {
    color: #000;
    box-shadow: 0 0 0 0 #ffae44;
    transform: translateY(3px);
  }
`;

const StyledInput = styled.input`
  font-family: 'BMDOHYEON';
  margin-top: 2rem;
  width: 100%;
  height: 3rem;
  padding: 0 2rem;
  box-sizing: border-box;

  color: #000;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.2s;

  &:focus {
    border-color: #f09136;
    outline: none;
  }
`;

const LastStyledInput = styled.input`
  margin-top: 2rem;
  width: 100%;
  height: 3rem;
  padding: 0 2rem;
  box-sizing: border-box;

  color: #000;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.2s;

  &:focus {
    border-color: #f09136;
    outline: none;
  }

  &::placeholder {
    font-family: 'BMDOHYEON';
  }
`;

const LoginComponent = () => {
  const setAccessToken = useSetRecoilState(authState);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.redirectedFrom?.pathname || '/';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data, e) => {
    e?.preventDefault();
    const { email, password } = data;
    await loginFunciton(email, password, from, setAccessToken, navigate);
  };

  return (
    <InputWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormImg>
          <img
            src={logoImg}
            alt="logo img"
          />
        </FormImg>
        <StyledInput
          {...register('email', { required: ' 이메일을 입력하세요 !' })}
          placeholder="Write your email"
          type="email"
        />
        <p>{errors.email?.message}</p>
        <LastStyledInput
          {...register('password', {
            required: '패스워드를 입력하세요 !',
            minLength: {
              value: 8,
              message: '패스워드는 8자리 이상이어야 합니다 !',
            },
          })}
          placeholder="Write your password"
          type="password"
        />
        <p>{errors.password?.message}</p>
        <SubmitInput type="submit">제출</SubmitInput>
      </Form>
    </InputWrapper>
  );
};

export default LoginComponent;
