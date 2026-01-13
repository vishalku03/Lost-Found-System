

import express from "express"; 
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import User from "./models/User.js"; 

import authRoutes from "./routes/authRoutes.js";
import itemRoutes from "./routes/itemRoutes.js";
import adminRoutes from "./routes/adminRoutes.js"; 
import claimRoutes from "./routes/claimsRoutes.js"; 

import seedAdmin from "./config/seedAdmin.js";    

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/claims", claimRoutes); 


app.get("/fix-admin", async (req, res) => {
  try {
    const email = "admin@lostfound.com"; 
    
    const user = await User.findOneAndUpdate(
      { email: email },
      { role: "admin" }, 
      { new: true }
    );
    res.json({ message: "Admin Role Fixed!", user });
  } catch (err) {
    res.json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;

connectDB().then(async () => {
  await seedAdmin(); 
  app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
  );
});