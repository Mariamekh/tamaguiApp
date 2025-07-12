# 🎰 Casino App

Casino UI built with **React Native**, **Tamagui**, and **Reanimated 3**, theming, and animation experience.

## Features

- ⚡ Fully responsive Tamagui UI
- 🎨 Light / Dark theme toggle
- 🎞️ Smooth animations using Reanimated 3
- 🎯 Hero Image Slider with CTA buttons, autoplay, and indicator
- 💸 Animated balance counter
- 🎉 Confetti overlay animation
- 🧪 Full test coverage with Jest and React Native Testing Library
- 🧼 Clean, maintainable folder structure with strict TypeScript

---

## Getting Started

```bash
git clone

# install dependencies
yarn

# start the metro bundler
yarn start

# run the app (iOS or Android)
yarn ios
```

## 🧪 Run Tests

yarn test

All tests are located in src/components/\*\*/_tests_.

## Project Structure

src/
├── components/
│ ├── Header/
│ ├── HeroSlider/
│ ├── ThemeToggle/
│ ├── ...
│
├── hooks/
│ └── useAnimatedBalance.ts
│
├── screens/
│ └── HomeScreen.tsx
│
├── test/
│ └── test-utils.tsx

## Custom Components

Header: Top layout with user avatar, balance display, and refresh.

HeroSlider: Autoplaying image carousel with slide indicators and CTA.

ThemeToggle: Icon-based light/dark switcher.

ConfettiOverlay: Fires celebratory confetti on event triggers.

# tamaguiApp
