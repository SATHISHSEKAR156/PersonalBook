import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import PageNotFound from '../components/Errors/pageNotFound';
import GalleryPage from '../pages/gallery';
import HomePage from '../pages/home';
import Login from '../pages/login';
import PostPage from '../pages/post';
import ToDoPage from '../pages/todo';
import Layout from './layout';
import PrivateRoute from './privateRoute';
import routes from './route-constant';

export const RouterConfig =() =>{
   return <Routes>
      <Route path="/" element={<Outlet />}>
        <Route exact path="/" element={<Layout />} />
        <Route path={routes.LOGIN} element={<Login /> } />
        <Route path={routes.HOME} element={<PrivateRoute><HomePage /></PrivateRoute>} />
        <Route path={routes.POSTS} element={<PrivateRoute><PostPage /></PrivateRoute>} />
        <Route path={routes.GALLERY} element={<PrivateRoute><GalleryPage /></PrivateRoute>} />
        <Route path={routes.TODO} element={<PrivateRoute><ToDoPage /></PrivateRoute>} />
        <Route path="*" element={<PageNotFound /> } />
      </Route>
    </Routes>
}