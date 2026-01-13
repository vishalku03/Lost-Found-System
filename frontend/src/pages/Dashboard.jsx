

import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import ItemCard from "../components/ItemCard";

export default function Dashboard() {
  
  const role = (localStorage.getItem("role") || "").toLowerCase();

  if (role === "admin") {
    return <Navigate to="/admin" replace />;
  }

  const [items, setItems] = useState([]);

  useEffect(() => {
    api.get("/items").then(res => setItems(res.data));
  }, []);

  const lostItems = items.filter(item => item.type === "lost");
  const foundItems = items.filter(item => item.type === "found");

  return (
    <>
      <Navbar />

      {/* BACKGROUND */}
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 px-6 py-8">
        <div className="max-w-7xl mx-auto space-y-8">

          {/* USER ACTION BAR */}
          <div className="flex gap-3">
            <Link
              to="/create"
              className="bg-slate-900 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition"
            >
              Report Lost / Found
            </Link>

            <Link
              to="/matches"
              className="bg-white border border-slate-300 text-slate-800 px-5 py-2 rounded-md text-sm font-medium hover:bg-slate-100 transition"
            >
              View Matches
            </Link>
          </div>

          {/* EMPTY STATE */}
          {lostItems.length === 0 && foundItems.length === 0 && (
            <div className="text-center text-slate-500 mt-20">
              No active lost or found items
            </div>
          )}

          {/* LOST ITEMS */}
          {lostItems.length > 0 && (
            <section className="bg-white border border-slate-200 rounded-lg p-6">
              <h2 className="text-base font-semibold text-slate-900 mb-4">
                Lost Items
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {lostItems.map(item => (
                  <ItemCard key={item._id} item={item} />
                ))}
              </div>
            </section>
          )}

          {/* FOUND ITEMS */}
          {foundItems.length > 0 && (
            <section className="bg-white border border-slate-200 rounded-lg p-6">
              <h2 className="text-base font-semibold text-slate-900 mb-4">
                Found Items
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {foundItems.map(item => (
                  <ItemCard key={item._id} item={item} />
                ))}
              </div>
            </section>
          )}

        </div>
      </div>
    </>
  );
}
