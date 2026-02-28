# Minecraft Timer

A single-page, Minecraft-themed countdown timer for managing screen time (e.g. per child). Open `index.html` in any browser — no server or build step required.

## Features

- **Multiple timers** — Start with two (Samuel & Miriam) or add as many as you need via the **+** button in the top-right. Timers tile and wrap to fit the screen.
- **Circular countdown** — Each timer shows a large SVG circle that drains as time runs down, with a central **MM:SS** readout.
- **Editable time** — Click the time display to set the duration in minutes (only when the timer is not running).
- **Editable names** — Click a timer’s name to rename it.
- **Start / Pause / Reset** — Each timer has its own controls. Pausing freezes the countdown; resuming continues from the remaining time.
- **Persistence** — Timer list (names and count) and each timer’s state (duration, remaining time, running/paused) are saved to `localStorage`. Refreshing or closing the browser and reopening restores everything; running timers keep counting using wall-clock time.
- **Expiry** — When a timer hits zero: the panel flashes red, a short alarm plays, and the browser speaks a personalized message (e.g. *"Samuel, your minecraft time is over! Please turn off your device and give it to Daddy"*).
- **Remove timers** — Each panel has an **×** button (hidden when only one timer remains). Removing opens a confirmation dialog; the timer list and names are persisted.

## Tech

- Single file: **index.html** (inline CSS and JavaScript).
- Font: [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) (Google Fonts).
- Storage: `localStorage` keys `mc-timer-list` (list of `{ id, displayName }`) and `mc-timer-{id}` (per-timer state).

## How to run

Open `index.html` in a browser (double-click or **File → Open**). Works offline after the font has loaded once.
