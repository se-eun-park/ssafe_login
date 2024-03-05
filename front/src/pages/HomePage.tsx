import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <Link to="signup">
        <button className="transition-all bg-[#6ED1F9] w-96 h-14 mb-6 text-2xl font-noto-sans-kr text-white rounded-full hover:bg-white border-[3px] border-[#6ED1F9] hover:text-[#6ED1F9]">
          회원가입
        </button>
      </Link>
      <Link to="signin">
        <button className="transition-all bg-[#6ED1F9] w-96 h-14 text-2xl font-noto-sans-kr text-white rounded-full hover:bg-white border-[3px] border-[#6ED1F9] hover:text-[#6ED1F9]">
          로그인
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
