import { useState } from 'react';
import AxiosCookie from '@common/AxiosCookie';
import { removeCookie, setCookie } from '@common/Cookie';

const SigninPage = () => {
  const [user, setUser] = useState({ email: '', pw: '' });

  /** Get User Login Info */
  const onChange = async (event: any) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  /** Get Login Response from Server */
  const clickBtnLogin = async () => {
    const config = {
      method: 'post',
      url: 'http://localhost:8000/auth/login',
      data: user,
    };
    const { data } = await AxiosCookie(config);
    setCookie('accessToken', data.token);
  };

  /** Logout */
  const clickBtnLogout = async () => {
    removeCookie('accessToken');
  };

  return (
    <div>
      <input onChange={onChange} name="email" type="text" placeholder="Enter Ur Email" />
      <input onChange={onChange} name="pw" type="password" placeholder="Enter Ur pw" />
      <button onClick={clickBtnLogin}>LOGIN</button>
      <button onClick={clickBtnLogout}>LOGOUT</button>
    </div>
  );
};

export default SigninPage;
