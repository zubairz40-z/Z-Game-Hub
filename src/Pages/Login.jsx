import React from "react";
import { NavLink } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../Firebase/Firebase.config";

const Login=()=>{
    



     const [pwd,setPwd]=React.useState("");
     const [pwdFocused,setPwdFocused]=React.useState(false);
     const [status, setStatus] = React.useState("idle"); 
  const [message, setMessage] = React.useState("");

     const showHint = pwdFocused || pwd.length>0;

    const onLogin = async (e)=>{
       

        e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const form = e.currentTarget;
      const email = form.email.value;
      const password = form.password.value;

      await signInWithEmailAndPassword(auth, email, password);

      setStatus("success");
      setMessage("Logged in!");
      console.log("User:", auth.currentUser);
      // TODO: navigate("/") or navigate(location.state?.from || "/")
    } catch (err) {
      setStatus("error");
      setMessage(err?.message || "Login failed");
    }
  };

    
   const onGoogle = async () => {
    setStatus("loading");
    setMessage("");
    try {
      await signInWithPopup(auth, googleProvider);
      setStatus("success");
      setMessage("Logged in with Google!");
      console.log("User:", auth.currentUser);
     
    } catch (err) {
      setStatus("error");
      setMessage(err?.message || "Google sign-in failed");
    }
  };

    

    return(

        <div className="flex justify-center items-center min-h-screen bg-blue-100">
       
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h2 className="text-2xl font-semibold text-[#3b3e3d] ">Login to your Account</h2>

        <form className="fieldset" noValidate onSubmit={onLogin}>
          <label className="label">Email</label>
          <input id="email" name="email" type="email" className="input" placeholder="Email" />
          
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

           <button type="button" className="btn btn-outline w-full text-[#3b3e3d]  " onClick={onGoogle}>
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