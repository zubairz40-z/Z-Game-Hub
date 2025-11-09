import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from './../src/Layouts/MainLayout';
import HomePage from './../src/Pages/HomePage';
import GameDetailsPage from "../src/Pages/GameDetailsPage";
import Login from './../src/Pages/Login';
import Register from './../src/Pages/Register';
import ErrorPage from "../src/Pages/ErrorPage";


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
                element:<GameDetailsPage></GameDetailsPage>
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