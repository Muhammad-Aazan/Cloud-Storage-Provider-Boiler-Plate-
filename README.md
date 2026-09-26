# 🚀 MongoDB All CRUD Operations API

> **Bio / About:**  
> A clean and complete RESTful API project built with **Node.js**, **Express**, and **MongoDB** (using **Mongoose**). This project demonstrates all core **CRUD (Create, Read, Update, Delete)** operations, database connection setup, modular application structure, and schema design.

---

## 📌 Features

- ⚡ **Full CRUD Capabilities:**
  - **Create:** Insert student/user records into the database.
  - **Read:** Retrieve all stored records dynamically.
  - **Update:** Modify existing records by ID.
  - **Delete:** Remove specific records by ID.
- 🗄️ **MongoDB & Mongoose Integration:** Schema-based data modeling with validation.
- 🧱 **Modular Architecture:** Clean separation of concerns between database configuration, data models, Express routing, and server startup.
- 📦 **Express Middleware:** Handles JSON payload parsing seamlessly.

---

## 🛠️ Tech Stack

- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework:** [Express.js](https://expressjs.com/) (v5)
- **Database:** [MongoDB](https://www.mongodb.com/)
- **ODM:** [Mongoose](https://mongoosejs.com/)

---

## 📁 Project Structure

```text
MongoDB-All-CRUD/
├── src/
│   ├── db/
│   │   └── db.js            # MongoDB database connection configuration
│   ├── models/
│   │   └── note.model.js     # Mongoose schema & model definition
│   └── app.js               # Express application & CRUD route handlers
├── .gitignore               # Git ignored files (node_modules, logs)
├── package.json             # Project metadata and dependencies
├── server.js                # Server entry point (starts listening on PORT)
└── README.md                # Project documentation and guide
```

---

## 🔌 API Endpoints & Documentation

Base URL: `http://localhost:3000`

### 1. Create User Details
* **Method:** `POST`
* **Endpoint:** `/add_user_details`
* **Description:** Creates a new student record in MongoDB.
* **Request Body (JSON):**
  ```json
  {
    "SName": "Aazan",
    "SAge": 20,
    "SEmail": "aazan@example.com"
  }
  ```
* **Response (201 Created):**
  ```json
  {
    "message": "Data created Successfully",
    "Your_Details": {
      "SName": "Aazan",
      "SAge": 20,
      "SEmail": "aazan@example.com"
    }
  }
  ```

---

### 2. Get All User Details
* **Method:** `GET`
* **Endpoint:** `/seeYourDetails`
* **Description:** Retrieves all student records stored in the database.
* **Response (200 OK):**
  ```json
  {
    "message": "Data fetched successfully",
    "Data": [
      {
        "_id": "664f...",
        "SName": "Aazan",
        "SAge": 20,
        "SEmail": "aazan@example.com",
        "__v": 0
      }
    ]
  }
  ```

---

### 3. Update User Details
* **Method:** `PATCH`
* **Endpoint:** `/updateYourDetails/:id`
* **Description:** Updates details for a specific record by MongoDB `_id`.
* **Request Body (JSON):**
  ```json
  {
    "SAge": 21
  }
  ```
* **Response (200 OK):**
  ```json
  {
    "message": "User Details updated successfully"
  }
  ```

---

### 4. Delete User
* **Method:** `DELETE`
* **Endpoint:** `/removeUser/:id`
* **Description:** Deletes a specific record by MongoDB `_id`.
* **Response (200 OK):**
  ```json
  {
    "message": "Note deleted successfully"
  }
  ```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Muhammad-Aazan/MongoDB-All-CRUD.git
cd MongoDB-All-CRUD
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Server
```bash
node server.js
```
The server will start on `http://localhost:3000`.

---

## 👤 Author
- **Muhammad Aazan** - [GitHub Profile](https://github.com/Muhammad-Aazan)
