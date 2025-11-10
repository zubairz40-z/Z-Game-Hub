import React, { useContext } from "react";
import { GiGameConsole } from "react-icons/gi";
import { NavLink } from 'react-router';
import { AuthContext } from "../Context/AuthContext";

const Navbar =()=>{
    const {user ,loading,logout}=useContext(AuthContext)

    return(
        <div className="bg-blue-300">
            <div className="navbar  shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-pink-300 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        
        <li><a>Game Details</a></li>

        <li><a>Login</a></li>
      </ul>
    </div>
    <NavLink to="/"className="btn btn-ghost text-xl"><GiGameConsole /> Game Hub</NavLink >
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li ><NavLink to="/">Home</NavLink></li>
      
      <li ><NavLink to="/developers">Developers</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end flex items-center gap-5">
    { loading ? (
        <span className="loading loading-ring loading-xl"></span>
    ) : user ? (
        <>
        <div className="flex items-center"> 
        <NavLink to="/Myprofile" title={user.displayName || user.email} className="flex items-center gap-2">
            <img src={user.photoURL} alt="profile" className="w-11 h-11 rounded-full object-cover" />

            <span className="hidden sm:block font-medium mx-auto truncate">
          {user.displayName || user.email}
        </span>
        </NavLink>
        </div>
        <button onClick={logout} className="btn ">Logout</button>
        </>
        
    ) : (

        <>
   
    <NavLink to="/login" className="btn  bg-pink-300 ">Login</NavLink>

    <NavLink  to="/register"  className="btn bg-pink-300 ">Register</NavLink> 
    </>
     )}
  </div>
</div>
        </div>
    )
}

export default Navbar;