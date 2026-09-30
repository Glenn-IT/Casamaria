# 🌊 How to Run Casa Maria on Localhost

This project is built with **React**, **Vite**, and **Tailwind CSS**. You can run it on your local machine using either the **Vite Development Server** (recommended for instant live reload) or directly through **XAMPP Apache**.

---

## 📋 Prerequisites

- **Node.js** (v18.0.0 or newer — v24+ is already installed)
- **Web Browser** (Chrome, Edge, Firefox, Brave, etc.)
- **XAMPP** (Optional, if you wish to access via Apache at `http://localhost/Casamaria/`)

---

## 🚀 Method 1: Using Vite Dev Server (Recommended)

This is the fastest method with Hot Module Replacement (HMR). Any changes you make in code will instantly update in your browser.

### 1. Open Terminal / PowerShell
Navigate to the project directory:
```powershell
cd C:\xampp\htdocs\Casamaria
```

### 2. Start the Development Server
Run:
```bash
npm run dev
```

### 3. Open in Browser
Open your browser and navigate to:
```
http://localhost:5173/
```

---

## 🌐 Method 2: Using XAMPP Apache

Because this project is located in `C:\xampp\htdocs\Casamaria`, you can also serve it through your local Apache server.

### 1. Start Apache in XAMPP
1. Open the **XAMPP Control Panel**.
2. Click **Start** next to **Apache** (ensure the indicator turns green).

### 2. Build the Production Bundle (Already Built)
If you made any changes to the code, compile the production build:
```powershell
npm run build
```

### 3. Open in Browser
Navigate directly to:
```
http://localhost/Casamaria/
```
*Note: The included `index.php` will automatically direct your browser to the optimized React build in `dist/`.*

---

## 🛠 Available NPM Scripts

In the project root (`C:\xampp\htdocs\Casamaria`), you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with instant reload at `http://localhost:5173/` |
| `npm run build` | Compiles and minifies the React and Tailwind code into the `dist/` folder |
| `npm run preview` | Runs a local web server to preview the production build in `dist/` |

---

## 🎨 Key Features & Controls

- **1-Click Text Switcher**: In the top navigation bar, toggle between **Villa** (Curated Beachfront Villa Edition) and **Lorem** (Latin Lorem Ipsum Edition as requested in `note.md`).
- **Interactive Suite Modals**: Click on any of the 6 accommodation cards to view detailed floor area, capacities, nightly rates, and full inclusion amenities.
- **Curated Gallery & Lightbox**: Filter photos by category (*All, Pool & Deck, Suites, Beach, Living, Outdoor*) and click any image to view it full-screen.
- **Reservation Desk**: Fill out the check-in/out dates, guest count, and suite preference in the booking section to submit an inquiry.
- **Mobile Responsive**: Fully responsive layout with custom slide-out mobile drawer.

---

## ❓ Troubleshooting

- **Port 5173 already in use**:
  Vite will automatically try the next available port (e.g., `http://localhost:5174/`). Check your terminal output for the exact URL.
- **Changes not showing in XAMPP (`http://localhost/Casamaria/`)**:
  Remember to run `npm run build` whenever you make changes so that the production files in `dist/` are updated.
