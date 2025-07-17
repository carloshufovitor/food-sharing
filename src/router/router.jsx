import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home/Home';
import SignUp from '../pages/auth/SignUp';
import Login from '../pages/auth/Login';
import PrivateRoute from './PrivateRoute';
import AddFood from '../pages/Private Page/AddFood';
import MyFoodRequest from '../pages/Private Page/MyFoodRequest';
import ManageMyFoods from '../pages/Private Page/ManageMyFoods';

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            }, 
            {
                path: '/signup',
                Component: SignUp
            }, 
            {
                path: '/login',
                Component: Login
            },
            {
                path: "/add-food",
                element: (
                    <PrivateRoute>
                        <AddFood></AddFood>
                    </PrivateRoute>
                ),
            }, 
            {
                path: "/my-food-request",
                element: (
                    <PrivateRoute>
                       <MyFoodRequest></MyFoodRequest>
                    </PrivateRoute>
                ),
            }, 
            {
                path: "/manage-my-foods",
                element: (
                    <PrivateRoute>
                        <ManageMyFoods></ManageMyFoods>
                    </PrivateRoute>
                ),
            }
        ]
    }
])
export default router;