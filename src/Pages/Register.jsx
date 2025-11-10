import React, { useState } from "react";
import { NavLink } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { auth, googleProvider } from "../Firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from "firebase/auth"

const Register=()=>{

    const [submitting,setSubmitting]=useState(false);
    const [error,setError]= useState(""); 

    
     const [pwd,setPwd]=React.useState("");
         const [pwdFocused,setPwdFocused]=React.useState(false);
    
         const showHint = pwdFocused || pwd.length>0;

    const onRegister = async(e)=>{
        e.preventDefault();
        setError("");
        setSubmitting(true);
        try{
            const form = e.currentTarget;
            const name = form.name.value;
    const photoUrl = form.photoUrl.value || "";
    const email = form.email.value;
    const password = form.password.value;
        

        
    const cred = await createUserWithEmailAndPassword(auth , email , password);

    await updateProfile(cred.user,{displayName: name, photoURL: photoUrl})

    alert("Registration Succesfull!!")
    } catch(err){
        setError(err.message || "Registration Failed ")
    }finally{
        setSubmitting(false);
    }
}
    const onGoogle = async () => {
  setError("");
  setSubmitting(true);

  try {
    await signInWithPopup(auth, googleProvider);
    alert("Signed in with Google!");
    // (optional) navigate to home/profile later
  } catch (err) {
    setError(err.message || "Google sign-in failed");
  } finally {
    setSubmitting(false);
  }
};




   
    return(
       
        <div className="flex justify-center items-center min-h-screen bg-blue-100">
       
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h2 className="text-2xl font-semibold text-[#3b3e3d] ">Register your Account</h2>

        
        <form className="fieldset space-y-3" noValidate onSubmit={onRegister}>

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

             <label className="label cursor-pointer justify-start gap-2">
    <input type="checkbox" defaultChecked className="checkbox "  />
    Accept our Terms & Condition
  </label>
          <button type="submit" className="btn bg-[#3b3e3d] mt-4 text-white" disabled={submitting}>{submitting ? "Registering..." : "Register"}
  </button>
 
    < button
    type="button"
    className="btn btn-outline w-full text-[#3b3e3d] mb-3"
    onClick={onGoogle}
    disabled={submitting}
  >
    <FcGoogle className="text-xl" /> Sign in with Google
  </button>
 
 {error && <p className="text-red-600 text-sm">{error}</p>}

  <p className="text-center font-semibold text-primary py-2">
    Already Have An Account?{" "}
    <NavLink to="/login" className="text-secondary">
      Login
    </NavLink>
  </p>
</form>

      </div>
       </div>

       </div>
    )
}

export default  Register;