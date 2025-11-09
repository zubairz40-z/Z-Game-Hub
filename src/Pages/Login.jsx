import React from "react";
import { NavLink } from "react-router";

const Login=()=>{
    return(

        <div className="flex justify-center items-center min-h-screen bg-blue-100">
       
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h2 className="text-2xl font-semibold text-[#3b3e3d] m">Login to your Account</h2>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn bg-[#3b3e3d] mt-4 text-white">Login</button>
<p className="text-center font-semibold text-primary py-2">
              Don't Have An Account? {"  "}
              <NavLink to="/register"> <span className="text-secondary"> Register</span></NavLink>
            </p>
        </fieldset>
      </div>
       </div>

       </div>
    )
}

export default  Login;