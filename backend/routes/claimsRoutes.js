import express from "express";
import auth from "../middleware/authMiddleware.js";
import Claim from "../models/Claim.js";
import Item from "../models/Item.js";

const router = express.Router();

router.post("/", auth, async (req, res) => {
  try {
    const { itemId, proof } = req.body;
    
    const userId = req.user.id || req.user._id || req.user.userId;

    const item = await Item.findById(itemId);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    const existingClaim = await Claim.findOne({ itemId, claimantId: userId });
    if (existingClaim) {
      return res.status(400).json({ message: "You have already claimed this item." });
    }

    const newClaim = await Claim.create({
      itemId,
      claimantId: userId,
      proof: proof,
      status: "pending" 
    });

    res.status(201).json(newClaim);
  } catch (err) {
    console.error("Create Claim Error:", err);
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/my-claims", auth, async (req, res) => {
  try {
    const userId = req.user.id || req.user._id || req.user.userId;
    
    const claims = await Claim.find({ claimantId: userId })
      .populate("itemId") 
      .sort({ createdAt: -1 });

    res.json(claims);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});


// ADMIN ROUTES 

router.get("/all", auth, async (req, res) => {
  try {
    console.log("---------------------------------");
    console.log("🕵️ Admin Claim Request Received");
    console.log("👤 User Role:", req.user.role); 
    console.log("📧 User Email:", req.user.email);

    if (req.user.role !== "admin") {
      console.log("❌ Access Denied: User is NOT admin.");
      return res.status(403).json({ message: "Access Denied. Admins only." });
    }

    const claims = await Claim.find()
      .populate("itemId")
      .populate("claimantId", "name email")
      .sort({ createdAt: -1 });
    
    console.log(`✅ Found ${claims.length} claims in Database.`);
    
    res.json(claims);
  } catch (err) {
    console.error("❌ Server Error:", err);
    res.status(500).json({ message: "Server Error" });
  }
});

router.put("/:id", auth, async (req, res) => {
  try {
    const { status } = req.body; 

    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access Denied." });
    }

    const claim = await Claim.findById(req.params.id);
    if (!claim) {
      return res.status(404).json({ message: "Claim not found" });
    }

    claim.status = status;
    await claim.save();

    res.json({ message: `Claim marked as ${status}`, claim });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;