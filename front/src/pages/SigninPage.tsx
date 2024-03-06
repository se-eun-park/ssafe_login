import { useState } from 'react';
import AxiosCookie from '@common/AxiosCookie';
import { setCookie } from '@common/Cookie';
import { useNavigate } from 'react-router-dom';

const SigninPage = () => {
  const [user, setUser] = useState({ email: '', pw: '' });
  const navigate = useNavigate();

  const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const clickBtnLogin = async () => {
    const config = {
      method: 'post',
      url: 'http://localhost:8000/auth/login',
      data: user,
    };
    const { data } = await AxiosCookie(config);
    setCookie('accessToken', data.accessToken);
    setCookie('refreshToken', data.refreshToken);

    navigate('/');
  };

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="flex flex-col w-[400px] h-[508px] justify-around">
        <div className="flex flex-col">
          <label className="labelText" htmlFor="email">
            이메일
          </label>
          <input className="inputField" onChange={onChange} name="email" id="email" type="text" placeholder="Email" />
        </div>

        <div className="flex flex-col">
          <label className="labelText" htmlFor="password">
            비밀번호
          </label>

          <input
            className="inputField"
            onChange={onChange}
            name="pw"
            id="password"
            type="password"
            placeholder="Password"
          />
        </div>

        <button className="button" onClick={clickBtnLogin}>
          로그인
        </button>
      </div>
    </div>
  );
};

export default SigninPage;
