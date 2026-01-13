import bcrypt from "bcryptjs";
import User from "../models/User.js";

export default async function seedAdmin() {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) return;

  const adminExists = await User.findOne({ email: adminEmail });
  if (adminExists) return;

  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  await User.create({
    name: "Admin",
    email: adminEmail,
    password: hashedPassword,
    role: "admin"
  });

  console.log("✅ Admin seeded");
}
