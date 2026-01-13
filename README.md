# 🧭 Lost & Found System (MERN Stack)

![MERN Stack](https://img.shields.io/badge/Stack-MERN-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Production%20Ready-green?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-orange?style=for-the-badge)

A **modern, full-stack Lost & Found web application** built entirely from scratch using the **MERN stack (MongoDB, Express, React, Node.js)**.

This platform solves the inefficiency of physical notice boards by digitizing the process of reporting lost items, automating the matching process, and providing a secure verification system for claiming belongings.

---

## 📌 Problem Statement
In colleges, offices, and public spaces, recovering lost items is chaotic.
* **Physical Notice Boards:** Hard to search and easy to miss.
* **Manual Coordination:** Inefficient and time-consuming.
* **False Claims:** No way to verify if a claimant is the actual owner.

## 💡 The Solution
A centralized, digital platform where:
1.  **Users** report Lost or Found items.
2.  **The System** auto-matches items based on category and location.
3.  **Admins/Finders** verify proof before handing over the item.
4.  **Secure Flow** ensures data privacy and accountability.

---

## ✨ Key Features

### 🔐 1. Advanced Authentication & Security
* **Secure Signup/Login:** Built from scratch using JWT (JSON Web Tokens).
* **Password Hashing:** Uses `bcrypt` for encrypting passwords.
* **Role-Based Access Control (RBAC):** Distinct interfaces for **Users** and **Admins**.
* **Route Protection:** Middleware to prevent unauthorized access to internal pages.

### 📦 2. Smart Item Management
* **Report Lost/Found:** Intuitive forms to tag items (Pen, Wallet, Electronics, etc.).
* **Status Tracking:** Items move through stages: `Open` → `Pending Claim` → `Approved/Returned`.
* **Category & Location Filters:** Easy sorting of lost items.

### 🔍 3. Automated Matching Algorithm
* **Logic:** The system automatically cross-references "Lost" reports against "Found" reports.
* **Criteria:** Matches based on **Item Category** and **Location**.
* **Result:** Users are notified of potential matches in the "Auto-Match" tab, reducing manual search time.

### 🛡️ 4. Claim & Verification Workflow
* **Proof Submission:** Claimants must submit a description or proof (e.g., "The wallet has a scratch on the back") to claim an item.
* **Admin Dashboard:** A dedicated panel for Admins to:
    * View all pending claims.
    * **Approve** valid claims (Proof matches).
    * **Reject** invalid claims.
* **Live Status Updates:** Users can track if their claim is Pending, Approved, or Rejected in real-time via the "My Claims" page.

---

## 🛠️ Technology Stack

### Frontend (Client-Side)
* **React.js:** Component-based UI architecture.
* **React Router:** For seamless single-page application navigation.
* **Tailwind CSS:** For a responsive, modern, and clean design system.
* **Axios:** For handling HTTP requests and API integration.

### Backend (Server-Side)
* **Node.js & Express.js:** RESTful API architecture.
* **MongoDB (Atlas) & Mongoose:** NoSQL database for flexible data modeling.
* **JWT & Bcrypt:** For secure authentication and authorization.
* **Dotenv:** Environment variable management.

---

## 🧠 System Architecture & Flow

### 🔁 Application Workflow
```mermaid
graph TD;
    User-->Login/Register;
    Login/Register-->Dashboard;
    Dashboard-->Report_Item;
    Report_Item-->Auto_Match_System;
    Auto_Match_System-->View_Matches;
    View_Matches-->Submit_Claim;
    Submit_Claim-->Admin_Verification;
    Admin_Verification-->Approve_Reject;
    Approve_Reject-->Item_Returned;



    Scenario: Recovering a Lost Pen
User A reports a Lost Pen at the Library.

User B reports a Found Pen at the Library.

The system runs the Auto-Match Logic.

User A sees the pen in their "Matches" tab and clicks Claim.

User A enters proof: "It is a blue Parker pen."

Admin reviews the claim in the Dashboard.

Admin clicks Approve.

User A sees the status change to ✅ Approved.

🚀 Installation & Setup
Follow these steps to run the project locally.

Prerequisites
Node.js installed

MongoDB installed locally or a MongoDB Atlas URI

1. Clone the Repository
Bash

git clone [https://github.com/vishalku03/lost-found-system.git](https://github.com/vishalku03/lost-found-system.git)
cd lost-found-system
2. Backend Setup
Bash

cd backend
npm install
Create a .env file in the backend folder:

Code snippet

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
ADMIN_EMAIL=admin@lostfound.com
Start the Server:

Bash

npm start
3. Frontend Setup
Bash

cd ../frontend
npm install
npm run dev  # or npm start
🗂️ Project Structure
Bash

Lost-Found-System/
│
├── frontend/             # React Client
│   ├── src/
│   │   ├── components/   # Reusable UI (Navbar, Cards)
│   │   ├── pages/        # Views (Dashboard, Login, Claims)
│   │   ├── routes/       # Protected & Admin Routes
│   │   └── api/          # Axios configuration
│
├── backend/              # Node/Express Server
│   ├── models/           # Mongoose Schemas (User, Item, Claim)
│   ├── routes/           # API Endpoints
│   ├── controllers/      # Business Logic
│   ├── middleware/       # Auth & Role Checks
│
└── README.md
👨‍💼 Recruiter / Technical Note
This project was built to demonstrate production-level coding practices:

MVC Architecture: Clean separation of concerns in the backend.

Scalability: The database schema allows for thousands of items without performance hits.

Security First: Passwords are never stored in plain text; API routes are protected.

Real-World Logic: The "Auto-Match" and "Claim Verification" features solve actual business logic problems, moving beyond simple CRUD operations.

🔮 Future Enhancements
📧 Email Notifications: Notify users via email when a match is found.

📸 Image Upload: Integration with Cloudinary for uploading item photos.

💬 Chat System: Direct messaging between Finder and Claimant.

📬 Contact
Vishal Kumar Full Stack Developer | MERN Stack Enthusiast
📧 vishalk00012@gmail.com