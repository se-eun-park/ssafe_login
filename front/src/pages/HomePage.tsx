import React from 'react';
import { Link } from 'react-router-dom';
import { removeCookie } from '@common/Cookie';

const HomePage = () => {
  /** Logout */
  const clickBtnLogout = async () => {
    removeCookie('refreshToken');
    removeCookie('accessToken');
    window.location.reload();
  };

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <Link to="signup">
        <button className="button">회원가입</button>
      </Link>
      <Link to="signin">
        <button className="button">로그인</button>
      </Link>
      <button className="button" onClick={clickBtnLogout}>
        로그아웃
      </button>
    </div>
  );
};

export default HomePage;
