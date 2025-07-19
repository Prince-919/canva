# 🚀 Banavo

A full-stack web application designed for creating, customizing, and managing professional designs with, pre-built templates, and image assets.

---

## 📌 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Installation & Setup](#installation--setup)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)

---

## ✅ About

This is a **MERN (MongoDB, Express, React, Node.js)** application that allows users to:

✅ Customizable Design Editor – Add text, shapes, templates, and images
✅ Image & Template Library – Pre-built templates and backgrounds
✅ Drag-and-Drop UI – Smooth user experience for editing
✅ Responsive Layout – Works seamlessly on all devices
✅ Secure Authentication – Login/Register using JWT
✅ CRUD Operations – Save, edit, and manage designs

---

## ✅ Features

- ✅ Design Editor: Add text, shapes, upload images, and use templates
- ✅ Responsive UI using React + Tailwind CSS
- ✅ Image Upload with Cloudinary integration
- ✅ API Integration for templates and design management
- ✅ Full Authentication using JWT and bcrypt

---

## 🛠 Tech Stack

### 🔹 Frontend

- React.js
- Axios
- TailwindCSS
- HtmlToImage
- React Router

### 🔹 Backend

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT & bcrypt.js
- Cloudinary
- Html to Image Converter
- Formidable

### 🔹 Dev Tools

- Vite, Nodemon, Concurrently

---

## 📂 Project Structure

```
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── config.js
│   │   │   ├── cloudinary.js
│   │   │   ├── db.js
│   │   │   └── index.js
│   │
│   │   ├── controllers/
│   │   │   ├── user.js
│   │   │   ├── design.js
│   │   │   ├── designImage.js
│   │   │   ├── background.js
│   │   │   ├── template.js
│   │   │   ├── image.js
│   │   │   └── index.js
│   │
│   │   ├── models/
│   │   │   ├── user.js
│   │   │   ├── design.js
│   │   │   ├── designImage.js
│   │   │   ├── background.js
│   │   │   ├── template.js
│   │   │   ├── image.js
│   │   │   └── index.js
│   │
│   │   ├── routes/
│   │   │   ├── user.js
│   │   │   ├── design.js
│   │   │   ├── designImage.js
│   │   │   ├── background.js
│   │   │   ├── template.js
│   │   │   ├── image.js
│   │   │   └── index.js
│   │
│   │   ├── middlewares/
│   │   │   ├── auth.js
│   │   │   └── index.js
│   │
│   │   ├── app.js
│   │   └── server.js
│   │
│   └── package.json


frontend/
│
├── public/                # Static files
│   └── index.html
│
├── src/
│   ├── api/
│   │   └── api.js         # API configuration
│
│   ├── components/
│   │   ├── BackgroundImages.jsx
│   │   ├── CreateComponent.jsx
│   │   ├── CreateDesign.jsx
│   │   ├── Element.jsx
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── Images.jsx
│   │   ├── InitialImage.jsx
│   │   ├── LabeledInput.jsx
│   │   ├── Projects.jsx
│   │   ├── Templates.jsx
│   │   ├── ToolButton.jsx
│   │
│   │   ├── home/
│   │   │   └── Items.jsx
│   │
│   │   └── main/
│   │       ├── Shapes.jsx
│   │       ├── TemplateDesign.jsx
│   │       ├── Text.jsx
│   │       └── UploadImage.jsx
│
│   ├── pages/
│   │   ├── Index.jsx
│   │   ├── Main.jsx
│   │   └── Layout.jsx
│
│   ├── hooks/
│   │   ├── index.js
│   │   ├── useFetchBackgroundImage.js
│   │   ├── useFetchDesigns.js
│   │   ├── useFetchImages.js
│   │   └── useFetchTemplates.js
│
│   ├── utils/
│   │   ├── constants.js
│   │   └── index.js
│
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md

```

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

### ✅ 1. Clone the Repository

```javascript
git clone https://github.com/Prince-919/canva.git
cd canva-clone
```

### ✅ 2. Backend Setup

```javascript
cd backend
npm install
```

Create an .env file inside the backend/ folder with the following:

```javascript
PORT =
NODE_ENV =
MONGODB_CONNECTION_STRING =
LOCAL_MONGODB_CONNECTION_STRING =
JWT_SECRET =
CLOUDINARY_NAME =
CLOUDINARY_KEY =
CLOUDINARY_SECRET =

```

Run the backend server:

```javascript
npm run server
```

Run the backend or frontend run both:

```javascript
npm run dev
```

By default, it runs at:

```javascript
http://localhost:5000
```

### ✅ 3. Frontend Setup

Navigate to the frontend folder and install dependencies:

```javascript
cd ../frontend
npm install
```

Start the development server:

```javascript
npm run dev
```

By default, it runs at:

```javascript
http://localhost:5173
```

### ✅ 4. Build for Production

- Frontend

```javascript
npm run client-build
```

- Backend

Deployment-ready after adding production DB and environment variables.
