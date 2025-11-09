import React from "react";
import { NavLink } from 'react-router';

const Register=()=>{
    return(
       
        <div className="flex justify-center items-center min-h-screen bg-blue-100">
       
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h2 className="text-2xl font-semibold text-[#3b3e3d] m">Register your Account</h2>

        
        <fieldset className="fieldset">

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

            {/* Password */}
            <label className="label text-[#3b3e3d] font-semibold">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
              required
            />

             <label className="label">
    <input type="checkbox" defaultChecked className="checkbox "  />
    Accept our Terms & Condition
  </label>
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

export default  Register;