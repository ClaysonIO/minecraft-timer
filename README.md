# Game Timer

A single-page, multi-theme countdown timer for managing screen time (e.g. per child). Open `index.html` in any browser — no server or build step required.

## Features

- **Multiple timers** — Start with two (Child 1 and Child 2) or add as many as you need via the **+** button in the top-right. Timers tile and wrap to fit the screen.
- **Circular countdown** — Each timer shows a large SVG circle that drains as time runs down, with a central **MM:SS** readout.
- **Editable time** — Click the time display to set the duration in minutes (only when the timer is not running).
- **Editable names** — Click a timer's name to rename it.
- **Start / Pause / Reset** — Each timer has its own controls. Pausing freezes the countdown; resuming continues from the remaining time.
- **Persistence** — Timer list (names and count) and each timer's state (duration, remaining time, running/paused) are saved to `localStorage`. Refreshing or closing the browser and reopening restores everything; running timers keep counting using wall-clock time.
- **Expiry** — When a timer hits zero: the panel flashes red, a short alarm plays, and the browser speaks a personalized message (e.g. *"Child 1, your Minecraft time is over!"*).
- **Remove timers** — Each panel has an **×** button (hidden when only one timer remains). Removing opens a confirmation dialog; the timer list and names are persisted.

## Themes

Press the **⚙ settings** button (top-left) to open the settings panel. A grid of theme buttons lets you instantly preview and switch between 11 game skins:

| Theme | Style |
|---|---|
| **Minecraft** | Brown/green earthy palette with gold title |
| **Roblox** | Dark navy with red accent |
| **Fortnite** | Midnight teal with electric gold |
| **Animal Crossing** | Forest green with warm pastels |
| **LEGO** | Deep dark with primary LEGO colors |
| **PAW Patrol** | Night blue with pup rescue colors |
| **Pokemon** | Dark with Pokéball red and yellow |
| **Splatoon** | Near-black with neon ink splatter colors |
| **Among Us** | Space dark with crewmate colors |
| **Super Mario** | Dark with Mario red, sky blue, and gold |
| **Disney** | Midnight blue with magic gold |

Clicking a theme **previews** it live. Pressing **SAVE** persists your choice; pressing **CANCEL** or pressing Escape reverts to the previously saved theme.

### Adding new themes

All themes live in `themes.js` as plain JS objects in the `THEMES` array. Each theme defines:

- `id` — unique string key (saved to `localStorage`)
- `name` — display name shown in the picker
- `title` — header text shown in the app
- `gameName` — used in the expired panel message (*"Roblox time is over!"*)
- `previewColors` — `{ bg, accent, text }` used to style the picker button swatch
- `vars` — CSS custom property values (colors, gradients) applied to `:root`
- `accents[]` — 6 panel accent objects (panel background, circle stroke, name label colors)

To add a theme, add a new object to the `THEMES` array in `themes.js` following the same shape — no changes to `index.html` are needed.

## Tech

- Two files: **`index.html`** (inline CSS and JS) + **`themes.js`** (theme data).
- Font: [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) (Google Fonts).
- Storage: `localStorage` keys `mc-timer-list`, `mc-timer-{id}`, `mc-timer-announcement`, `mc-timer-theme`.

## How to run

Open `index.html` in a browser (double-click or **File → Open**). Works offline after the font has loaded once.

## Install on your phone (PWA)

The app is a Progressive Web App (PWA). Once it's hosted over HTTPS you can save it to your phone's home screen and it will open like a native app with no browser chrome.

**Hosting options (HTTPS required for PWA install)**

- **GitHub Pages** — push the repo and enable Pages from the repo settings. Your URL will be something like `https://username.github.io/minecraft-timer/`.
- **Netlify / Vercel** — drag-and-drop the project folder or connect the repo; both serve over HTTPS automatically.
- **Local network** — run any static HTTPS server (e.g. `npx serve .` then expose via ngrok or a local cert).

> Opening `index.html` via `file://` will *not* register the service worker; a real HTTP server is required.

**Android (Chrome)**

1. Open the site in Chrome.
2. Tap the three-dot menu → **Add to Home screen**.
3. Confirm — the app icon appears on your home screen.

**iOS (Safari)**

1. Open the site in Safari.
2. Tap the Share button → **Add to Home Screen**.
3. Confirm — the Game Timer icon appears on your home screen.

Once installed, the app shell is cached by the service worker so it loads instantly even with a poor connection.
