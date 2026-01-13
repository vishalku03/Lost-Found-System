# 🧠 Lost & Found System (MERN Stack)

![MERN Stack](https://img.shields.io/badge/Stack-MERN-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Production%20Ready-green?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-orange?style=for-the-badge)

A **modern, full-stack Lost & Found web application** built from scratch using the  
**MERN stack (MongoDB, Express, React, Node.js)**.

This system replaces inefficient physical notice boards with a **secure digital platform** that supports **auto-matching** and **admin-verified claims**.


## 📌 Problem Statement
In colleges, offices, and public spaces, recovering lost items is chaotic.
* **Physical Notice Boards:** Hard to search and easy to miss.
* **Manual Coordination:** Inefficient and time-consuming.
* **False Claims:** No way to verify if a claimant is the actual owner.

## 💡 The Solution

A centralized digital platform where:

1. Users report **Lost** or **Found** items  
2. The system **auto-matches** items by category and location  
3. Admins verify submitted proof before approval  
4. Secure workflows ensure privacy and accountability  

---

## ✨ Key Features

### 🔐 Authentication & Security
- JWT-based login and signup
- Password hashing using `bcrypt`
- Role-Based Access Control (User / Admin)
- Protected routes using middleware

### 📦 Smart Item Management
- Lost & Found item reporting
- Status lifecycle: `Open → Pending → Approved`
- Category and location-based filtering

### 🔍 Automated Matching
- Matches Lost and Found items automatically
- Uses category + location logic
- Reduces manual search effort

### 🛡️ Claim Verification
- Proof-based claiming system
- Admin dashboard for approval/rejection
- Real-time claim status updates

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
project:
  name: Lost & Found System
  description: >
    A full-stack MERN application that helps users report lost and found items,
    automatically matches them, and enables secure claim verification
    through an admin approval workflow.

=======
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


📌 Scenario: Recovering a Lost Pen : -

1.User A reports a lost pen at the library.
2.User B reports a found pen at the library.
3.System runs the Auto-Match Logic.
4.User A sees the pen in the Matches tab.
5.User A submits proof: "It is a blue Parker pen".
6.Admin reviews the claim in the dashboard
7.Admin clicks Approve.
8.User A sees the status updated to ✅ Approved.


Installation & Setup: -
User A sees the pen in their "Matches" tab and clicks Claim.

User A enters proof: "It is a blue Parker pen."

Admin reviews the claim in the Dashboard.

Admin clicks Approve.

User A sees the status change to ✅ Approved.

###🚀 Installation & Setup : -

Follow these steps to run the project locally.
✅ Prerequisites
Node js installed
MongoDB (local) or MongoDB Atlas URI

git clone https://github.com/vishalku03/lost-found-system.git
cd lost-found-system
cd backend
npm install

Create a .env file inside the backend folder: -

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
ADMIN_EMAIL=admin@lostfound.com
Start the Server:
npm start


Frontend Setup:-
cd ../frontend
npm install
npm run dev   # or npm start


🗂️ Project Structure:

Lost-Found-System/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routes/
│   │   └── api/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│
└── README.md

<<<<<<< HEAD
👨‍💼###Technical Note:-

This project was built to demonstrate production-level coding practices:
MVC Architecture: Clean separation of concerns in the backend.
Scalability: The database schema allows for thousands of items without performance hits.
Security First: Passwords are never stored in plain text; API routes are protected.
Real-World Logic: The "Auto-Match" and "Claim Verification" features solve actual business logic problems, moving beyond simple CRUD operations.

--------------------------------

🔮 Future Enhancements : -
-----------------------

📧 Email Notifications: Notify users via email when a match is found.
📸 Image Upload: Integration with Cloudinary for uploading item photos.
💬 Chat System: Direct messaging between Finder and Claimant.

📬 Contact : -
Vishal Kumar Full Stack Developer | MERN Stack Enthusiast
📧 vishalk00012@gmail.com
=======

Notes :-

1.This project demonstrates production-level full-stack practices:
2.MVC Architecture – Clean separation of concerns
3.Scalability – Database design supports thousands of items
4.Security First – Password hashing & protected API routes
5.Real-World Logic – Auto-Match & Claim Verification beyond CRUD
6.Admin Workflow – Controlled approval system for claims


🔮 Future Enhancements:-

1.Email notifications when a match is found.
2.Image uploads using Cloudinary.
3.Real-time chat between finder and claimant.

Contact:

Vishal Kumar
Full Stack Developer | MERN Stack Enthusiast
📧 vishalk.shrivastav1@gmail.com

