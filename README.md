# HabitXP 🌿

A mobile habit tracking app with rich analytics, streaks, and gamified achievements. Built with React Native + Expo.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React Native + Expo (SDK 54) |
| Routing | Expo Router (file-based, mirrors Next.js) |
| Styling | NativeWind (Tailwind CSS for React Native) |
| Navigation | React Navigation — bottom tabs |
| State | Zustand + TanStack Query |
| Charts | Victory Native / Gifted Charts |
| Auth | Google OAuth via Firebase |
| HTTP | Axios |

---

## Getting Started

### Prerequisites
- Node.js v18+
- Expo Go app on your phone (optional)

### Install dependencies

```bash
npm install
```

### Run the app

```bash
npx expo start
```

Then:
- Press `w` to open in browser
- Press `a` for Android emulator
- Press `i` for iOS simulator (Mac only)
- Scan the QR code with Expo Go on your phone

---

## Project Structure

```
habitxp/
├── app/                        # Expo Router screens
│   ├── _layout.tsx             # Root layout
│   ├── index.tsx               # Home screen
│   ├── stats.tsx               # Stats / dashboard
│   ├── achievements.tsx        # Achievements screen
│   ├── habits/
│   │   ├── index.tsx           # Habit list
│   │   └── [id].tsx            # Individual habit detail
│   └── (auth)/
│       └── login.tsx           # Login screen
├── components/                 # Reusable UI components
├── hooks/                      # Custom React hooks
├── api/                        # Axios API calls to backend
├── theme/                      # Colors, typography, constants
├── assets/                     # Images, fonts, icons
├── global.css                  # NativeWind / Tailwind entry
├── tailwind.config.js          # Tailwind configuration
├── babel.config.js             # Babel configuration
├── metro.config.js             # Metro bundler configuration
├── app.json                    # Expo app configuration
└── tsconfig.json               # TypeScript configuration
```

---

## Color Palette

| Role | Light Mode | Dark Mode |
|---|---|---|
| Primary Emerald | `#10B981` | `#10B981` |
| Primary Dark | `#059669` | `#0D9669` |
| Accent Glow | `#34D399` | `#34D399` |
| Gold (achievements) | `#F59E0B` | `#F59E0B` |
| Background | `#F9FAFB` | `#0F1410` |
| Surface/Cards | `#FFFFFF` | `#1C251D` |
| Border | `#E5E7EB` | `#263028` |
| Text Primary | `#111827` | `#E8F0E9` |
| Text Muted | `#6B7280` | `#5A7060` |
| Danger/Miss | `#F87171` | `#EF4444` |

---

## Features

- **Habit Management** — create, edit, delete, archive habits with emoji, color, priority, category, frequency
- **Daily Logging** — yes/no or measurable habits, retroactive logging
- **Streaks** — per-habit current and longest streak tracking
- **Smart Notifications** — per-habit custom time or end-of-day reminder for unlogged habits
- **Dashboard** — calendar heatmap, bar charts, line charts, day-of-week breakdown
- **Achievements** — 30 achievements across streak, performance, milestone, and fun categories
- **Dark Mode** — user-toggled in settings

---

## Environment Variables

Create a `.env` file in the root:

```env
EXPO_PUBLIC_API_URL=http://localhost:8000
EXPO_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
EXPO_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
```

---

## Related

- [HabitXP API](https://github.com/YOURUSERNAME/habitxp-api) — FastAPI backend
