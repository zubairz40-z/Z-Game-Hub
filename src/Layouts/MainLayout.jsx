import React, { useEffect } from "react";
import Navbar from './../Components/Navbar';
import { Outlet, useLocation } from "react-router";
import Footer from './../Components/Footer';



     const TITLES = {
  "/": "GameHub | Home",
  "/login": "GameHub | Login",
  "/register": "GameHub | Register",
  "/developers": "GameHub | Developers",
  "/my-profile": "GameHub | My Profile",
  "/update-profile": "GameHub | Update Profile",
  "/forgot-password": "GameHub | Forgot Password",
};
const MainLayout =()=>{
    const {pathname}=useLocation();

    useEffect(()=>{
        if(pathname.startsWith("/games/")){
            document.title="GameHub | Game Details";
        }else{
            document.title =TITLES[pathname] || "GameHub"
        }
    },[pathname])

    return(
        <div>
        <header>
            <Navbar></Navbar>
        </header>
        <main className="min-h-screen">
            <Outlet></Outlet>
        </main>

        <footer>
            <Footer></Footer>
        </footer>

        </div>
    )
}

export default MainLayout;