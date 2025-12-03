# 🏕️ Full-Stack Community Platform: YelpCamp Refactored

## Overview

This project is a comprehensive **Full-Stack web application** developed as the capstone for the Colt Steele Web Developer Bootcamp. It functions as a community-driven platform allowing users to find, create, rate, and review campgrounds globally.

This application demonstrates proficiency in the core technologies of the **MEAN/MERN stack components**, focusing on robust data modeling, secure user handling, and complex deployment processes.

**Live Demo:** [https://yelp-camp-app-1gx5.onrender.com/](https://yelp-camp-app-1gx5.onrender.com/)

---

## 🛠️ Key Technologies & Technical Stack

The entire application is built using a modern **JavaScript-centric stack** and deployed on a cloud platform:

| Category | Technology | Purpose Demonstrated |
| :--- | :--- | :--- |
| **Backend** | **Node.js, Express.js** | Handling routing, middleware, and server-side logic. |
| **Database** | **MongoDB, Mongoose** | Data modeling, persistence, and complex data relationships (using **Population**). |
| **Frontend** | **EJS, Bootstrap** | Dynamic rendering of views and responsive front-end design. |
| **Authentication** | **Passport.js** | Implementing secure local user registration, login, and sessions. |
| **External Services** | **Mapbox API** | Geocoding service for converting location text to coordinates and displaying dynamic maps. |
| **External Services** | **Cloudinary** | Secure and scalable third-party image hosting, storage, and retrieval. |
| **Security** | **Helmet, Mongo Sanitize** | Setting Content Security Policy (CSP) headers and sanitizing data against common injection attacks. |
| **Deployment** | **Render** | Professional understanding of cloud hosting, environment variables, and deployment pipelines. |

---

## ✨ Core Application Features

This project showcases mastery of core Full-Stack development concepts:

* **User Authentication:** Secure registration, login, and logout implemented with Passport.js local strategy.
* **Authorization:** Middleware ensuring only the creator of a resource (campground or review) can edit or delete it.
* **CRUD Functionality:** Full **C**reate, **R**ead, **U**pdate, and **D**elete operations for both Campgrounds and Reviews.
* **Data Modeling:** Complex **one-to-many** data relationships achieved using **Mongoose Population** for seamless data retrieval across models (Users $\leftrightarrow$ Campgrounds $\leftrightarrow$ Reviews).
* **Error Handling:** Robust implementation of asynchronous error wrappers (`catchAsync`) and custom Express error handling middleware.

---

## 📈 Analytical & Optimization Focus (Troubleshooting & Maintenance)

While built for development principles, this project was optimized with an **analytical and maintenance mindset**, reflecting critical skills required in a professional setting:

* **Geocoding Integration:** Implemented **server-side geocoding** logic in the update route to ensure map coordinates dynamically update whenever the location text is modified.
* **Library Maintenance:** Successfully resolved deep-rooted **npm dependency conflicts** (`ERESOLVE`) and persistent **connection string deprecation issues** by utilizing flags (`--legacy-peer-deps`) and troubleshooting complex environment variable precedence.
* **Security Best Practices:** All sensitive data (e.g., database keys, secrets) are strictly stored and accessed using **environment variables** (dotenv), demonstrating security-conscious development.
* **Responsive Design:** Implemented a **mobile-first** approach using Bootstrap to ensure seamless performance and high accessibility scores across all devices.

---

## ⚙️ Setup and Local Installation

To run this project locally, follow these steps:

1.  **Clone the Repository:**
    ```bash
    git clone [YOUR_REPO_URL]
    cd yelp-camp
    ```

2.  **Install Dependencies:**
    ```bash
    npm install --legacy-peer-deps
    ```

3.  **Configure Environment Variables:**
    * Create a file named **`.env`** in the root directory.
    * Add your MongoDB Atlas SRV URI and all necessary keys:
        ```env
        DB_URL=mongodb+srv://<USERNAME>:<PASSWORD>@<CLUSTER_NAME>.mongodb.net/yelpcamp?retryWrites=true&w=majority
        SECRET=A_GOOD_SECRET_FOR_SESSIONS
        MAPBOX_TOKEN=pk.eyJ...
        CLOUDINARY_CLOUD_NAME=...
        CLOUDINARY_KEY=...
        CLOUDINARY_SECRET=...
        ```

4.  **Run the Application:**
    ```bash
    node app.js
    ```
    The application will run on `http://localhost:3000`.

---

## 🤝 Contribution & Contact

This project is maintained by Tram Bui.

* **LinkedIn:** https://www.linkedin.com/in/ttbui/
* **Email:** tbtrambui@gmail.com
