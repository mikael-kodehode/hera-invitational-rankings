# 🤝 Contributing to Hera's Invitational Rankings

First off, thank you for taking the time to contribute! This is a community-driven fan project, and it gets better with every pair of hands involved. 

Please take a moment to review this guide to make the contribution process smooth and fun for everyone.

---

## 💡 How Can I Help?

### 🐛 Reporting Bugs
If you spot a bug or a typo in the player data:
1. Head over to the **Issues** tab.
2. Search to see if someone else has already reported it.
3. If not, open a new issue. Be sure to describe what happened and how to reproduce it.

### ✨ Suggesting Features
Have a cool idea for a new feature, a better layout, or a cool Twitch clip filter? Open an issue and label it as a `feature request`.

### 👩‍💻 Submitting Code Changes
If you're ready to dive into the codebase and write some code:
1. Look for existing issues or open one to discuss your proposed changes.
2. Fork the repository and create your branch from `main`.
3. Keep your changes focused—it's much easier to review small, intentional pull requests than giant updates.
4. PR goes to dev so we can check the preview deployment on Vercel.

---

## 🛠️ Development Guidelines

To keep the codebase clean and consistent, please follow these guidelines:

*   **Code Style:** Please ensure your code is cleanly formatted before submitting. Use arrowfunctions
*   **About typescript:** Types are not enforced strictly, but rather used so you can choose to add if you feel like it. I use it for API types and enums (for some reason enums didn't work, so I made a dictionary)
*   **Environment Safety:** Never, under any circumstances, commit your personal `.env` file or hardcode your Twitch API client secrets. 

---

## 🚀 Pull Request Checklist

Before you submit your Pull Request, make sure you can check off these boxes:

- [ ] My code runs locally BOTH IN EDITOR AND ACTUAL WEB BROWSER without throwing errors. I have noticed in some cases code will run fine in the integrated VSC browser, but it behaves differently in Brave. 
- [ ] I haven't included any private API keys or secrets in the code.
- [ ] My commit messages briefly describe what changed. 
- [ ] (Optional) I've updated the `README.md` if my changes altered how the app sets up or runs.

---

## 💬 Communication & Questions

If you have questions or get stuck while trying to set up the project, feel free to open a discussion or drop a comment on an issue. We're all here to have a good time coding!
