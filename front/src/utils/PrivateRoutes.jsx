import React from 'react';
import { getCookie } from '@utils/Cookie';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
  const token = getCookie('accessToken');

  return token ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoutes;
