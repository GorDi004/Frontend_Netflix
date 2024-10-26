import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CastingBillboardPage from '../../pages/CastingBillboardPage';
import CastingDirectorPage from '../../pages/CastingDirectorPage';
import CastingPage from '../../pages/CastingPage';
import CastingSubmissionPage from '../../pages/CastingSubmissionPage';
import ChooseDevicePage from '../../pages/ChooseDevicePage';
import CreateActorProfilePage from '../../pages/CreateActorProfilePage';
import CreateCastingPage from '../../pages/CreateCastingPage';
import DirectorProfilePage from '../../pages/DirectorProfilePage';
import GetSartedPage from '../../pages/GetStartedPage';
import HomePage from '../../pages/HomePage';
import MoviePage from '../../pages/MoviePage';
import PlanPage from '../../pages/PlanPage';
import ReturnHomePage from '../../pages/ReturnHomePage';
import SignInPage from '../../pages/SignInPage';
import LoginPage from './../../pages/LoginPage';
import { useAuth } from "./../AuthProvider";
import { ProtectedRoute } from "./../ProtectedRoute";
import EditCastingPage from '../../pages/EditCastingPage';
import NewsPage from '../../pages/NewsPage';
import NewsDetailsPage from '../../pages/NewsDetailsPage';

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
                    element: <HomePage />,
                },
                // {
                //     path: "/device",
                //     element: <ChooseDevicePage />,
                // },
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
            path: "/:type/:id",
            element: <MoviePage />,
        },
        //castings
        {
            path: "/casting",
            element: <CastingPage />,
        },
        {
            path: "/create-casting",
            element: <CreateCastingPage />,
        },
        {
            path: "/edit-casting/:castingId",
            element: <EditCastingPage />,
        },
        {
            path: "/casting-director",
            element: <CastingDirectorPage />,
        },
        {
            path: "/create-actor-profile/:castingId",
            element: <CreateActorProfilePage />,
        },
        {
            path: "/director-profile",
            element: <DirectorProfilePage />,
        },
        {
            path: "/casting-billboard/:castingId",
            element: <CastingBillboardPage />,
        },
        {
            path: "/casting-submission/:castingId",
            element: <CastingSubmissionPage />,
        },
        {
            path: "/get-started",
            element: <GetSartedPage />,
        },
        {
            path: "/return-homepage",
            element: <ReturnHomePage />,
        },
        //news

        {
            path: "/news",
            element: <NewsPage />,
        },
        {
            path: "/news-details/:id",
            element: <NewsDetailsPage />,
        },

        //pages
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