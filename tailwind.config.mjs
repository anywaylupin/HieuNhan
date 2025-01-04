import { colors } from './src/theme';
import { default as flattenColorPalette } from 'tailwindcss/lib/util/flattenColorPalette';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      boxShadow: {
        sketch: '4px 4px 0px 0px rgba(0,0,0)',
        navbar:
          '0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)'
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
      }
    }
  },
  plugins: [AddVariablesForColors]
};

function AddVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme('colors'));
  const newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({ ':root': newVars });
}
