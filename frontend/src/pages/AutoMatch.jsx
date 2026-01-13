
import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";

export default function AutoMatch() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedItem, setSelectedItem] = useState(null); 
  const [proof, setProof] = useState(""); 

  
  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const res = await api.get("/items/match", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        });
        setMatches(res.data);
      } catch (err) {
        console.error("Error fetching matches", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMatches();
  }, []);

  const handleClaimClick = (item) => {
    setSelectedItem(item);
    setProof(""); 
  };

  const handleSubmitClaim = async () => {
    if (!proof.trim()) {
      alert("Please enter some details/proof.");
      return;
    }

    try {
      await api.post("/claims", 
        { itemId: selectedItem._id, proof: proof }, 
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      
      alert("Claim request sent to Admin! Wait for approval.");
      setSelectedItem(null); 
    } catch (err) {
      alert(err.response?.data?.message || "Failed to claim item.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-50 px-6 py-8">
        <div className="max-w-6xl mx-auto">
          
          <h1 className="text-3xl font-bold text-slate-800 mb-6">Found by Others (Matches)</h1>

          {loading && <p>Loading...</p>}

          {!loading && matches.length === 0 && (
            <div className="text-center py-10 text-gray-500">
              <p>No found items from other users yet.</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {matches.map((item) => (
              <div key={item._id} className="bg-white p-5 rounded-xl shadow border border-green-100 hover:shadow-md transition">
                
                <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">
                  FOUND
                </span>

                <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                <p className="text-gray-600 mb-2">{item.description}</p>
                
                <p className="text-xs text-gray-400 mb-4">
                  Found by: {item.createdBy?.name || "Unknown User"}
                </p>
                <p className="text-xs text-slate-500 mb-4">
                   Location: {item.location}
                </p>

                <button
                  onClick={() => handleClaimClick(item)} 
                  className="w-full bg-slate-900 text-white py-2 rounded hover:bg-slate-700 transition"
                >
                  Claim This Item
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* --- POPUP MODAL --- */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-2xl animation-fade-in">
            <h2 className="text-xl font-bold mb-4">Claim: {selectedItem.title}</h2>
            
            <p className="text-sm text-slate-500 mb-2">
              Please provide details to prove this item belongs to you.
            </p>

            <textarea
              className="w-full border border-slate-300 rounded p-3 focus:ring-2 focus:ring-slate-800 outline-none mb-4"
              rows="4"
              placeholder="E.g., It has a scratch on the back, inside the wallet there is an ID card..."
              value={proof}
              onChange={(e) => setProof(e.target.value)}
            />

            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setSelectedItem(null)}
                className="text-slate-600 hover:text-slate-800 font-medium px-4 py-2"
              >
                Cancel
              </button>
              <button 
                onClick={handleSubmitClaim}
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 font-medium"
              >
                Submit Claim
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}