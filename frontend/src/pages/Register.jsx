import { useState } from "react";
import api from "../api/axios";
import Input from "../components/Input";
import {
  validateEmail,
  validateName,
  validatePassword
} from "../utils/validators";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const submit = async () => {
    if (!validateName(form.name))
      return setError("Invalid name");

    if (!validateEmail(form.email))
      return setError("Invalid email");

    if (!validatePassword(form.password))
      return setError("Password too short");

    try {
      await api.post("/auth/register", form);
      alert("Registered successfully");
    } catch (err) {
      setError(err.response?.data?.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600">
      <div className="bg-white p-8 rounded-xl w-96 shadow-xl">
        <h2 className="text-2xl font-bold mb-4">Create Account</h2>

        <Input label="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
        <Input label="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
        <Input label="Password" type="password" onChange={e => setForm({ ...form, password: e.target.value })} />

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <button
          onClick={submit}
          className="mt-4 w-full bg-primary text-white py-2 rounded-lg hover:opacity-90"
        >
          Register
        </button>
      </div>
    </div>
  );
}


