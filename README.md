# 📈 GitHub Streak Back

Easily recover a missed GitHub contribution day using a backdated Git commit with Node.js.

---

## 🛠️ Prerequisites

Before starting, make sure the following are installed and set up:

- ✅ [Node.js](https://nodejs.org/) installed on your system

- ✅ Git installed

- ✅ An SSH key connected to your GitHub account ([Guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh))

- ✅ Your Git config includes the email associated with your GitHub account:

  ```bash
  git config --global user.email "your-email@example.com"
  ```

  **OR**

- ✅ Connect your GitHub account directly to **VS Code** for easier Git integration:

  * Open VS Code → Go to **Source Control tab** → Click **Sign in to GitHub**
  * Authorize and sync your account — it will handle commits and pushes easily


## 🔧 Step-by-Step Setup

### 1. **Create a Private GitHub Repository**

* Name it: `github-streak-back`
* Set it as **Private**
* Do **not** initialize with README or `.gitignore`


### 2. **Clone the Repository Using SSH**

Open a terminal and run:

```bash
git clone git@github.com:your-username/github-streak-back.git
cd github-streak-back
```

> Replace `your-username` with your actual GitHub username.


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


## 🙌 Purpose Behind This

This project is intended strictly for **educational purposes**.

Please **do not use this repeatedly** to manipulate your contribution graph.
I had a **200+ day streak**, and it broke **accidentally**, which left me really upset — so I used this method once, and it worked.

But the best way to maintain your streak is:

* ✅ Contribute consistently
* ✅ Set reminders if needed
* ✅ Avoid last-minute pushes

---

**🧠 Mindful Reminder**
> Code every day not for the streak, but for the skills — the green squares will follow. ✅
