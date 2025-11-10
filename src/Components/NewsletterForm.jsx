import React from "react";


const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const NewsletterForm = () => {
  const [email, setEmail] = React.useState("");
  const [agree, setAgree] = React.useState(false);
  const [status, setStatus] = React.useState("idle"); 
  const [message, setMessage] = React.useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    // basic validations
    if (!EMAIL_RE.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    if (!agree) {
      setStatus("error");
      setMessage("Please agree to receive emails.");
      return;s
    }

    try {
      setStatus("sending");
      setMessage("");

    
      await new Promise((r) => setTimeout(r, 800));

      setStatus("success");
      setMessage("Thanks! You’re subscribed to Gamehub drops.");
      setEmail("");
      setAgree(false);
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  const isDisabled = status === "sending";

  return (
    <div className="rounded-2xl bg-blue-200 p-6 shadow-sm">
      <h3 className="text-2xl font-bold">Get indie drops in your inbox</h3>
      <p className="text-gray-600 mt-1">
        New releases, dev spotlights, and curated picks — weekly.
      </p>

      <form onSubmit={onSubmit} className="mt-5 space-y-4 mb-5" noValidate>
       
        <label className="form-control w-full">
          <span className="label-text font-medium">Email</span>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={status === "error" && !EMAIL_RE.test(email)}
            required
          />
        </label>

        
        <label className="flex items-center gap-2 mt-5">
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <span className="text-sm text-gray-700">
            I agree to receive Gamehub emails. <span className="text-gray-500">(No spam.)</span>
          </span>
        </label>

        
        <div className="flex items-center gap-3">
          <button
            type="submit"
            className={`btn btn-primary ${isDisabled ? "btn-disabled" : ""}`}
            disabled={isDisabled}
          >
            {status === "sending" ? "Subscribing..." : "Subscribe"}
          </button>

          {status === "success" && (
            <span className="text-green-600 text-sm">{message}</span>
          )}
          {status === "error" && (
            <span className="text-red-600 text-sm">{message}</span>
          )}
        </div>

        {/* Tiny legal note */}
        <p className="text-xs text-gray-500">
          You can unsubscribe anytime. We’ll never share your email.
        </p>
      </form>
    </div>
  );
};

export default NewsletterForm;
