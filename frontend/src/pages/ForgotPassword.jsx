import { useState } from "react";
import api from "../api/axios";
import Input from "../components/Input";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const submit = async () => {
    await api.post("/auth/forgot-password", { email });
    setMsg("Reset link sent to your email");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-800">
      <div className="bg-white p-8 rounded-xl w-96">
        <h2 className="text-xl font-bold mb-4">Forgot Password</h2>

        <Input label="Email" onChange={e => setEmail(e.target.value)} />

        <button
          onClick={submit}
          className="mt-4 w-full bg-primary text-white py-2 rounded-lg"
        >
          Send Reset Link
        </button>

        {msg && <p className="text-green-600 text-sm mt-3">{msg}</p>}
      </div>
    </div>
  );
}
