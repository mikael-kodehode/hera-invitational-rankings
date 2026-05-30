# 🏆 Hera's Invitational Rankings (2026)

Welcome to **Hera's Invitational Rankings**! This is a community fan project built to track the progress of invitees for Hera's 2026 Tournament. 

The main goal of this app is to make it incredibly easy for fans to follow their favorite players, check out recent stream clips, and see how everyone is stacking up. Beyond tracking the stats, this project is a playground for experimenting with modern web development tools and just having a genuinely good time writing clean, automated code.

I am very much a hobbyist so a lot of the code is repetive for simplicity and easier to debug. The goal was speed as this project will obsolete soon, but I will probably work on it even after the tournament.

---

## ✨ Features

*   **Live Invitees Tracker:** Up-to-date look at the tournament invitees and their progress.
*   **Twitch Clips Integration:** Automatically surfaces recent tournament-related clips using the Twitch API.
*   **Fully Open Source:** Built by a fan, for the fans, with an MIT license.
*   **Automated Continuous Deployment:** Seamless updates hooked up via Vercel.

---

## 🛠️ Tech Stack & Architecture

*   **Frontend/Runtime:** JavaScript / Node / Supabase Edge Runtime
*   **Hosting & Deployment:** Vercel (with automated preview and production pipelines)
*   **Database:** Supabase database
*   **Data Sources:** Twitch API (Helix Endpoints) and Libre Match API (Worlds edge link - https://librematch.github.io/wiki/rlink)

---

## 🚀 Getting Started Locally

To run this project locally, follow these steps:

### 1. Clone the Repository
```bash
git clone https://github.com/mikael-kodehode/hera-invitational-rankings.git
cd hera-invitational-rankings

