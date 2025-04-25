import React from 'react';
import { redirect } from 'react-router-dom';

export const isAuthenticated = () => {
  const token = sessionStorage.getItem('token');

  if (token) throw redirect('/');
  return null;
};
