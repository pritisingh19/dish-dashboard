#  Dish Dashboard — Full Stack Assignment

A clean and functional **Full Stack Dish Management Dashboard** built using **React**, **Node.js**, **Express**, **MongoDB**, and **Socket.io**.  
This application allows users to view a list of dishes, toggle their published status, and receive **real-time updates** across all connected clients.

---

##  Features

###  Backend (Node.js + Express + MongoDB)
- REST APIs to fetch dishes and update publish status  
- MongoDB schema includes:
  - `dishId`
  - `dishName`
  - `imageUrl`
  - `isPublished`
- Includes a seed script for initial data  
- Real-time updates using Socket.io  

###  Frontend (React + Vite)
- Clean and responsive dashboard UI  
- Shows dish name, image, and status  
- Toggle publish/unpublish  
- Auto UI updates when backend changes  
- Uses Axios for API calls  

---

##  Project Structure

```
dish-dashboard/
│── backend/
│   ├── server.js
│   ├── routes/
│   ├── models/
│   ├── seed.js
│   └── seed-data.json
│
│── frontend/
│   ├── src/
│   ├── public/
│   └── vite.config.js
│
└── README.md
```

---

##  Tech Stack Used

### **Backend**
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- Socket.io  

### **Frontend**
- React.js  
- Vite  
- Axios  
- Socket.io-client  

---

##  API Endpoints

### **GET — Fetch All Dishes**
```
GET /api/dishes
```

### **PATCH — Toggle Publish Status**
```
PATCH /api/dishes/:dishId/toggle
```

### **Socket.io Event**
```
dishUpdated
```

---

##  Running the Project Locally

### **1️ Backend Setup**
```bash
cd backend
npm install
npm run seed   # optional – inserts sample dishes
npm start
```

### **2️ Frontend Setup**
```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:  
**http://localhost:5173**

---

## Submission Requirements (All Covered)

- Working backend APIs  
- Working frontend with dish listing  
- Publish/unpublish functionality  
- Real-time updates using Socket.io *(bonus)*  
- Seed script included  
- Clean folder structure  

---

## Author

**Priti Singh**  
GitHub: https://github.com/pritisingh19

