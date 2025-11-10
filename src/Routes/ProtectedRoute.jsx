import React, { useContext } from "react";
import {Navigate, useLocation } from "react-router"
import { AuthContext } from "../Context/AuthContext"; 


const ProtectedRoute = ({children})=>{
    const {user,loading}=useContext(AuthContext);
    const location= useLocation();

    if(loading) return 
    <div className="p-6">Checking Auth details</div>
    if(!user) return <Navigate to="/login" state={{ from: location.pathname }} replace >
</Navigate>

  return children;
};

export default ProtectedRoute;