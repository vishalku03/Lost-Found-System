import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";

export default function MyClaims() {
  const [claims, setClaims] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyClaims = async () => {
      try {
        const res = await api.get("/claims/my-claims", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        });
        setClaims(res.data);
      } catch (err) {
        console.error("Error fetching claims", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMyClaims();
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-50 px-6 py-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-800 mb-6">My Claim Status 📋</h1>

          {loading ? (
            <p>Loading status...</p>
          ) : claims.length === 0 ? (
            <div className="bg-white p-6 rounded-lg shadow text-center text-slate-500">
              <p>You haven't claimed any items yet.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {claims.map((claim) => (
                <div key={claim._id} className="bg-white p-5 rounded-lg shadow border border-slate-200 flex justify-between items-center">
                  
                  {/* Left Side: Item Info */}
                  <div>
                    <h3 className="font-bold text-lg text-slate-800">
                      {claim.itemId ? claim.itemId.title : "Item Removed"}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">
                      Proof you sent: <span className="italic">"{claim.proof}"</span>
                    </p>
                    <p className="text-xs text-slate-400 mt-2">
                      Date: {new Date(claim.createdAt).toLocaleDateString()}
                    </p>
                  </div>

                  {/* Right Side: Status Badge */}
                  <div className="text-right">
                    <span className="block text-xs text-slate-400 uppercase mb-1">Status</span>
                    
                    {/* STATUS LOGIC */}
                    {claim.status === "approved" && (
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold border border-green-200">
                        ✅ Approved
                      </span>
                    )}
                    {claim.status === "rejected" && (
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold border border-red-200">
                        ❌ Rejected
                      </span>
                    )}
                    {claim.status === "pending" && (
                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-bold border border-yellow-200">
                        ⏳ Pending
                      </span>
                    )}
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}