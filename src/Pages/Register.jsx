import React from "react";
import { NavLink } from 'react-router';
import { FcGoogle } from "react-icons/fc";

const Register=()=>{

     const [pwd,setPwd]=React.useState("");
         const [pwdFocused,setPwdFocused]=React.useState(false);
    
         const showHint = pwdFocused || pwd.length>0;
    return(
       
        <div className="flex justify-center items-center min-h-screen bg-blue-100">
       
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h2 className="text-2xl font-semibold text-[#3b3e3d] ">Register your Account</h2>

        
        <form className="fieldset space-y-3" noValidate>

            <label className="label text-[#3b3e3d] font-semibold">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              autoComplete="name"
              className="input input-bordered w-full"
              required
            />

             {/* Photo URL */}
            <label className="label text-[#3b3e3d] font-semibold">Photo URL</label>
            <input
              type="url"
              name="photoUrl"
              placeholder="https://example.com/your-photo.jpg"
              className="input input-bordered w-full"
              pattern="https?://.+"
            />
         
            {/* Email */}
            <label className="label text-[#3b3e3d] font-semibold">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="email"
              className="input input-bordered w-full"
              required
            />

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

             <label className="label">
    <input type="checkbox" defaultChecked className="checkbox "  />
    Accept our Terms & Condition
  </label>
          <button type="submit" className="btn bg-[#3b3e3d] mt-4 text-white">Register</button>
<p className="text-center font-semibold text-primary py-2">
       <button type="button" className="btn btn-outline w-full text-[#3b3e3d] mb-3 ">
                    Sign with Google <FcGoogle />
                  </button>
              Already Have An Account? {"  "}
              <NavLink to="/login"> <span className="text-secondary"> Login</span></NavLink>
            </p>
        </form>
      </div>
       </div>

       </div>
    )
}

export default  Register;