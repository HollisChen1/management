import { Navigate } from 'react-router-dom'
import Loading from '../components/Loading';
import React, { lazy } from 'react';
import Department from '../pages/Department';
import NotFound from '../components/404';
import AppConfig from '../pages/AppConfig';

const Home = lazy(() => import('../pages/Home'))
const Role = lazy(() => import('../pages/Role'))
const User = lazy(() => import('../pages/User'))
const Menu = lazy(() => import('../pages/Menu'))
const Dashboard = lazy(() => import('../pages/Dashboard'))
const Login = lazy(() => import('../pages/Login'))
const LogQuery = lazy(() => import('../pages/LogQuery'))

const routes = [
    {
        path: '/',
        element: <Navigate to={'/dashboard'}></Navigate>
    },
    {
        path: '/login',
        element: <React.Suspense fallback={<Loading />}>
            <Login />
        </React.Suspense>

    },
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "dashboard",
                element: <React.Suspense fallback={<Loading />}>
                    <Dashboard />
                </React.Suspense>
            },
            {
                path: "systemSetting",
                children: [
                    {
                        path: "user",
                        element: <React.Suspense fallback={<Loading />}>
                            <User />
                        </React.Suspense>
                    },
                    {
                        path: "role",
                        element: <React.Suspense fallback={<Loading />}>
                            <Role />
                        </React.Suspense>
                    },
                    {
                        path: "menu",
                        element: <React.Suspense fallback={<Loading />}>
                            <Menu />
                        </React.Suspense>
                    },
                    {
                        path: "dept",
                        element: <React.Suspense fallback={<Loading />}>
                            <Department />
                        </React.Suspense>
                    },
                    {
                        path: "config",
                        element: <React.Suspense fallback={<Loading />}>
                            <AppConfig />
                        </React.Suspense>
                    }
                ]
            },
            {
                path: "logQuery",
                element: <React.Suspense fallback={<Loading />}>
                    <LogQuery />
                </React.Suspense>
            },
            {
                path: "*",
                element : <NotFound />
            }
        ]
    }
]

export default routes;