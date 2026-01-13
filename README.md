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

--------------------------------

## ✨ Key Features:-

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
  
--------------------------------

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

--------------------------------

### Work-Flow :-
* **User-->** Login/Register.
* **Login/Register-->** Report_Item;
* **Dashboard-->** For secure authentication and authorization.
* **Auto_Match_System-->** View_Matches;
* **View_Matches-->** Submit_Claim;
* **Submit_Claim-->** Admin_Verification;
* **Admin_Verification-->** Approve_Reject;
* **Approve_Reject-->** Item_Returned;


--------------------------------
### Scenario: Recovering a Lost Pen : -
* User A reports a lost pen at the library.
* User B reports a found pen at the library.
* System runs the Auto-Match Logic.
* User A sees the pen in the Matches tab
* User A submits proof: "It is a blue Parker pen".
* Admin reviews the claim in the dashboard.
* Admin clicks Approve.
* Admin_Verification-->Approve_Reject;
* User A sees the status updated to ✅ Approved.


--------------------------------
### Installation & Backend Setup :-
* git clone https://github.com/vishalku03/lost-found-system.git
* cd lost-found-system
* cd backend
* npm install

  
* **Create a .env file inside the backend folder**.
* PORT=5000
* MONGO_URI=your_mongodb_connection_string
* JWT_SECRET=your_super_secret_key
* ADMIN_EMAIL=admin@email.com
* Start the Server
* npm start
* **Admin Workflow:**  Controlled approval system for claims.

--------------------------------

### Installation & Frontend Setup :-
* cd ../frontend
*  npm install
* npm run dev   # or npm start
* 
--------------------------------

### Technical Note : -
* **This project was built to demonstrate production-level coding practices:** 
* **MVC Architecture:**  Clean separation of concerns in the backend.**
* **Scalability:**  The database schema allows for thousands of items without performance hits.**
* **Security First:**  Passwords are never stored in plain text; API routes are protected.**
* Real-World Logic:** The "Auto-Match" and "Claim Verification" features solve actual business logic problems, moving beyond simple CRUD operations.
  
--------------------------------
  
###  Future Enhancements : -
* **Email Notifications:** Notify users via email when a match is found.
* **Image Upload:** Integration with Cloudinary for uploading item photos.
* **Chat System:** Direct messaging between Finder and Claimant.

--------------------------------
### Notes :-
* **This project demonstrates production-level full-stack practices.**
* **MVC Architecture:** Clean separation of concerns.
* **Scalability:** Database design supports thousands of items.
* **Security First:** Password hashing & protected API routes.
* **Real-World Logic:** Auto-Match & Claim Verification beyond CRUD.
* **.Admin Workflow:**  Controlled approval system for claims.

--------------------------------

### Contact : -
* **vishalk00012@gmail.com**
* **Vishal Kumar**
* **Full Stack Developer | MERN Stack Enthusiast**

--------------------------------

### Project Structure : -
```text
Lost-Found-System/
├── frontend/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── routes/
│       └── api/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── middleware/
│
└── README.md


