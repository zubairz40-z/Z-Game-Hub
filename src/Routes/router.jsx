import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from '../Layouts/MainLayout';
import HomePage from '../Pages/HomePage';
import GameDetailsPage from "../Pages/GameDetailsPage";
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import ErrorPage from "../Pages/ErrorPage";
import ProtectedRoute from "./ProtectedRoute";


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
            

            }

        ]
    }
])

export default router;