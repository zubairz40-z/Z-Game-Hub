
// src/Pages/MyProfile.jsx
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";

import { NavLink } from 'react-router';



const MyProfile=()=>{
    const {user} = useContext(AuthContext)
    useEffect(()=>{
        document.title="Gamehub | My Profile"},[])

        if(!user ) return null;

        return(
            <div className="bg-blue-200 min-h-screen">
            <div className=" max-w-4xl mx-auto p-10 ">
                <div className="flex items-center gap-5">
                    <img src={user.photoURL} alt="" className="w-100 h-100 object-cover"/>

                <div className="items-center text-left justify-center gap-5">
                <h2 className="text-2xl m-5">{user.displayName}</h2>
                <p className="text-2xl m-5">{user.email}</p>
                < NavLink to="updateprofile" className="btn btn-primary w-full text-xl">Update Info</NavLink>
            </div>
          </div>
         
       </div>
       </div>


        )
    }
export default MyProfile;