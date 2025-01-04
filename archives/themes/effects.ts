import type { ThemeConfig } from 'tailwindcss/types/config';

export const boxShadow = {
  sketch: '4px 4px 0px 0px rgba(0,0,0)',
  navbar: '0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)'
} satisfies ThemeConfig['boxShadow'];

export const effects = { boxShadow };
