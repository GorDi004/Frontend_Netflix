import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "./../AuthProvider";
import { ProtectedRoute } from "./../ProtectedRoute";
import SignInPage from '../../pages/SignInPage';
import LoginPage from './../../pages/LoginPage';
import ChooseDevicePage from '../../pages/ChooseDevicePage';
import PlanPage from '../../pages/PlanPage';
import HomePage from '../../pages/HomePage';

const TheRoutes = () => {
    const { token } = useAuth();

    // Define public routes accessible to all users
    const routesForPublic = [
        {
            path: "/service",
            element: <div>Service Page</div>,
        },
        {
            path: "/about-us",
            element: <div>About Us</div>,
        },
    ];

    // Define routes accessible only to authenticated users
    const routesForAuthenticatedOnly = [
        {
            path: "/",
            element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
            children: [
                {
                    path: "/",
                    element: <div>User Home Page</div>,
                },
                {
                    path: "/device",
                    element: <ChooseDevicePage />,
                },
                {
                    path: "/logout",
                    element: <div>Logout</div>,
                },
            ],
        },
    ];

    // Define routes accessible only to non-authenticated users
    const routesForNotAuthenticatedOnly = [
        {
            path: "/home",
            element: <HomePage />,
        },
        {
            path: "/device",
            element: <ChooseDevicePage />,
        },
        {
            path: "/plan",
            element: <PlanPage />,
        },
        {
            path: "/login",
            element: <LoginPage/>,
        },
        {
            path: "/sign-in",
            element: <SignInPage />,
        },
    ];

    // Combine and conditionally include routes based on authentication status
    const router = createBrowserRouter([
        ...routesForPublic,
        ...(!token ? routesForNotAuthenticatedOnly : []),
        ...routesForAuthenticatedOnly,
    ]);

    // Provide the router configuration using RouterProvider
    return <RouterProvider router={router} />;
};

export default TheRoutes;