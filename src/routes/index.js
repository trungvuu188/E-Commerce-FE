import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import Admin from '../pages/profile copy';
import SignIn from '../pages/authentication/sign-in';
import SignUp from '../pages/authentication/sign-up';
import Checkout from '../pages/checkout';
import Favourite from '../pages/favourite';
import Home from '../pages/home';
import ProductDetail from '../pages/product-detail';
import Profile from '../pages/profile';
import { isAuthenticated } from './helpers';
import { AdminProtectedRoute, CustomerProtectedRoute } from './protected';


const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'>
        <Route element={<AdminProtectedRoute />}>
            <Route
                path='admin' 
                element={<Admin />}
            />
        </ Route>
        <Route element={<CustomerProtectedRoute />}>
            <Route
                path='profile' 
                element={<DefaultLayout chidren={<Profile />} />}
            />
        </ Route>
        <Route 
            index
            element={<DefaultLayout chidren={<Home />} />} 
        />
        <Route 
            path='product'
            element={<DefaultLayout chidren={<ProductDetail />} />} 
        />
        <Route 
            path='favourite'
            element={<DefaultLayout chidren={<Favourite />} />} 
        />
        <Route 
            path='checkout'
            element={<DefaultLayout chidren={<Checkout />} />} 
        />
        <Route 
            path='sign-in' 
            element={<SignIn />}
            loader={async () => await isAuthenticated()}    
        />
        <Route 
            path='sign-up' 
            element={<SignUp />}
            loader={async () => await isAuthenticated()}    
        />
        <Route path='*' element={<h1>Page not found</h1>} />
      </Route>
    )
  );
  
  const Index = () => {
    return <RouterProvider router={route} />;
  };

export default Index;