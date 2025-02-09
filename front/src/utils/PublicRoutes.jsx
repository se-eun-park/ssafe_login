import React from 'react';
import { getCookie } from '@utils/Cookie';
import { Outlet, Navigate } from 'react-router-dom';

const PublicRoutes = () => {
  const token = getCookie('accessToken');
  return token ? <Navigate to="/form" /> : <Outlet />;
};

export default PublicRoutes;
