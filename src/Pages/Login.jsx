import React from "react";
import { NavLink } from "react-router";
import { FcGoogle } from "react-icons/fc";

const Login=()=>{

     const [pwd,setPwd]=React.useState("");
     const [pwdFocused,setPwdFocused]=React.useState(false);

     const showHint = pwdFocused || pwd.length>0;
    return(

        <div className="flex justify-center items-center min-h-screen bg-blue-100">
       
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h2 className="text-2xl font-semibold text-[#3b3e3d] ">Login to your Account</h2>

        <form className="fieldset" noValidate>
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          
          <label className="label text-[#3b3e3d] font-semibold" htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              className="input input-bordered w-full"
              minLength={6}
              pattern="^(?=.*[a-z])(?=.*[A-Z]).{6,}$"
              title="Must include uppercase, lowercase, and be at least 6 characters."
              required
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              onFocus={() => setPwdFocused(true)}
              onBlur={() => setPwdFocused(false)}
              autoComplete="current-password"
            />

            {showHint && (
                <p className="text-xs text-gray-500 mt-1">Must include uppercase, lowercase, and be at least 6 characters</p>
        
            )}




          <div><NavLink to="/forgotpassword" className="link link-hover">Forgot password?</NavLink></div>
          <button  type="submit" className="btn bg-[#3b3e3d] mt-4 text-white">Login</button>

           <button type="button" className="btn btn-outline w-full text-[#3b3e3d] ">
              Continue with Google <FcGoogle />
            </button>
<p className="text-center font-semibold text-primary py-2">


              Don't Have An Account? {"  "}
              <NavLink to="/register"> <span className="text-secondary"> Register</span></NavLink>
            </p>
        </form>
      </div>
       </div>

       </div>
    )
}

export default  Login;