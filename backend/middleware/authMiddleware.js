
import jwt from "jsonwebtoken";
import User from "../models/User.js"; 

export default async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id || decoded.user?.id).select("-password");

    if (!user) {
      return res.status(401).json({ message: "User not found in database" });
    }

    req.user = user; 
    
    next();
  } catch (error) {
    console.error("Auth Error:", error.message);
    return res.status(401).json({ message: "Invalid Token" });
  }
};