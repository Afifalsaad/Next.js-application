## 🐾 Wildlife Conservation Web Application

A modern full-stack web application built with Next.js (App Router) and NextAuth.js, focused on wildlife conservation.
Users can explore animal information, view detailed pages, and submit conservation concerns with authentication support (Credentials & Google).
<br/>


---
## 📌 Project Description

This project is a wildlife-focused platform where users can:

- Browse a list of animals

- View detailed information about each animal

- Submit conservation-related concerns (authenticated users only)

- Log in using email/password or Google authentication

The application follows industry-standard Next.js architecture, combining Server Components and Client Components for performance and scalability.

## Live Link - https://next-js-application-psi.vercel.app/
<br/>

---
## ⚙️ Setup & Installation
1️⃣ Clone the repository
```bash
git clone https://github.com/afifalsaad/
Next.js-application.git
cd your-repo-name
```

2️⃣ Install dependencies
```bash
npm install
```

3️⃣ Environment variables : <br/>
Create a .env file in the root directory and add
```bash
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

MONGODB_URI=your_mongodb_connection_string
DB_NAME=your_database_name
```

4️⃣ Run the development server
```bash
npm run dev
```
App will be available at:
```bash
http://localhost:3000
```

5️⃣ Production build
```bash
npm run build
npm start
```
<br/>

---
## 🧭 Route Summary

| Route | Description |
| :--- | :--- |
| `/` | Home page |
| `/animals` | Displays all animals |
| `/animals/[id]` | Animal details page |
| `/login` | User login page |
| `/addConcern` | Submit wildlife concern (protected route) |
<br/>

---
## ✨ Implemented Features

- Authentication with NextAuth.js

  - Credentials login

  - Google OAuth login

- Callback URL handling (redirect after login/logout)

- Protected routes for authenticated users

- Dynamic animal listing & details pages

- Concern submission form

- MongoDB database integration

- Responsive UI using Tailwind CSS & DaisyUI

- Toast notifications for user actions
<br/>

---
## 🧩 Feature Explanations
Authentication :

- Users can sign in using:

  - Email & password (Credentials Provider)

  - Google account (Google Provider)

- Authenticated users can submit wildlife-related concerns with:

  - Personal information

  - Animal name

  - Description of the concern

Session handling is managed using NextAuth, with secure cookies.
<br/>

---
## 🔁 Redirect after Login / Logout

- If a user tries to access a protected page, they are redirected to /login.

- After successful login, the user is redirected back to the original page using callbackUrl.
<br/>

---
## 🛡️ Protected Routes

Pages like Add Concern are accessible only to authenticated users.<br/>
Unauthenticated users are automatically redirected to the login page.
<br/>

---
## 🚀 Tech Stack

- Next.js 16 (App Router)

- NextAuth.js

- React

- MongoDB

- Tailwind CSS

- DaisyUI
<br/>

---
## 📦 Deployment

The application is fully compatible with Vercel and follows best practices for production deployment.
