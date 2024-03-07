import React from 'react';
import { getCookie } from '@common/Cookie';
import { Link, useNavigate } from 'react-router-dom';
import { removeCookie } from '@common/Cookie';

const HomePage = () => {
  const navigate = useNavigate();
  /** Logout */
  const clickBtnLogout = () => {
    removeCookie('refreshToken');
    removeCookie('accessToken');
    window.location.reload();
  };

  const clickBtnForm = () => {
    const token = getCookie('refreshToken');

    if (token) {
      navigate('/form');
    } else {
      navigate('/signin');
    }
  };

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <Link to="/signup">
        <button className="button">회원가입</button>
      </Link>
      <Link to="/signin">
        <button className="button">로그인</button>
      </Link>
      <button className="button" onClick={clickBtnLogout}>
        로그아웃
      </button>
      <button className="button" onClick={clickBtnForm}>
        폼 작성하기
      </button>
    </div>
  );
};

export default HomePage;
