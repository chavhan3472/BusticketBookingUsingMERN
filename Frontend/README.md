<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project. -->

# 🚌 Bus Ticket Booking System

A full-stack Bus Ticket Booking web application where users can search buses, view details, and book tickets. Admin can manage buses (add, update, delete).

---

## 🚀 Features

### 👤 User Side:

- 🔍 Search buses by name
- 📅 View available buses
- 🪑 Check seat availability
- 🎫 Book tickets

### 🛠️ Admin Side:

- ➕ Add new bus
- ✏️ Update bus details
- ❌ Delete bus
- 📋 View all buses

---

## 🧑‍💻 Tech Stack

### Frontend:

- React JS
- CSS

### Backend:

- Node.js
- Express.js

### Database:

- MongoDB

### Other:

- Axios
- JWT (Authentication)
- Cookies

---

## 📂 Project Structure

```
BusTicketBooking/
│
├── client/        # React frontend
├── server/        # Node.js backend
├── node_modules/
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/BusTicketBooking.git
```

### 2️⃣ Go to project folder

```
cd BusTicketBooking
```

### 3️⃣ Install dependencies

#### For frontend:

```
cd client
npm install
```

#### For backend:

```
cd server
npm install
```

---

## ▶️ Run Project

### Start Backend:

```
cd server
npm start
```

### Start Frontend:

```
cd client
npm start
```

---

## 🔑 Environment Variables

Create a `.env` file inside `server` folder and add:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 📸 Screenshots

- Home Page
- Bus List
- Admin Panel
- Booking Page

(Add screenshots here if needed)

---

## 🧠 Future Improvements

- 💳 Online Payment Integration
- 📱 Mobile Responsive UI
- 🔔 Email Notifications
- 🧾 Booking History

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

---

## 📄 License

This project is free to use.

---

## 🙌 Author

Made with by Sahil

---
