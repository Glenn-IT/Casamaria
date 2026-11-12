# 🌐 AI Visibility & Agent-Readiness (GEO) Optimization Report

> **Project:** Casa Maria Beach Villa (`casamariaph.com`)  
> **Date:** November 12, 2026  
> **Previous AI Visibility Score:** **61 / 100** (Grade C — Partly Agent-Ready, 12 Issues Found)  
> **Target AI Visibility Score:** **90–95+ / 100** (Grade A — Fully Agent-Ready)

---

## 📌 Executive Summary

Modern search behavior has shifted from keyword-based search (Google traditional links) to **Generative Engine Optimization (GEO)** and **AI-Agent Citations** (ChatGPT, Perplexity, Claude, Google Gemini).

When an AI engine is asked:
> *"Find me a private beach villa in Gonzaga, Cagayan with a pool for 8–16 guests."*

The AI parses the web using specialized criteria: **Crawl Permissions**, **Agent-Native Data (`llms.txt`)**, **Structured Schema (`@graph` JSON-LD)**, **Semantic Headings**, **Commercial Legibility**, and **Real HTTP 404 Status Codes**.

This document outlines all 12 audited issues and the exact engineering fixes implemented to resolve them.

---

## 🛠️ Detailed Breakdown of Fixed Issues

### 1. Agent-Native Content (Score Impact: +7 to +10 Points)

| Issue from Audit | Status | Fix Implemented |
| :--- | :--- | :--- |
| **`llms.txt is served`** (0/4 pts) | ✅ **FIXED** | Created `/public/llms.txt` following the official [llmstxt.org](https://llmstxt.org) standard. Contains structured plain Markdown summarizing brand, capacity (8-16), bedrooms (4 with 1 master), amenities, check-in (2PM) / check-out (12PM), Plus Code, and concierge contacts. |
| **`llms.txt is well-formed`** (1/3 pts) | ✅ **FIXED** | Added clean H1 title, blockquote brief description, H2 section headings, bulleted property attributes, and external documentation links. |
| **`Serves Markdown when an agent asks for it`** (0/2 pts) | ✅ **FIXED** | Configured Apache `.htaccess` content negotiation: when a bot sends `Accept: text/markdown`, the server dynamically rewrites the root request to serve `/llms.txt`. |
| **`Homepage advertises resources via Link headers`** (0/1 pt) | ✅ **FIXED** | Added `Header set Link '<https://casamariaph.com/llms.txt>; rel="alternate"; type="text/markdown"'` in `.htaccess` and `<link rel="alternate" type="text/markdown" href="https://casamariaph.com/llms.txt" />` in `index.html`. |

---

### 2. Crawl Permission & Content Signals (Score Impact: +3 Points)

| Issue from Audit | Status | Fix Implemented |
| :--- | :--- | :--- |
| **`Content Signals declared`** (0/3 pts) | ✅ **FIXED** | Updated `public/robots.txt` with explicit allowances for all top AI crawlers (`GPTBot`, `ChatGPT-User`, `Google-Extended`, `PerplexityBot`, `ClaudeBot`, `anthropic-ai`, `CCBot`, `Applebot-Extended`, `Cohere-ai`, `Meta-ExternalAgent`) and declared `# Content-Signal: search=yes, ai-train=yes`. |

---

### 3. Findability & True HTTP Status Codes (Score Impact: +3 Points)

| Issue from Audit | Status | Fix Implemented |
| :--- | :--- | :--- |
| **`Missing pages return a real 404`** (0/3 pts) | ✅ **FIXED** | Previously, `.htaccess` redirected all non-existent paths to `index.html` (HTTP 200 soft-404). Configured `.htaccess` rewrite rules to return a real HTTP `404 Not Found` for missing static files (`.jpg`, `.css`, `.js`, etc.) and unknown subpaths. |
| **`Sitemap carries recent lastmod dates`** | ✅ **UPDATED** | Refreshed `public/sitemap.xml` with current timestamps (`2026-11-12`) and included `/llms.txt` and `/llms-full.txt`. |

---

### 4. Readability & Semantic Heading Hierarchy (Score Impact: +3 Points)

| Issue from Audit | Status | Fix Implemented |
| :--- | :--- | :--- |
| **`Page has a clear heading hierarchy`** (0/3 pts) | ✅ **FIXED** | Resolved multiple heading violations across components: <br>1. **Removed Duplicate `<h1>`**: Replaced the `<h1>` inside `Preloader.jsx` with a styled `<div>`, ensuring `Hero.jsx` holds the sole `<h1>` on the page.<br>2. **Fixed Heading Skipping in Gallery**: Changed `<h4 className="text-lg">` in `GallerySection.jsx` to `<h3>` so it directly follows `<h2>` without skipping a level.<br>3. **Fixed Footer Headings**: Changed `<h4>` columns in `Footer.jsx` to `<h3>`.<br>4. **Semantic FAQ Headings**: Wrapped accordion questions in `<h3>` under the FAQ section `<h2>`. |

---

### 5. Structured Meaning & Rich Schema.org (Score Impact: +5 Points)

| Issue from Audit | Status | Fix Implemented |
| :--- | :--- | :--- |
| **`Organization or LocalBusiness schema is complete`** (0/4 pts) | ✅ **FIXED** | Upgraded JSON-LD structured data in `index.html` to a multi-typed `@graph` containing `LodgingBusiness`, `LocalBusiness`, and `Organization`. Added required attributes: `legalName`, `email`, `telephone`, `checkinTime` ("14:00"), `checkoutTime` ("12:00"), `numberOfRooms` (4), `currenciesAccepted` ("PHP"), `paymentAccepted`, `smokingAllowed` (false), `petsAllowed`, and full `openingHoursSpecification`. |
| **`Structured data covers several schema types`** (1/2 pts) | ✅ **FIXED** | Added an explicit Schema.org **`FAQPage`** entity containing all 5 guest questions and answers to enable rich Google & AI knowledge graph citations. |

---

### 6. Commercial Legibility & Legal Pages (Score Impact: +4 Points)

| Issue from Audit | Status | Fix Implemented |
| :--- | :--- | :--- |
| **`About, contact and legal pages are linked`** (0/4 pts) | ✅ **FIXED** | Added dedicated footer links and an interactive accessible modal in `Footer.jsx` for **Privacy & Guest Data Policy** and **Stay Terms & House Rules**, along with direct links to `/llms.txt`, `#kontakt`, and `#o-nama`. |

---

## 🚀 Deployment Instructions

All changes are compiled in `dist/` and pushed to GitHub:
- **Source Code Branch**: `main`
- **Hostinger Production Branch**: `production`

To publish future updates:
```powershell
npm run deploy-prod
```
Once deployed, re-run your AI Visibility Scan to verify your upgraded score!
