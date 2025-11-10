// src/Pages/UpdateProfile.jsx
import React from "react";
import { updateProfile } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";

const UpdateProfile = () => {
  const user = auth.currentUser; // safe because route is protected
  const [name, setName] = React.useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = React.useState(user?.photoURL || "");
  const [status, setStatus] = React.useState("idle");
  const [msg, setMsg] = React.useState("");

  React.useEffect(()=>{ document.title = "GameHub | Update Profile"; },[]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading"); setMsg("");
    try {
      await updateProfile(auth.currentUser, { displayName: name, photoURL });
      setStatus("success");
      setMsg("Profile updated!");
    } catch (err) {
      setStatus("error");
      setMsg(err?.message || "Update failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <form onSubmit={onSubmit} className="card bg-base-100 w-full max-w-sm shadow-2xl p-6 space-y-3">
        <h2 className="text-xl font-semibold">Update Information</h2>
        <label className="label">Name</label>
        <input className="input input-bordered w-full" value={name} onChange={(e)=>setName(e.target.value)} />
        <label className="label">Photo URL</label>
        <input className="input input-bordered w-full" value={photoURL} onChange={(e)=>setPhotoURL(e.target.value)} />
        <button className="btn btn-primary w-full" disabled={status==="loading"}>
          {status==="loading" ? "Updating..." : "Update Information"}
        </button>
        {!!msg && <p className={`text-sm ${status==="error" ? "text-red-600" : "text-green-600"}`}>{msg}</p>}
      </form>
    </div>
  );
};
export default UpdateProfile;
