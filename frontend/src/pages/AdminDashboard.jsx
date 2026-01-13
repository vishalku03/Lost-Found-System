
import { useEffect, useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [claims, setClaims] = useState([]);
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();

  useEffect(() => {
    fetchClaims();
  }, []);

  const fetchClaims = async () => {
    try {
      const res = await api.get("/claims/all", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      });
      console.log("🔥 Admin Data from API:", res.data); 
      setClaims(res.data);
    } catch (err) {
      console.error("Error fetching claims", err);
      
      if (err.response?.status === 403) navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStatus = async (id, newStatus) => {
    try {
      await api.put(`/claims/${id}`, 
        { status: newStatus },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      
      alert(`Request ${newStatus}!`);
      fetchClaims();
    } catch (err) {
      alert("Error updating status");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Admin Panel 🛡️</h1>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Logout
        </button>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-4">Claim Requests</h2>

        {loading ? (
          <p>Loading requests...</p>
        ) : claims.length === 0 ? (
          <p className="text-slate-500">No pending claims found.</p>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b">
                <th className="p-3">Item</th>
                <th className="p-3">User (Claimant)</th>
                <th className="p-3">Proof Provided</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {claims.map((claim) => (
                <tr key={claim._id} className="border-b hover:bg-slate-50">
                  
                  <td className="p-3 font-medium text-slate-700">
                    {claim.itemId ? claim.itemId.title : <span className="text-red-400 italic">Item Deleted</span>}
                  </td>

                  <td className="p-3">
                    {claim.claimantId ? (
                      <>
                        {claim.claimantId.name} <br/>
                        <span className="text-xs text-slate-400">{claim.claimantId.email}</span>
                      </>
                    ) : (
                      <span className="text-red-400 italic">User Deleted</span>
                    )}
                  </td>

                  <td className="p-3 italic text-slate-600">"{claim.proof}"</td>
                  
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${
                      claim.status === 'approved' ? 'bg-green-100 text-green-700' :
                      claim.status === 'rejected' ? 'bg-red-100 text-red-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {claim.status}
                    </span>
                  </td>

                  <td className="p-3 flex gap-2">
                    {claim.status === 'pending' && (
                      <>
                        <button 
                          onClick={() => handleUpdateStatus(claim._id, "approved")}
                          className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
                        >
                          Approve
                        </button>
                        <button 
                          onClick={() => handleUpdateStatus(claim._id, "rejected")}
                          className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                        >
                          Reject
                        </button>
                      </>
                    )}
                    {claim.status !== 'pending' && <span className="text-slate-400 text-sm">Completed</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}