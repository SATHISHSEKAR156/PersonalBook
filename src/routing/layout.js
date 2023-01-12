import React from 'react';
import { Navigate } from 'react-router-dom';
import routes from './route-constant';

export default function Layout (){
  return <Navigate to={routes.LOGIN} />
}