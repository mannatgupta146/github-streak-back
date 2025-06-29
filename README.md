# 📈 GitHub Streak Back

Missed a day on GitHub? Don’t worry — this Node.js script helps you bounce back with a clean, backdated commit. It’s not a hack, just an honest fix for those accidental slip-ups.


## 🛠️ Prerequisites

| Requirement                              | Description                                                                                                   |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| ✅ Node.js                                | Install from [nodejs.org](https://nodejs.org/)                                                                |
| ✅ Git                                    | Make sure Git is installed and accessible from the terminal                                                   |
| ✅ SSH Key for GitHub                     | Connect via SSH – [GitHub SSH Guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) |
| ✅ Git Config Email                       | Set your Git email to match your GitHub account:<br>`git config --global user.email "your-email@example.com"` |
| ✅ GitHub Connected to VS Code (Optional) | Sign in via **Source Control** tab → **Sign in to GitHub** → Authorize → Git integration made easy            |


## 🔧 Step-by-Step Setup

### 1. **Create a Private GitHub Repository**

* Name it: `github-streak-back`
* Set it as **Private**
* ✅ Initialize with a README.md
* ❌ Do not add a .gitignore file


### 2. **Clone the Repository Using SSH**

Open a terminal and run:

```bash
git clone git@github.com:your-username/github-streak-back.git
cd github-streak-back
```

**Replace `your-username` with your actual GitHub username.**


### 3. **Initialize a Node.js Project**

```bash
npm init -y
```

### 4. **Install Required Packages**

```bash
npm install jsonfile moment simple-git
```

### 5. **Create the Main Script**

Create a file named `index.js` and copy your code into it.


### 6. **Run the Script**

```bash
node index.js
```

This will:

* Write yesterday's date to `data.json`
* Commit it with the correct backdated timestamp
* Push it to GitHub

### 7. **Make Repository Public**

After the commit is pushed and your streak is updated:

* Go to your repository on GitHub
* Click on **Settings → General**
* Scroll down to **"Danger Zone"**
* Click **Change repository visibility → Make public**

> ⚠️ Only do this **after your commit is pushed**, and only if you're comfortable making the repo public.


✅ Your GitHub contribution square for yesterday should turn green !

> ⏳ *Note: It may take a few hours or even a couple of days to reflect on your profile. Mine took 2 days. For any doubts, feel free to follow and contact me.*

## 📁 Project Structure

```
github-streak-back/
├── data.json         ← Created/updated automatically
├── index.js          ← Main script
├── package.json      ← Node project file
├── package-lock.json ← Dependency tree
└── README.md         ← This file
```

## 🙏 Special Thanks

This video really helped me understand how to make this work.

🎥 **Watch it here**:
[https://youtu.be/\_U52wzAJ2QE](https://youtu.be/_U52wzAJ2QE?si=M6QOhyzAgYgIX6JI)
If you're facing any problems or want a better understanding, check it out!


## 🎯 Purpose of This Project

This project is intended strictly for **educational purposes**.

Please **do not use this repeatedly** to manipulate your contribution graph.
I had a **200+ day streak**, and it broke **accidentally**, which left me really upset — so I used this method once, and it worked.

But the best way to maintain your streak is:

- 🧑‍💻 Contribute consistently
- ⏰ Set reminders if needed
- ⚡ Avoid last-minute pushes

---

**💡 Mindful Reminder**
> Code every day not for the streak, but for the skills — the green squares will follow. ✅