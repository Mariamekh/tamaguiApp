import {media, shorthands, themes, tokens} from '@tamagui/config/v4';
import {createTamagui, createFont} from '@tamagui/core';
import {createAnimations} from '@tamagui/animations-css';

export const animations = createAnimations({
  lazy: 'ease-in 500ms',
  quick: 'ease-in 100ms',
});

export const fonts = {
  body: createFont({
    family: `Helvetica`,
    size: {
      2: 12,
      3: 14,
      4: 16,
      5: 18,
      6: 20,
      7: 22,
      8: 26,
      9: 32,
      10: 38,
    },
    letterSpacing: {},
    weight: {
      4: '400',
    },
    lineHeight: {
      2: 15,
      3: 17,
      4: 20,
      5: 24,
      7: 29,
      8: 33,
      9: 39,
      10: 46,
    },
  }),
  heading: createFont({
    family: `Helvetica`,
    size: {
      2: 16,
      3: 20,
      4: 24,
      5: 28,
      6: 32,
      7: 40,
      8: 48,
      9: 56,
      10: 66,
    },
    letterSpacing: {},
    lineHeight: {
      2: 1.5 * 16,
      3: 1.5 * 20,
      4: 1.5 * 24,
      5: 1.5 * 28,
      6: 1.5 * 32,
      7: 1.5 * 40,
      8: 1.5 * 48,
      9: 1.5 * 56,
      10: 1.5 * 66,
    },
    transform: {
      5: 'uppercase',
      6: 'none',
    },
    weight: {
      4: '400',
      5: '700',
    },
  }),
};

// Extend themes to include missing tokens
const customThemes = {
  light: {
    ...themes.light,
    backgroundStrong: '#f0f0f0',
    color: '#000',
    gray8: '#888',
    gray10: '#666',
    blue10: '#007bff',
    purple: '#FF30E3',
    darkPurple: '#d23ebe',
  },
  dark: {
    ...themes.dark,
    backgroundStrong: '#1a1a1a',
    color: '#fff',
    gray8: '#444',
    gray10: '#333',
    blue10: '#1e90ff',
    purple: '#FF30E3',
    darkPurple: '#d23ebe',
  },
};

const config = createTamagui({
  defaultFont: 'body',
  animations,
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands,
  fonts,
  themes: customThemes,
  tokens,
  media,
});

type AppConfig = typeof config;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config;
