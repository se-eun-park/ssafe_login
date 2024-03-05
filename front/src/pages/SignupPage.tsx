import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';

interface FormInputs {
  email: string;
  password: string;
  passwordCheck: string;
}

const SignupPage = () => {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors, isSubmitting, isValid },
    handleSubmit,
    getValues,
  } = useForm<FormInputs>({ mode: 'onChange' });

  // 유효성 검사
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,16}$/;

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    alert(`Email : ${data.email} \nPW : ${data.password}`);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex w-full h-screen justify-center items-center">
        <div className="flex flex-col w-[400px] h-[508px] justify-around">
          <div className="flex flex-col">
            <label className="labelText" htmlFor="email">
              이메일
            </label>
            <input
              className="inputField"
              id="email"
              type="text"
              placeholder="Email"
              {...register('email', {
                required: true,
                pattern: emailRegex,
              })}
            />
            {errors.email && errors.email.type === 'required' && <p className="errorMessage">이메일을 입력해주세요</p>}
            {errors.email && errors.email.type === 'pattern' && (
              <p className="errorMessage">이메일 양식에 맞게 입력해주세요</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="labelText" htmlFor="password">
              비밀번호
            </label>
            <input
              className="inputField"
              id="password"
              type="password"
              placeholder="영문, 숫자, 특수문자 포함 8자 ~ 16자"
              {...register('password', {
                required: true,
                pattern: passwordRegex,
              })}
            />
            {errors.password && errors.password.type === 'required' && (
              <p className="errorMessage">비밀번호를 입력해주세요</p>
            )}
            {errors.password && errors.password.type === 'pattern' && (
              <p className="errorMessage">
                영문자, 숫자, 특수문자를 하나 이상 포함한
                <br /> 8자리 이상, 16자리 이하의 비밀번호여야 합니다.
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="labelText" htmlFor="passwordCheck">
              비밀번호 확인
            </label>
            <input
              className="inputField"
              id="passwordCheck"
              type="password"
              placeholder="비밀번호를 다시 입력해 주세요"
              {...register('passwordCheck', {
                required: '비밀번호를 확인해주세요',
                validate: {
                  matchPassword: (value) => {
                    const { password } = getValues();
                    return password === value || '비밀번호가 일치하지 않습니다';
                  },
                },
              })}
            />
            {errors.passwordCheck && <p className="errorMessage">{errors.passwordCheck.message}</p>}
          </div>
          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className="transition-all bg-[#6ED1F9] w-96 h-14 mb-6 text-2xl font-noto-sans-kr text-white rounded-full hover:bg-white border-[3px] border-[#6ED1F9] hover:text-[#6ED1F9] disabled:bg-[#DADADA] disabled:text-[#fff] disabled:border-[#DADADA]"
          >
            회원가입
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignupPage;
