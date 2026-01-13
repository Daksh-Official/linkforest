# 🌲 LinkForest – A Linktree Clone

**LinkForest** is a customizable link management platform that lets users create a single profile page to share all their important links — similar to Linktree.  
Built with **Next.js**, **MongoDB**, and **TailwindCSS**, it offers both a clean UI and scalable backend.

---

## 📸 Demo

![Home](https://github.com/Daksh-Official/linkforest/blob/main/screenshots/screenshot1.png?raw=true)

---

## 🚀 Features

- 🌐 Create your own unique profile handle 
- 🔗 Add unlimited links
- 🧩 Custom titles, URLs
- 🎨 Responsive, minimalist UI built with TailwindCSS
- 💾 MongoDB backend for persistent storage
- ⚡ Server-side rendering for faster load and better SEO

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | Next.js (React 18, App Router) |
| Styling | TailwindCSS |
| Database | MongoDB (via Mongoose or MongoDB Driver) |

---

## 📂 Folder Structure

linkforest/<br>
│<br>
├── app/ # Next.js app router pages<br>
├── components/ # Reusable UI components<br>
├── lib/ # Database connection helpers<br>
├── public/ # Static assets (icons, images)<br>
└── README.md

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Daksh-Official/linkforest.git
cd linkforest
```

### Install dependencies
```
npm install
```
### Run the devlopment Server
```
npm run dev
```

App will start on →
👉 http://localhost:3000

## 🔒 Security Notes
1. This project uses a local MongoDB instance by default.
2. Data is shared among all users and not isolated per account.
3. Do not use this in production without proper authentication.
4. Use MongoDB Atlas + NextAuth (or JWT) to enable secure multi-user data separation.

## 🧠 How It Works
=> User creates a unique handle (like @daksh).<br>
=> The app stores their profile and links in MongoDB.<br>
=> Visitors can access the user’s public page at /@handle.<br>
=> Each profile dynamically loads its links from the database.

## 🖼️ Screenshots
![page2](https://github.com/Daksh-Official/linkforest/blob/main/screenshots/screenshot2.png?raw=true)
![page3](https://github.com/Daksh-Official/linkforest/blob/main/screenshots/screenshot3.png?raw=true)

## ✨ Future Improvements

🔑 Add authentication (NextAuth or custom JWT)<br>
🖼️ Enable profile customization (themes, backgrounds, profile pictures)<br>
📊 Add analytics (link clicks, view count)<br>
☁️ Deploy backend on Vercel + MongoDB Atlas<br>
💬 Add bio and social media integration

## 🤝 Contributing

1. Contributions are always welcome!
2. Fork the repo
3. Create your feature branch
4. Commit your changes
5. Push and open a pull request

## 📜 License
This project is licensed under the MIT License.

## 💡 Inspiration
LinkForest was inspired by Linktree and created to learn Next.js + MongoDB integration and server-side rendering.

Made with ❤️ by Daksh
