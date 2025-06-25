
# 🌱 Garden Tips - Frontend

**Garden Tips** is a full-stack web application that allows users to share, view, and manage gardening tips. This repository contains the **frontend** built with **React** and **Tailwind CSS**, providing a smooth and responsive user experience.

> 🔗 **Backend Repository:** [https://github.com/rantu01/garden-tips-backend] 

---

## 🖼️ Features

- 📝 Users can create and share gardening tips
- 📚 View tips added by others
- 🔐 Authentication support (with JWT)
- ✏️ Edit or delete your own tips
- 🔍 Search and filter tips
- 🧑 Dashboard to manage your tips
- 🌗 Dark mode (optional)

---

## ⚙️ Tech Stack

### Frontend:
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)

### Backend:
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [JWT](https://jwt.io/)
- [Mongoose](https://mongoosejs.com/)

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** and **npm**
- **Git**
- Backend server (see backend repo for setup)

### Installation

1. **Clone the frontend repo**
   ```bash
   git clone https://github.com/rantu01/garden-tips.git
   cd garden-tips
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Variables**

   Create a `.env` file in the root of the project and add:

   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

   Make sure this matches your backend URL.

4. **Start the development server**

   ```bash
   npm run dev
   ```

---

## 📁 Folder Structure

```
garden-tips/
├── public/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   ├── main.jsx
├── .env
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 📦 Backend Setup

Follow the instructions in the [backend repository](https://github.com/rantu01/garden-tips-backend) to:

* Set up your MongoDB connection
* Run the API server
* Use environment variables for secrets and database URL
* Enable JWT authentication

---

## 🙋‍♂️ Author

**Rantu Mondal**
🔗 [LinkedIn](https://www.linkedin.com/in/rantubytes)
📧 [rantumondal06@gmail.com](mailto:rantumondal06@gmail.com)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🌿 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Happy Gardening! 🌼

```

---

Let me know if you'd like me to create a similar `README.md` for your backend repo too!
```
