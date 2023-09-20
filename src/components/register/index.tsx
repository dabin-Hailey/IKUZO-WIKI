import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useForm, SubmitHandler, set } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { useLocation, useNavigate } from 'react-router-dom';
import { emailState, uidState } from '../../recoil/authRecoil';
import { loginFunciton, registerFunction } from '../../hooks/getAuth';

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

const Register = () => {
  const setEmail = useSetRecoilState(emailState);
  const setUid = useSetRecoilState(uidState);
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
    await registerFunction(email, password, setEmail, setUid, navigate);
  };

  return (
    <InputWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <p>이메일을 입력하세요</p>
        <p>{errors.email?.message}</p>
        <Input
          {...register('email', { required: '이메일을 입력하세요' })}
          placeholder="Write your email"
          type="email"
        />
        <p>패스워드를 입력하세요</p>
        <p>{errors.password?.message}</p>
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
        <SubmitInput type="submit">회원 가입</SubmitInput>
      </Form>
    </InputWrapper>
  );
};

export default Register;
