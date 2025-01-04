import type { Config } from 'tailwindcss';
import TailwindCssAnimate from 'tailwindcss-animate';
import { colors, effects, plugins, sizing } from './themes';

export default {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: { center: true },
    extend: {
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif']
      },
      colors: {
        primary: {
          DEFAULT: colors.primary
        },
        secondary: {
          DEFAULT: colors.secondary
        },
        tertiary: {
          DEFAULT: colors.tertiary
        },
        dark: {
          1: colors['dark-1'],
          2: colors['dark-2']
        }
      },
      ...sizing,
      ...effects
    }
  },
  plugins: [TailwindCssAnimate, ...plugins]
} satisfies Config;
