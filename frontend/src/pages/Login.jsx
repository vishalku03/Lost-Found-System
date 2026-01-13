
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await api.post("/auth/login", { email, password });

      let userRole = res.data.role;

      if (email.toLowerCase() === "admin@lostfound.com") {
        userRole = "admin";
      }

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", userRole); 

      if (userRole === "admin") {
        console.log("Redirecting to Admin Dashboard...");
        navigate("/admin", { replace: true });
      } else {
        console.log("Redirecting to User Dashboard...");
        navigate("/dashboard", { replace: true });
      }

    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="bg-white p-8 rounded-xl w-96 shadow-lg">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Login
        </h2>

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        {/* ERROR MESSAGE */}
        {error && (
          <p className="text-red-600 text-sm mb-3 text-center">
            {error}
          </p>
        )}

        {/* LOGIN BUTTON */}
        <button
          onClick={submit}
          disabled={loading}
          className="w-full bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-800 transition disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* LINKS */}
        <div className="mt-4 text-sm text-center">
          <Link
            to="/forgot-password"
            className="text-slate-600 hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        <div className="mt-2 text-sm text-center">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-slate-900 hover:underline"
          >
            Create account
          </Link>
        </div>

      </div>
    </div>
  );
}