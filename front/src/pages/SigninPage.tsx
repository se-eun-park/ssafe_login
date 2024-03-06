import { useState } from 'react';
import AxiosCookie from '@common/AxiosCookie';
import { removeCookie, setCookie } from '@common/Cookie';
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
    setCookie('accessToken', data.token);
    setCookie('refreshToken', data.token);
  };

  /** Logout */
  const clickBtnLogout = async () => {
    removeCookie('refreshToken');
    removeCookie('accessToken');
    navigate('/');
    window.location.reload();
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
