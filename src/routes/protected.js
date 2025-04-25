import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { JWTDecoder } from '../helper/JWTDecoder';

const CustomerProtectedRoute = () => {
  const token = sessionStorage.getItem('token');
  if(!token) return <Navigate to='/'/>;
  const encodedToken = JWTDecoder(token);
  const userRole = encodedToken.scope === 'ROLE_CUSTOMER';
  return userRole ? <Outlet /> : <Navigate to='/' />;
};

const AdminProtectedRoute = () => {
  const token = sessionStorage.getItem('token');
  if(!token) return <Navigate to='/'/>;
  const encodedToken = JWTDecoder(token);
  const userRole = encodedToken.scope === 'ROLE_ADMIN';
  return userRole ? <Outlet /> : <Navigate to='/' />;
};

export { CustomerProtectedRoute, AdminProtectedRoute };
