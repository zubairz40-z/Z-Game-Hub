import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from '../Layouts/MainLayout';
import HomePage from '../Pages/HomePage';
import GameDetailsPage from "../Pages/GameDetailsPage";
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import ErrorPage from "../Pages/ErrorPage";
import ProtectedRoute from "./ProtectedRoute";
import Developers from "../Pages/Developer";
import ForgotPassword from './../Pages/Forgotpassword';
import MyProfile from "../Pages/MyProfile";
import UpdateProfile from "../Pages/UpdateProfile";


const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path: "",
                element:<HomePage></HomePage>,
                  loader: () => fetch("/gamesdata.json")
            },
            {
                path:"/games/:id",
                element:(
                    <ProtectedRoute>
                        <GameDetailsPage></GameDetailsPage>
                    </ProtectedRoute>
                )
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {path:"/register",
                element:<Register></Register>

            },{
               path:"*",
               element:<ErrorPage></ErrorPage>
            

            },{
                path:"/developers",
                element: <Developers></Developers>

            },
            {
                path:"/forgotpassword",
                element:<ForgotPassword></ForgotPassword>
            },
            {
                path:"/myprofile",
                element: (
                     <ProtectedRoute>
                <MyProfile></MyProfile>
                </ProtectedRoute>)
            },
            {
                 path:"/updateprofile",
                element: (
                     <ProtectedRoute>
                <UpdateProfile></UpdateProfile>
                </ProtectedRoute>)
            }

        ]
    }
])

export default router;