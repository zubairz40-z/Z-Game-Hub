import React from "react";
import { useLocation } from "react-router";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";

const ForgotPassword = () => {
  const location = useLocation();
  const prefill = location.state?.email || "";
  const [email, setEmail] = React.useState(prefill);
  const [status, setStatus] = React.useState("idle");
  const [msg, setMsg] = React.useState("");

  React.useEffect(()=>{ document.title = "GameHub | Forgot Password"; },[]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading"); setMsg("");
    try {
      await sendPasswordResetEmail(auth, email);
      setStatus("success");
      setMsg("Reset link sent! Opening Gmail…");
      window.open("https://mail.google.com", "_blank");
    } catch (err) {
      setStatus("error"); setMsg(err?.message || "Failed to send reset link");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <form onSubmit={onSubmit} className="card bg-base-100 w-full max-w-sm shadow-2xl p-6 space-y-3">
        <h2 className="text-xl font-semibold">Reset your password</h2>
        <input
          type="email"
          className="input input-bordered w-full"
          placeholder="you@example.com"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary w-full" disabled={status==="loading"}>
          {status==="loading" ? "Sending..." : "Send reset link"}
        </button>
        {!!msg && (
          <p className={`text-sm ${status==="error" ? "text-red-600" : "text-green-600"}`}>{msg}</p>
        )}
      </form>
    </div>
  );
};

export default ForgotPassword;
