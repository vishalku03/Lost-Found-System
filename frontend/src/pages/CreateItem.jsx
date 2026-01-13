import { useState } from "react";
import api from "../api/axios";
import Input from "../components/Input";
import Navbar from "../components/Navbar";

export default function CreateItem() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    category: "",
    type: "lost"
  });

  const submit = async () => {
    await api.post("/items", form);
    alert("Item reported successfully");
  };

  return (
    <>
      <Navbar />
      <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">Report Item</h2>

        <Input label="Title" onChange={e => setForm({ ...form, title: e.target.value })} />
        <Input label="Location" onChange={e => setForm({ ...form, location: e.target.value })} />
        <Input label="Category" onChange={e => setForm({ ...form, category: e.target.value })} />

        <textarea
          placeholder="Description"
          className="w-full mt-3 p-3 border rounded-lg"
          onChange={e => setForm({ ...form, description: e.target.value })}
        />

        <select
          className="w-full mt-3 p-3 border rounded-lg"
          onChange={e => setForm({ ...form, type: e.target.value })}
        >
          <option value="lost">Lost</option>
          <option value="found">Found</option>
        </select>

        <button
          onClick={submit}
          className="mt-4 w-full bg-primary text-white py-2 rounded-lg"
        >
          Submit
        </button>
      </div>
    </>
  );
}

