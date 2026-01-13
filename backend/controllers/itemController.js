
import Item from "../models/Item.js";

const getUserId = (req) => {
  if (!req.user) return null;
  return req.user.id || req.user._id || req.user.userId;
};

export const getItems = async (req, res) => {
  try {
    const userId = getUserId(req);

    console.log("👉 Dashboard Request - My ID:", userId);

    if (!userId) {
      return res.status(400).json({ message: "User ID missing" });
    }

    const items = await Item.find({ createdBy: userId }).sort({ createdAt: -1 });
    
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

export const getMatches = async (req, res) => {
  try {
    const userId = getUserId(req);

    const matches = await Item.find({
      type: "found",
      createdBy: { $ne: userId }, 
      status: { $ne: "resolved" }
    })
    .populate("createdBy", "name email")
    .sort({ createdAt: -1 });

    res.json(matches);
  } catch (err) {
    console.error("Error in getMatches:", err);
    res.status(500).json({ message: "Server Error" });
  }
};

export const createItem = async (req, res) => {
  try {
    if (req.user.role === "admin") {
      return res.status(403).json({
        message: "Admins are not allowed to create lost or found items"
      });
    }

    const userId = getUserId(req);
    
    console.log("👉 Creating Item for User ID:", userId); 

    if (!userId) {
      return res.status(400).json({ message: "Cannot create item: User ID missing" });
    }

    const item = await Item.create({
      ...req.body,
      createdBy: userId 
    });

    res.status(201).json(item);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
};

export const deleteItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    const userId = getUserId(req);

    if (req.user.role === "admin") {
      return res.status(403).json({
        message: "Admins cannot delete items directly"
      });
    }

    if (item.createdBy.toString() !== userId) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await item.deleteOne();

    res.json({ message: "Item marked as resolved" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};