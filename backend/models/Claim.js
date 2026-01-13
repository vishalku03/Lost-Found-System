import mongoose from "mongoose";

const claimSchema = new mongoose.Schema({
 
  itemId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Item", 
    required: true 
  },

  claimantId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  },

  proof: { 
    type: String, 
    required: true 
  },

  status: { 
    type: String, 
    enum: ["pending", "approved", "rejected"], 
    default: "pending" 
  }
}, { timestamps: true }); 

export default mongoose.model("Claim", claimSchema);