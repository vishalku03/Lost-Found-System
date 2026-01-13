
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); 
    navigate("/login");   
  };

  return (
    <nav className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center shadow-sm">
      
      {/* 1. LOGO (Click karne par Home/Dashboard par layega) */}
      <Link to="/dashboard" className="no-underline">
        <h1
          className="
            text-2xl md:text-3xl
            font-extrabold
            text-red-600
            tracking-tight
            drop-shadow-sm
            cursor-pointer
          "
        >
          Lost & Found
        </h1>
      </Link>

      
      <div className="flex items-center gap-6">
        
        {/* VIEW MATCHES LINK */}
        <Link 
          to="/matches" 
          className="text-slate-600 hover:text-red-600 font-medium transition"
        >
          View Matches
        </Link>

        {/* ✅ NEW: MY CLAIMS LINK (Yahan Status Dikhega) */}
        <Link 
          to="/my-claims" 
          className="text-slate-600 hover:text-red-600 font-medium transition"
        >
          My Claims
        </Link>

        {/* REPORT BUTTON */}
        <Link 
          to="/create" 
          className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition text-sm font-medium"
        >
          Report Lost / Found
        </Link>

        {/* LOGOUT BUTTON */}
        <button
          onClick={handleLogout}
          className="text-sm font-medium text-red-600 border border-red-200 px-4 py-2 rounded-lg hover:bg-red-50 transition"
        >
          Logout
        </button>

      </div>

    </nav>
  );
}