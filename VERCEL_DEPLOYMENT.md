# 🚀 Deploying Casa Maria Prototype to Vercel

This guide walks you through deploying your **Casa Maria Beachfront Villa** web prototype to **Vercel** so you can share a live, public, high-speed link (`https://your-project.vercel.app`) for your client presentation.

---

## ⚡ Option 1: Deploy via GitHub (Recommended for Client Presentations)

This is the cleanest and most professional approach. Whenever you make an update, pushing to GitHub will automatically update your live Vercel link.

### Step 1: Initialize Git and Commit
Open PowerShell in `C:\xampp\htdocs\Casamaria` and run:

```powershell
git init
git add .
git commit -m "Initial commit: Casa Maria Beachfront Villa prototype"
```

### Step 2: Push to GitHub
1. Go to [GitHub](https://github.com) and create a **New Repository** (e.g., `casamaria-beachfront-villa`).
2. Run the commands shown by GitHub to push your local repository:

```powershell
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/casamaria-beachfront-villa.git
git push -u origin main
```

### Step 3: Connect to Vercel
1. Go to [vercel.com](https://vercel.com) and log in (or sign up with GitHub).
2. Click the **"Add New..."** button in the dashboard and select **"Project"**.
3. Locate your `casamaria-beachfront-villa` repository and click **Import**.
4. Vercel will automatically detect **Vite**:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.
6. In about **30 seconds**, your prototype will be live with a free SSL certificate! 🎉

---

## ⚡ Option 2: Deploy Directly via Vercel CLI (No GitHub Required)

If you need a live link immediately without setting up a GitHub repo:

### Step 1: Run Vercel in Terminal
In `C:\xampp\htdocs\Casamaria`, run:

```powershell
npx vercel
```

### Step 2: Answer the Prompts
- **Set up and deploy?** Press `Y` and Enter.
- **Which scope?** Choose your Vercel account.
- **Link to existing project?** Type `N`.
- **What's your project's name?** Press Enter to keep `casamaria` or type a custom name.
- **In which directory is your code located?** Press Enter for `./`.
- **Want to modify these settings?** Type `N` (Vercel automatically uses `vercel.json` and Vite presets).

### Step 3: Deploy to Production
To make it your main production URL:
```powershell
npx vercel --prod
```
You will instantly receive your live presentation URL (e.g., `https://casamaria.vercel.app`).

---

## 🎯 Pro Tips for Presenting the Prototype

1. **Demonstrate the 1-Click Content Toggle**:
   - In the top-right navbar, demonstrate the **Villa / Lorem** switch.
   - Show how the site supports both curated luxury copy (*"Where Azure Sea Meets Serene Luxury"*) and requested placeholder text (*Lorem Ipsum*).

2. **Highlight the Interactive Luxury Features**:
   - **Preloader Animation**: Refresh the page to show the branding preloader with the expanding gold bar.
   - **Suite Modals**: Click on any of the 6 accommodation cards (*Master Shoreline Suite, Sunset Infinity Pavilion, etc.*) to reveal detailed floor specs, capacities, and amenities.
   - **Visual Gallery & Lightbox**: Filter through categories (*Pool & Deck, Suites, Beach, Living, Outdoor*) and click any photo for the full-screen lightbox preview.
   - **Direct Reservation Form**: Fill out check-in/out dates and guest count to show the real-time quote submission and confirmation message.

3. **Presenting on Mobile Devices**:
   - Open the live Vercel URL on your mobile phone or tablet to showcase the responsive navigation drawer, touch-friendly gallery, and fast loading performance.

---

## ⚙️ Configuration Files Already Included

- [`vercel.json`](vercel.json): Configured with SPA rewrite rules so direct link navigation never returns a 404 error.
- [`.gitignore`](.gitignore): Prevents `node_modules/` and local cache from being uploaded.
- [`vite.config.js`](vite.config.js): Optimized for both local hosting and edge cloud deployment.

---

## 🔧 Troubleshooting: "Command 'npm run build' exited with 126"

### Why this happens:
Exit code 126 on Vercel/Linux means **"Permission Denied"**. This occurs when the `node_modules` folder was committed to GitHub from a Windows machine. Windows file systems do not preserve Linux execute bits (`+x`) for the binary files in `node_modules/.bin/vite`. When Vercel attempts to execute `vite`, the Linux container rejects execution with error 126.

### How this was resolved:
1. Untracked `node_modules/` and `dist/` from Git:
   ```powershell
   git rm -r --cached node_modules dist
   ```
2. Added `.gitignore` to ensure dependencies are never pushed:
   ```powershell
   git add .gitignore vercel.json
   ```
3. Pushed the clean commit to GitHub:
   ```powershell
   git commit -m "fix: remove node_modules and dist from git tracking"
   git push origin main
   ```
4. Vercel now runs a clean Linux `npm install` and executes `npm run build` with full native permissions.

