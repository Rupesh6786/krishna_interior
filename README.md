# 🏠 Krishna Interiors – Interior Design Web App

**Krishna Interiors** is a modern, full-stack web application crafted for an interior design company. It serves as a digital showroom, interactive engagement hub, and a smart assistant for clients—showcasing interior design works, enabling real-time price estimation, and offering personalized design recommendations.

---

## 🚀 Live Demo

🌐 [Visit the Website](https://krishna-interior.netlify.app)

---

## 🧰 Tech Stack

- 🧱 **Framework**: Next.js (App Router) + React
- 🔤 **Language**: TypeScript
- 🎨 **Styling**: Tailwind CSS with a custom color palette
- 🧩 **UI Components**: ShadCN (accessible & themeable)
- 📝 **Forms**: React Hook Form + Zod (type-safe validation)
- ☁️ **Hosting**: Netlify

---

## 💡 Key Features

### 🏡 Homepage (`/`)
- Stunning hero image with bold CTAs ("Get a Free Quote", "Explore Designs")
- Introduction to the lead designer and firm’s process
- Showcases featured projects and real client testimonials

### 🖼️ Inspiration Gallery (`/gallery`)
- Filterable design gallery by:
  - Room Type (Kitchen, Bedroom, etc.)
  - Style (Minimal, Modern, Contemporary, etc.)
  - Budget slider (for financial fit)
- Encourages exploration and visual inspiration

### 💸 Price & Budget Estimator (`/estimator`)
- Real-time, interactive pricing tool
- Options to select:
  - Project type (Kitchen, Wardrobe, Full Home)
  - Room size (via slider)
  - Quality tier (Basic, Standard, Premium)
- Delivers transparent pricing to build client trust

### 🧠 Design Assistant (`/designer`)
- Users describe their space and design preferences
- Returns intelligent suggestions like:
  - Color schemes
  - Texture/material changes
  - Layout tips
- A unique, value-added service for clients

### ⭐ Reviews (`/reviews`) & 📬 Contact (`/contact`)
- Reviews page shows real client feedback to build credibility
- Contact form includes:
  - Email
  - Phone number
  - Inquiry form for consultations

---

## 🧩 Application Architecture

- 🔀 **App Routing**: Utilizes Next.js App Router for modular structure
- 🔐 **Secure Server Actions**:
  - Client form → `/designer/client.tsx`
  - Triggers → Server Actions (`/app/actions.ts`)
  - Executes → Server-side logic to handle design suggestions
- 🎨 **Custom UI/UX**:
  - Responsive layout (mobile-friendly)
  - Elegant color palette: muted gold, terracotta, soft beige
  - Slide-out menu for mobile navigation

---

## 👤 Author

**Rupesh Thakur**  
🎓 BSc.IT Student, Thakur College of Science and Commerce  
🔗 [GitHub – @Rupesh6786](https://github.com/Rupesh6786)  
📧 Email: 55rupeshthakur@gmail.com

---

## 📄 License

This project is licensed under the **MIT License**.

---

> This project is designed not just to present a portfolio, but to elevate client experience through design intelligence, cost transparency, and elegant user experience.
