import React from 'react'
import ReactDOM from 'react-dom/client'

import {
    createBrowserRouter, Navigate,
    RouterProvider,
} from "react-router-dom";


import './index.css'
import App from 'src/app/App.tsx';
import { HomePage } from 'src/pages/HomePage';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <HomePage/>,
            },
            // {
            //     path: "/auth",
            //     element: <AuthPage/>,
            // },
            {
                path: '/add',
                element: <div>AddPageAllProduct</div>,
            },
            {
                path: '/all',
                element: <div>AllProduct</div>,
    },
    {
        path: '/stat',
                element: <div>Statistics</div>,
    },
    {
        path: '/fix/*',
                element: <div>FixPage</div>,
            },
            {
                path: "*",
                element: <Navigate replace to="home"/>
            },
        ]
    },
    {
        path: "*",
        element: <Navigate replace to="/"/>
    },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
