import React from "react";
import { NavLink } from "react-router";
const ErrorPage=()=>{
    return(
        <div className="min-h-screen flex flex-col  items-center mx-auto w-11/12 justify-center ">
            <h1 className="text-3xl text-center mx-auto justify-center font-bold text-red-300">Error 404</h1>
          
          <img src="/error.png" alt="" />

           <NavLink  to="/"  className="btn bg-pink-300 ">Back to Home</NavLink>
        
           


        </div>
    )
}

export default  ErrorPage;