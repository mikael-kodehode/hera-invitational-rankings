# 🏆 Hera's Invitational Rankings (2026)

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=fff" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=fff" alt="Vite"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=fff" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=fff" alt="Supabase"/>
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=fff" alt="Vercel"/>
</p>

Welcome to **Hera's Invitational Rankings**! This is a community fan project built to track the progress of invitees for Hera's 2026 Tournament.

The main goal of this app is to make it incredibly easy for fans to follow their favorite players, check out recent stream clips, and see how everyone is stacking up. Beyond tracking the stats, this project is a playground for experimenting with modern web development tools and just having a genuinely good time writing clean, automated code.

I am very much a hobbyist so a lot of the code is repetive for simplicity and easier to debug. The goal was speed as this project will obsolete soon, but I will probably work on it even after the tournament.

---

## ✨ Features

- **Live Invitees Tracker:** Up-to-date look at the tournament invitees and their progress.
- **Twitch Clips Integration:** Automatically surfaces recent tournament-related clips using the Twitch API.
- **Fully Open Source:** Built by a fan, for the fans, with an MIT license.
- **Automated Continuous Deployment:** Seamless updates hooked up via Vercel.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend/Runtime** | JavaScript / Node / Supabase Edge Runtime |
| **Hosting & Deployment** | Vercel (with automated preview and production pipelines) |
| **Database** | Supabase databases |
| **Data Sources** | Twitch API (Helix Endpoints) and Libre Match API (Worlds edge link - https://librematch.github.io/wiki/rlink) |

---

## 🚀 Getting Started Locally

To run this project locally, follow these steps:

### 1. Clone the Repository
```bash
git clone https://github.com/mikael-kodehode/hera-invitational-rankings.git
cd hera-invitational-rankings
```

### 2. Install Dependencies
```bash
cd hera-invitational-rankings
npm install
```

### 3. Start the Dev Server
```bash
npm run dev
```

### Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local dev server |
| `npm run build` | Type-check + production build |
| `npm run preview` | Preview production build locally |

---

## 📄 License

[MIT](LICENSE)
